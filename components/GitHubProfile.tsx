"use client"

import React, { useEffect, useState, useMemo } from 'react'
import { useTheme } from '../context/ThemeProvider';
import Image from 'next/image';

interface GitHubUser {
   login: string;
   name: string;
   avatar_url: string;
   bio: string;
   public_repos: number;
   followers: number;
   following: number;
   html_url: string;
   location: string;
   blog: string;
   company: string;
}

interface GitHubRepo {
   id: number;
   name: string;
   language: string;
   stargazers_count: number;
   forks_count: number;
   html_url: string;
}

const GitHubProfile = () => {
   const { theme } = useTheme();
   const [effectiveTheme, setEffectiveTheme] = useState<string>('light');
   const [githubData, setGithubData] = useState<GitHubUser | null>(null);
   const [repos, setRepos] = useState<GitHubRepo[]>([]);
   const [languages, setLanguages] = useState<{ [key: string]: number }>({});
   const [loading, setLoading] = useState(true);

   // Cache configuration
   const CACHE_KEY = 'github_profile_data';
   const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds

   // Language to icon mapping with colors
   const languageIcons: { [key: string]: { icon: string; color: string } } = {
      JavaScript: { icon: 'javascript', color: '#F7DF1E' },
      TypeScript: { icon: 'typescript', color: '#3178C6' },
      React: { icon: 'react', color: '#61DAFB' },
      'Next.js': { icon: 'nextjs', color: '#000000' },
      Node: { icon: 'nodejs', color: '#339933' },
      Python: { icon: 'python', color: '#3776AB' },
      HTML5: { icon: 'html5', color: '#E34F26' },
      CSS3: { icon: 'css3', color: '#1572B6' },
      Tailwind: { icon: 'tailwindcss', color: '#06B6D4' },
      MongoDB: { icon: 'mongodb', color: '#47A248' },
      Git: { icon: 'git', color: '#F05032' },
      Docker: { icon: 'docker', color: '#2496ED' },
      Firebase: { icon: 'firebase', color: '#FFCA28' },
      PostgreSQL: { icon: 'postgresql', color: '#4169E1' },
      MySQL: { icon: 'mysql', color: '#4479A1' },
      Express: { icon: 'express', color: '#000000' },
      Vue: { icon: 'vuejs', color: '#4FC08D' },
      Angular: { icon: 'angularjs', color: '#DD0031' },
      Svelte: { icon: 'svelte', color: '#FF3E00' },
      GraphQL: { icon: 'graphql', color: '#E10098' },
      Redux: { icon: 'redux', color: '#764ABC' },
      Sass: { icon: 'sass', color: '#CC6699' },
      Bootstrap: { icon: 'bootstrap', color: '#7952B3' },
      jQuery: { icon: 'jquery', color: '#0769AD' },
      PHP: { icon: 'php', color: '#777BB4' },
      Java: { icon: 'java', color: '#ED8B00' },
      'C++': { icon: 'cplusplus', color: '#00599C' },
      C: { icon: 'c', color: '#A8B9CC' },
      Go: { icon: 'go', color: '#00ADD8' },
      Rust: { icon: 'rust', color: '#000000' },
      Swift: { icon: 'swift', color: '#FA7343' },
      Kotlin: { icon: 'kotlin', color: '#7F52FF' },
      Dart: { icon: 'dart', color: '#0175C2' },
      Flutter: { icon: 'flutter', color: '#02569B' },
      'React Native': { icon: 'react', color: '#61DAFB' },
      Linux: { icon: 'linux', color: '#FCC624' },
      Ubuntu: { icon: 'ubuntu', color: '#E95420' },
      Windows: { icon: 'windows8', color: '#0078D6' },
      macOS: { icon: 'apple', color: '#000000' },
      VS: { icon: 'visualstudio', color: '#5C2D91' },
      Figma: { icon: 'figma', color: '#F24E1E' },
      Photoshop: { icon: 'photoshop', color: '#31A8FF' },
      Illustrator: { icon: 'illustrator', color: '#FF9A00' },
      Webpack: { icon: 'webpack', color: '#8DD6F9' },
      Vite: { icon: 'vitejs', color: '#646CFF' },
      Electron: { icon: 'electron', color: '#47848F' },
      Jest: { icon: 'jest', color: '#C21325' },
      Cypress: { icon: 'cypressio', color: '#17202C' },
      Storybook: { icon: 'storybook', color: '#FF4785' },
      Prisma: { icon: 'prisma', color: '#2D3748' },
      Redis: { icon: 'redis', color: '#DC382D' },
      Nginx: { icon: 'nginx', color: '#009639' },
      Apache: { icon: 'apache', color: '#D22128' },
      AWS: { icon: 'amazonwebservices', color: '#FF9900' },
      GCP: { icon: 'googlecloud', color: '#4285F4' },
      Azure: { icon: 'microsoftazure', color: '#0078D4' },
      Vercel: { icon: 'vercel', color: '#000000' },
      Netlify: { icon: 'netlify', color: '#00C7B7' },
      Heroku: { icon: 'heroku', color: '#430098' },
      DigitalOcean: { icon: 'digitalocean', color: '#0080FF' },
      Kubernetes: { icon: 'kubernetes', color: '#326CE5' }
   };

   useEffect(() => {
      const determineEffectiveTheme = () => {
         if (theme === 'system') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
         }
         return theme || 'light';
      };

      setEffectiveTheme(determineEffectiveTheme());

      if (theme === 'system') {
         const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
         const handleChange = () => setEffectiveTheme(mediaQuery.matches ? 'dark' : 'light');

         mediaQuery.addEventListener('change', handleChange);
         return () => mediaQuery.removeEventListener('change', handleChange);
      }
   }, [theme]);

   useEffect(() => {
      const fetchGitHubData = async () => {
         try {
            setLoading(true);

            // Check if data exists in cache and is still valid
            const cachedData = localStorage.getItem(CACHE_KEY);
            if (cachedData) {
               try {
                  const { data, timestamp } = JSON.parse(cachedData);
                  const isExpired = Date.now() - timestamp > CACHE_DURATION;

                  if (!isExpired && data.githubData && data.repos) {
                     // Use cached data
                     setGithubData(data.githubData);
                     setRepos(data.repos);
                     setLanguages(data.languages);
                     setLoading(false);
                     return;
                  }
               } catch (parseError) {
                  console.warn('Failed to parse cached data:', parseError);
                  localStorage.removeItem(CACHE_KEY);
               }
            }

            // Fetch fresh data from GitHub API
            const userResponse = await fetch('https://api.github.com/users/BuddhadebKoner');
            const userData: GitHubUser = await userResponse.json();

            const reposResponse = await fetch('https://api.github.com/users/BuddhadebKoner/repos?sort=stars&per_page=30');
            const reposData: GitHubRepo[] = await reposResponse.json();

            // Calculate language usage
            const languageCount: { [key: string]: number } = {};
            reposData.forEach(repo => {
               if (repo.language) {
                  languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
               }
            });

            // Update state
            setGithubData(userData);
            setRepos(reposData);
            setLanguages(languageCount);

            // Cache the data
            const cacheData = {
               data: {
                  githubData: userData,
                  repos: reposData,
                  languages: languageCount
               },
               timestamp: Date.now()
            };
            localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));

         } catch (error) {
            console.error('Error fetching GitHub data:', error);

            // If API fails, try to use any existing cached data even if expired
            const cachedData = localStorage.getItem(CACHE_KEY);
            if (cachedData) {
               try {
                  const { data } = JSON.parse(cachedData);
                  if (data.githubData && data.repos) {
                     setGithubData(data.githubData);
                     setRepos(data.repos);
                     setLanguages(data.languages);
                     console.log('Using expired cache due to API error');
                  }
               } catch (parseError) {
                  console.warn('Failed to parse cached data on error fallback:', parseError);
               }
            }
         } finally {
            setLoading(false);
         }
      };

      fetchGitHubData();
   }, [CACHE_KEY, CACHE_DURATION]);

   const totalStars = useMemo(() =>
      repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
      [repos]
   );

   const topLanguages = useMemo(() =>
      Object.entries(languages)
         .sort(([, a], [, b]) => b - a)
         .slice(0, 6),
      [languages]
   );

   // Get most relevant tech stack icons based on actual usage and common web dev stack
   const relevantTech = useMemo(() => {
      const coreStack = ['React', 'Next.js', 'TypeScript', 'JavaScript'];
      const userLanguages = Object.keys(languages);
      const additionalTech = ['Node', 'HTML5', 'CSS3', 'Tailwind', 'MongoDB', 'Git', 'Docker', 'VS'];

      // Combine core stack with user's actual languages and additional tech
      const combined = [...coreStack, ...userLanguages.slice(0, 4), ...additionalTech];

      // Remove duplicates and limit to 12 items
      return [...new Set(combined)].slice(0, 12);
   }, [languages]);

   if (loading) {
      return (
         <div className='relative w-full max-w-md h-fit sm:h-80 md:h-96 flex items-center justify-center'>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-highlight"></div>
         </div>
      );
   }

   if (!githubData) {
      return (
         <div className='relative w-full max-w-md h-fit sm:h-80 md:h-96 flex items-center justify-center'>
            <p className="text-primary">Failed to load GitHub data</p>
         </div>
      );
   }

   return (
      <div className='relative w-full max-w-md h-fit flex flex-col gap-4'>
         {/* GitHub Profile Card */}
         <div className="bg-background-secondary border border-theme rounded-lg p-4 transition-all duration-300 hover:border-highlight-secondary">
            <div className="flex items-center gap-3 mb-3">
               <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-highlight">
                  <Image
                     src={githubData.avatar_url}
                     alt={`${githubData.name} GitHub Avatar`}
                     fill
                     className="object-cover"
                  />
               </div>
               <div>
                  <h3 className="text-highlight font-medium text-base">
                     [{githubData.name}]
                  </h3>
                  <a
                     href={githubData.html_url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-sm link-color hover:link-hover"
                  >
                     @{githubData.login} ↗
                  </a>
               </div>
            </div>

            {githubData.bio && (
               <p className="text-primary text-sm mb-3 leading-relaxed">
                  {githubData.bio}
               </p>
            )}

            {/* Cache indicator for development */}
            {process.env.NODE_ENV === 'development' && (
               <div className="text-xs text-secondary mb-2 opacity-50">
                  📋 {localStorage.getItem(CACHE_KEY) ? 'Cached data' : 'Fresh data'}
               </div>
            )}

            {/* GitHub Stats */}
            <div className="grid grid-cols-2 gap-3 mb-3">
               <div className="text-center">
                  <div className="text-highlight font-bold text-lg">
                     {githubData.public_repos}
                  </div>
                  <div className="text-secondary text-xs">repositories</div>
               </div>
               <div className="text-center">
                  <div className="text-highlight font-bold text-lg">
                     {totalStars}
                  </div>
                  <div className="text-secondary text-xs">total stars</div>
               </div>
               <div className="text-center">
                  <div className="text-highlight font-bold text-lg">
                     {githubData.followers}
                  </div>
                  <div className="text-secondary text-xs">followers</div>
               </div>
               <div className="text-center">
                  <div className="text-highlight font-bold text-lg">
                     {topLanguages.length}
                  </div>
                  <div className="text-secondary text-xs">languages</div>
               </div>
            </div>

            <a
               href={githubData.html_url}
               target="_blank"
               rel="noopener noreferrer"
               className="block w-full text-center bg-accent-green hover:bg-accent-green-light text-background-primary font-medium py-2 px-4 rounded transition-colors duration-200"
            >
               [View Profile ↗]
            </a>
         </div>

         {/* Top Languages */}
         <div className="bg-background-secondary border border-theme rounded-lg p-4">
            <h4 className="text-highlight font-medium text-sm mb-3">
               [// Top Languages]
            </h4>
            <div className="grid grid-cols-3 gap-2">
               {topLanguages.map(([language, count]) => {
                  const langInfo = languageIcons[language];
                  return (
                     <div key={language} className="flex flex-col items-center gap-1">
                        {langInfo ? (
                           <div className="relative w-8 h-8 flex items-center justify-center">
                              <Image
                                 src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${langInfo.icon}/${langInfo.icon}-original.svg`}
                                 alt={language}
                                 width={24}
                                 height={24}
                                 className="object-contain"
                                 style={{
                                    filter: effectiveTheme === 'dark' ? 'brightness(1.1)' : 'brightness(0.9)'
                                 }}
                                 onError={(e) => {
                                    // Fallback to plain.svg if original.svg fails
                                    const target = e.target as HTMLImageElement;
                                    if (target.src.includes('-original.svg')) {
                                       target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${langInfo.icon}/${langInfo.icon}-plain.svg`;
                                    }
                                 }}
                              />
                           </div>
                        ) : (
                           <div className="w-8 h-8 flex items-center justify-center bg-accent text-background-primary rounded text-xs font-bold">
                              {language.charAt(0)}
                           </div>
                        )}
                        <span className="text-xs text-primary text-center">
                           {language}
                        </span>
                        <span className="text-xs text-secondary">
                           {count}
                        </span>
                     </div>
                  );
               })}
            </div>
         </div>

         {/* Tech Stack */}
         <div className="bg-background-secondary border border-theme rounded-lg p-4">
            <h4 className="text-highlight font-medium text-sm mb-3">
               [// Tech Stack]
            </h4>
            <div className="grid grid-cols-4 gap-3">
               {relevantTech.map((tech) => {
                  const techInfo = languageIcons[tech];
                  return (
                     <div key={tech} className="flex flex-col items-center gap-1" title={tech}>
                        {techInfo ? (
                           <div className="relative w-8 h-8 flex items-center justify-center">
                              <Image
                                 src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${techInfo.icon}/${techInfo.icon}-original.svg`}
                                 alt={tech}
                                 width={24}
                                 height={24}
                                 className="object-contain transition-transform duration-200 hover:scale-110"
                                 style={{
                                    filter: effectiveTheme === 'dark' ? 'brightness(1.1)' : 'brightness(0.9)'
                                 }}
                                 onError={(e) => {
                                    // Fallback to plain.svg if original.svg fails
                                    const target = e.target as HTMLImageElement;
                                    if (target.src.includes('-original.svg')) {
                                       target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${techInfo.icon}/${techInfo.icon}-plain.svg`;
                                    }
                                 }}
                              />
                           </div>
                        ) : (
                           <div className="w-8 h-8 flex items-center justify-center bg-accent text-background-primary rounded text-xs font-bold">
                              {tech.charAt(0)}
                           </div>
                        )}
                        <span className="text-xs text-primary text-center">
                           {tech}
                        </span>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default React.memo(GitHubProfile);
