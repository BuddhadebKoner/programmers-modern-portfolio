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
   const [error, setError] = useState<string | null>(null);
   const [retryCount, setRetryCount] = useState(0);

   // Cache configuration
   const CACHE_KEY = 'github_profile_data';
   const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds
   const MAX_RETRIES = 3;

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
            setError(null);

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

            // Fetch fresh data from GitHub API with timeout
            const fetchWithTimeout = async (url: string, timeoutMs = 10000) => {
               const controller = new AbortController();
               const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

               try {
                  const response = await fetch(url, { signal: controller.signal });
                  clearTimeout(timeoutId);

                  if (!response.ok) {
                     throw new Error(`HTTP error! status: ${response.status}`);
                  }

                  return response;
               } catch (error) {
                  clearTimeout(timeoutId);
                  throw error;
               }
            };

            const userResponse = await fetchWithTimeout('https://api.github.com/users/BuddhadebKoner');
            const userData: GitHubUser = await userResponse.json();

            const reposResponse = await fetchWithTimeout('https://api.github.com/users/BuddhadebKoner/repos?sort=stars&per_page=30');
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
            setRetryCount(0); // Reset retry count on success

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

            // Set error message based on error type
            if (error instanceof Error) {
               if (error.name === 'AbortError') {
                  setError('Request timed out. Please try again.');
               } else if (error.message.includes('404')) {
                  setError('GitHub profile not found.');
               } else if (error.message.includes('403')) {
                  setError('GitHub API rate limit exceeded. Please try again later.');
               } else {
                  setError('Failed to load GitHub data. Please check your connection.');
               }
            } else {
               setError('An unexpected error occurred.');
            }

            // If API fails, try to use any existing cached data even if expired
            const cachedData = localStorage.getItem(CACHE_KEY);
            if (cachedData) {
               try {
                  const { data } = JSON.parse(cachedData);
                  if (data.githubData && data.repos) {
                     setGithubData(data.githubData);
                     setRepos(data.repos);
                     setLanguages(data.languages);
                     setError('Using cached data - some information may be outdated.');
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
   }, [CACHE_KEY, CACHE_DURATION, retryCount]);

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

   // Retry function
   const handleRetry = () => {
      if (retryCount < MAX_RETRIES) {
         setRetryCount(prev => prev + 1);
      }
   };

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

   // Enhanced loading state with skeleton
   if (loading) {
      return (
         <div className='relative w-full max-w-md mx-auto flex flex-col gap-4 mt-10'>
            {/* Loading animation with licky code elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
               <div className="absolute top-4 right-4 text-accent-green opacity-20 font-mono text-sm animate-pulse">{'{'}</div>
               <div className="absolute bottom-8 left-6 text-link-color opacity-15 font-mono text-xs animate-pulse">{'loading...'}</div>
            </div>

            {/* Skeleton for main card */}
            <div className="relative z-10 bg-background-secondary border border-theme rounded-lg p-4 animate-pulse">
               <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-theme/20 rounded-full"></div>
                  <div className="flex-1">
                     <div className="h-4 bg-theme/20 rounded mb-2 w-3/4"></div>
                     <div className="h-3 bg-theme/10 rounded w-1/2"></div>
                  </div>
               </div>
               <div className="h-3 bg-theme/10 rounded mb-3 w-full"></div>
               <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map(i => (
                     <div key={i} className="text-center">
                        <div className="h-6 bg-theme/20 rounded mb-1 w-8 mx-auto"></div>
                        <div className="h-3 bg-theme/10 rounded w-16 mx-auto"></div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Skeleton for languages */}
            <div className="relative z-10 bg-background-secondary border border-theme rounded-lg p-4 animate-pulse">
               <div className="h-4 bg-theme/20 rounded mb-3 w-32"></div>
               <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                     <div key={i} className="flex flex-col items-center gap-1">
                        <div className="w-8 h-8 bg-theme/20 rounded"></div>
                        <div className="h-3 bg-theme/10 rounded w-12"></div>
                        <div className="h-2 bg-theme/10 rounded w-6"></div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Skeleton for tech stack */}
            <div className="relative z-10 bg-background-secondary border border-theme rounded-lg p-4 animate-pulse">
               <div className="h-4 bg-theme/20 rounded mb-3 w-24"></div>
               <div className="grid grid-cols-4 gap-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                     <div key={i} className="flex flex-col items-center gap-1">
                        <div className="w-8 h-8 bg-theme/20 rounded"></div>
                        <div className="h-2 bg-theme/10 rounded w-8"></div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      );
   }

   // Enhanced error state
   if (error && !githubData) {
      return (
         <div className='relative w-full max-w-md mx-auto flex flex-col gap-4 mt-10'>
            {/* Error state licky code elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
               <div className="absolute top-4 right-4 text-red-500 opacity-20 font-mono text-sm">{'!!'}</div>
               <div className="absolute bottom-8 left-6 text-red-400 opacity-15 font-mono text-xs">{'// error'}</div>
            </div>

            <div className="relative z-10 bg-background-secondary border border-red-500/30 rounded-lg p-6 text-center">
               <div className="text-red-500 text-2xl mb-3 font-mono">⚠</div>
               <h3 className="text-highlight font-medium text-base mb-2 font-mono">
                  [GitHub Data Unavailable]
               </h3>
               <p className="text-sm text-primary mb-4 leading-relaxed">
                  {error}
               </p>

               {retryCount < MAX_RETRIES && (
                  <button
                     onClick={handleRetry}
                     className="px-4 py-2 bg-highlight/20 hover:bg-highlight/30 text-highlight rounded-md text-sm font-mono border border-highlight/30 hover:border-highlight/50"
                  >
                     -[Retry ({retryCount + 1}/{MAX_RETRIES})]
                  </button>
               )}

               {retryCount >= MAX_RETRIES && (
                  <div className="text-xs text-secondary opacity-75 font-mono">
                     {`// Maximum retries reached. Please refresh the page.`}
                  </div>
               )}
            </div>
         </div>
      );
   }

   return (
      <div className='relative w-full max-w-md mx-auto flex flex-col gap-4 mt-10'>
         {/* Error indicator */}
         {error && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-md p-2 mb-2">
               <p className="text-yellow-600 text-xs font-mono">⚠ {error}</p>
            </div>
         )}

         {/* Licky Code Background for GitHub Card */}
         <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-4 right-4 text-accent-green opacity-20 font-mono text-sm">{'{'}</div>
            <div className="absolute bottom-8 left-6 text-link-color opacity-15 font-mono text-xs">{'console.log'}</div>
            <div className="absolute top-12 left-8 text-accent-yellow opacity-10 font-mono text-xs">{'// GitHub'}</div>
            <div className="absolute bottom-16 right-8 text-accent-orange opacity-15 font-mono text-sm">{'}'}</div>
         </div>

         {/* GitHub Profile Card */}
         <div className="relative z-10 bg-background-secondary border border-theme rounded-lg p-4 hover:border-highlight-secondary">
            <div className="flex items-center gap-3 mb-3">
               <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-highlight flex-shrink-0">
                  {githubData?.avatar_url ? (
                     <Image
                        src={githubData.avatar_url}
                        alt={`${githubData.name || 'GitHub User'} Avatar`}
                        fill
                        className="object-cover"
                        onError={(e) => {
                           const target = e.target as HTMLImageElement;
                           target.style.display = 'none';
                        }}
                     />
                  ) : (
                     <div className="w-full h-full bg-theme/20 flex items-center justify-center font-mono text-primary">
                        {githubData?.name?.charAt(0) || 'U'}
                     </div>
                  )}
               </div>
               <div className="flex-1 min-w-0">
                  <h3 className="text-highlight font-medium text-base font-mono truncate">
                     [{githubData?.name || 'GitHub User'}]
                  </h3>
                  {githubData?.html_url ? (
                     <a
                        href={githubData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm link-color hover:link-hover font-mono truncate block"
                     >
                        @{githubData.login || 'unknown'} ↗
                     </a>
                  ) : (
                     <span className="text-sm text-secondary font-mono">
                        @{githubData?.login || 'unknown'}
                     </span>
                  )}
               </div>
            </div>

            {githubData?.bio && (
               <p className="text-primary text-sm mb-3 leading-relaxed line-clamp-3">
                  {githubData.bio}
               </p>
            )}

            {/* Cache indicator for development */}
            {process.env.NODE_ENV === 'development' && (
               <div className="text-xs text-secondary mb-2 opacity-50 font-mono">
                  📋 {localStorage.getItem(CACHE_KEY) ? 'Cached data' : 'Fresh data'}
               </div>
            )}

            {/* GitHub Stats */}
            <div className="grid grid-cols-2 gap-3 mb-3">
               <div className="text-center">
                  <div className="text-highlight font-bold text-lg font-mono">
                     {githubData?.public_repos || 0}
                  </div>
                  <div className="text-secondary text-xs">repositories</div>
               </div>
               <div className="text-center">
                  <div className="text-highlight font-bold text-lg font-mono">
                     {totalStars}
                  </div>
                  <div className="text-secondary text-xs">total stars</div>
               </div>
               <div className="text-center">
                  <div className="text-highlight font-bold text-lg font-mono">
                     {githubData?.followers || 0}
                  </div>
                  <div className="text-secondary text-xs">followers</div>
               </div>
               <div className="text-center">
                  <div className="text-highlight font-bold text-lg font-mono">
                     {topLanguages.length}
                  </div>
                  <div className="text-secondary text-xs">languages</div>
               </div>
            </div>
         </div>

         {/* Top Languages */}
         <div className="relative z-10 bg-background-secondary border border-theme rounded-lg p-4">
            <h4 className="text-highlight font-medium text-sm mb-3 font-mono">
               [// Top Languages]
            </h4>
            {topLanguages.length > 0 ? (
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {topLanguages.map(([language, count]: [string, number]) => {
                     const langInfo = languageIcons[language];
                     return (
                        <div key={language} className="flex flex-col items-center gap-1 min-w-0">
                           {langInfo ? (
                              <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
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
                                       const target = e.target as HTMLImageElement;
                                       if (target.src.includes('-original.svg')) {
                                          target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${langInfo.icon}/${langInfo.icon}-plain.svg`;
                                       } else {
                                          // Complete fallback - hide image and show text fallback
                                          target.style.display = 'none';
                                          const parent = target.parentElement;
                                          if (parent && !parent.querySelector('.fallback-text')) {
                                             const fallback = document.createElement('div');
                                             fallback.className = 'fallback-text w-8 h-8 flex items-center justify-center bg-accent text-background-primary rounded text-xs font-bold font-mono';
                                             fallback.textContent = language.charAt(0);
                                             parent.appendChild(fallback);
                                          }
                                       }
                                    }}
                                 />
                              </div>
                           ) : (
                              <div className="w-8 h-8 flex items-center justify-center bg-accent text-background-primary rounded text-xs font-bold font-mono flex-shrink-0">
                                 {language.charAt(0)}
                              </div>
                           )}
                           <span className="text-xs text-primary text-center font-mono truncate w-full" title={language}>
                              {language.length > 8 ? `${language.slice(0, 6)}..` : language}
                           </span>
                           <span className="text-xs text-secondary font-mono">
                              {count}
                           </span>
                        </div>
                     );
                  })}
               </div>
            ) : (
               <div className="text-center py-4">
                  <div className="text-secondary text-sm font-mono">{`// No language data available`}</div>
               </div>
            )}
         </div>

         {/* Tech Stack */}
         <div className="relative z-10 bg-background-secondary border border-theme rounded-lg p-4">
            <h4 className="text-highlight font-medium text-sm mb-3 font-mono">
               [// Tech Stack]
            </h4>
            {relevantTech.length > 0 ? (
               <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                  {relevantTech.map((tech) => {
                     const techInfo = languageIcons[tech];
                     return (
                        <div key={tech} className="flex flex-col items-center gap-1 min-w-0" title={tech}>
                           {techInfo ? (
                              <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
                                 <Image
                                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${techInfo.icon}/${techInfo.icon}-original.svg`}
                                    alt={tech}
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                    style={{
                                       filter: effectiveTheme === 'dark' ? 'brightness(1.1)' : 'brightness(0.9)'
                                    }}
                                    onError={(e) => {
                                       const target = e.target as HTMLImageElement;
                                       if (target.src.includes('-original.svg')) {
                                          target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${techInfo.icon}/${techInfo.icon}-plain.svg`;
                                       } else {
                                          // Complete fallback - hide image and show text fallback
                                          target.style.display = 'none';
                                          const parent = target.parentElement;
                                          if (parent && !parent.querySelector('.fallback-text')) {
                                             const fallback = document.createElement('div');
                                             fallback.className = 'fallback-text w-8 h-8 flex items-center justify-center bg-accent text-background-primary rounded text-xs font-bold font-mono';
                                             fallback.textContent = tech.charAt(0);
                                             parent.appendChild(fallback);
                                          }
                                       }
                                    }}
                                 />
                              </div>
                           ) : (
                              <div className="w-8 h-8 flex items-center justify-center bg-accent text-background-primary rounded text-xs font-bold font-mono flex-shrink-0">
                                 {tech.charAt(0)}
                              </div>
                           )}
                           <span className="text-xs text-primary text-center font-mono truncate w-full block">
                              {tech.length > 6 ? `${tech.slice(0, 4)}..` : tech}
                           </span>
                        </div>
                     );
                  })}
               </div>
            ) : (
               <div className="text-center py-4">
                  <div className="text-secondary text-sm font-mono">{`// Loading tech stack...`}</div>
               </div>
            )}
         </div>
      </div>
   );
};

export default React.memo(GitHubProfile);
