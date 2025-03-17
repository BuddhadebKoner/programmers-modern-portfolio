import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Story - My Journey | Buddhadeb Koner | FullStack Web Developer",
   description:
      "Explore the journey of Buddhadeb Koner from the early days of web development to advanced cloud certification and open source contributions. Discover the timeline of milestones and projects that define the career.",
   openGraph: {
      title: "Story - My Journey | Buddhadeb Koner | FullStack Web Developer",
      description:
         "Explore the journey of Buddhadeb Koner from the early days of web development to advanced cloud certification and open source contributions. Discover the timeline of milestones and projects that define the career.",
      url: "https://buddhadebkoner.vercel.app/story",
      siteName: "Buddhadeb Koner",
      images: [
         {
            url: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285452/next-portfolio/ntuasgjzwygk9ntvwlgi.png",
            width: 1200,
            height: 630,
            alt: "Timeline of Buddhadeb Koner",
         },
      ],
      locale: "en_US",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Story - My Journey | Buddhadeb Koner | FullStack Web Developer",
      description:
         "Explore the journey of Buddhadeb Koner from the early days of web development to advanced cloud certification and open source contributions.",
      images: ["https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285452/next-portfolio/ntuasgjzwygk9ntvwlgi.png"],
   },
   alternates: {
      canonical: "https://buddhadebkoner.vercel.app/story",
   },
};

const page = () => {
   const timelineEvents = [
      {
         year: 2022,
         events: [
            {
               title: "First Steps in Coding",
               date: "March 15, 2022",
               description:
                  "Purchased my first laptop and began my coding journey by learning HTML, CSS, and JavaScript. I started building simple user interfaces and small websites to establish a solid foundation.",
               color: "accent-green-light",
               link: ""
            },
            {
               title: "College Semester – C Programming",
               date: "May 2022",
               description:
                  "Completed my first college semester, where I mastered C programming. This experience provided the critical programming fundamentals that paved the way for future learning.",
               color: "accent-green-light",
               link: ""
            },
            {
               title: "Exploring Python and React",
               date: "August 2022",
               description:
                  "Ventured into Python to broaden my programming skills and began exploring React for dynamic web interfaces. This phase marked the transition from basic web development to more interactive applications.",
               color: "accent-green-light",
               link: ""
            }
         ]
      },
      {
         year: 2023,
         events: [
            {
               title: "Advanced Web Development",
               date: "February 2023",
               description:
                  "Progressed into building more complex websites, delving into database management, and initiating backend development. This period was characterized by a deeper understanding of full-stack technologies.",
               color: "accent-yellow",
               link: ""
            },
            {
               title: "MERN Blog Launch",
               date: "June 2023",
               description:
                  "Developed the MERN Blog project featuring a custom admin panel and integration with MongoDB for dynamic content management.",
               color: "accent-yellow",
               link: "https://github.com/BuddhadebKoner/Blog-App/"
            },
            {
               title: "Modern Portfolio Developers",
               date: "August 2023",
               description:
                  "Created a sleek, modern portfolio website tailored for developers using Next.js, Tailwind CSS, and TypeScript. The project emphasizes simplicity and elegance.",
               color: "accent-yellow",
               link: "https://buddhadebkoner.vercel.app/"
            },
            {
               title: "Next Portfolio Launch",
               date: "October 2023",
               description:
                  "Released a personal portfolio site that showcases my skills, projects, and blog posts. This project includes a dark mode toggle and dynamically fetched content from the DEV Community API.",
               color: "accent-yellow",
               link: "https://next-portfolio-buddhadeb.vercel.app/"
            }
         ]
      },
      {
         year: 2024,
         events: [
            {
               title: "Expanding into Advanced Backend",
               date: "January 2024",
               description:
                  "Focused on advancing my backend skills, exploring complex database management, and integrating robust server-side technologies.",
               color: "accent-orange",
               link: ""
            },
            {
               title: "Kochugram Social Media Platform",
               date: "May 2024",
               description:
                  "Launched Kochugram, a social media platform designed for the Koch community. Built with Next.js, Tailwind CSS, and TypeScript, it leverages Appwrite for backend operations.",
               color: "accent-orange",
               link: "https://kochugram-com.vercel.app/"
            },
            {
               title: "Chat AI Project",
               date: "August 2024",
               description:
                  "Developed an intelligent chatbot using the OpenAI API. This project features a clean user interface that delivers dynamic, real-time responses.",
               color: "accent-orange",
               link: "https://github.com/BuddhadebKoner/ChatAi/"
            },
            {
               title: "React Native Todo App",
               date: "November 2024",
               description:
                  "Created a simple yet effective React Native ToDo app with Expo, designed for learning and storing tasks locally on the device.",
               color: "accent-orange",
               link: "https://github.com/BuddhadebKoner/Todo-Mobile-App/"
            }
         ]
      },
      {
         year: 2025,
         events: [
            {
               title: "Mastering Next.js Full-Stack Development",
               date: "March 2025",
               description:
                  "Continuing my journey in full-stack development, I am now focused on refining my skills in Next.js and building robust, scalable web applications.",
               color: "accent-red",
               link: ""
            }
         ]
      }
   ];


   const getDayOfWeek = (dateString: string) => {
      const date = new Date(dateString);
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[date.getDay()];
   };

   // Map color names to actual Tailwind classes for text
   const getColorClasses = (colorName: string) => {
      const colorMap: Record<string, string> = {
         'accent-green-light': 'text-emerald-500',
         'accent-green': 'text-emerald-600',
         'accent-yellow': 'text-amber-500',
         'accent-orange': 'text-orange-500',
         'accent-red': 'text-rose-500'
      };
      return colorMap[colorName] || 'text-blue-500'; // fallback color
   };

   // Map color names to actual Tailwind classes for background
   const getBgColorClasses = (colorName: string) => {
      const colorMap: Record<string, string> = {
         'accent-green-light': 'bg-emerald-500',
         'accent-green': 'bg-emerald-600',
         'accent-yellow': 'bg-amber-500',
         'accent-orange': 'bg-orange-500',
         'accent-red': 'bg-rose-500'
      };
      return colorMap[colorName] || 'bg-blue-500';
   };

   return (
      <>
         <main className="min-h-screen bg-background text-primary py-25 accent-dots">
      {/* Add corner glow effect */}
      <div className="corner-glow"></div>

      {/* Add constellation pattern */}
      <div className="constellation"></div>
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-10">
               <section className="animate-fadeIn">
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-highlight mb-1.5 sm:mb-2 md:mb-3 pl-2 sm:pl-3 py-1">
                     # My Journey
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base text-primary pl-3 sm:pl-4">
                     Follow the path of my development career from 2022 to present
                  </p>
               </section>

               {/* Timeline container with improved responsive margins */}
               <div className="relative pl-6 sm:pl-8 md:pl-12 md:ml-2">
                  {/* Timeline connector */}
                  <div className="absolute left-0 w-1 sm:w-1.5 md:w-2 h-full bg-border-theme rounded-full" />

                  {/* Timeline events */}
                  {timelineEvents.map((yearData) => (
                     <div key={yearData.year} className="mb-10 sm:mb-12 relative">
                        {/* Year marker */}
                        <div className="flex items-center mb-6 sm:mb-8 relative">
                           <div className="absolute -left-3 sm:-left-5 md:-left-8 w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 bg-highlight-primary rounded-full z-10 flex items-center justify-center">
                              <div className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 rounded-full bg-background-primary"></div>
                           </div>
                           <div className="bg-highlight-primary text-background-primary px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base md:text-lg font-bold z-10 ml-3 sm:ml-4">
                              {yearData.year}
                           </div>
                        </div>

                        {/* Events for this year */}
                        {yearData.events.map((event, eventIndex) => {
                           const dayOfWeek = getDayOfWeek(event.date);
                           const formattedDate = `${dayOfWeek}, ${event.date}`;
                           const textColorClass = getColorClasses(event.color);
                           const bgColorClass = getBgColorClasses(event.color);

                           return (
                              <div key={eventIndex} className="relative mb-8 sm:mb-10">
                                 {/* Timeline node */}
                                 <div className="absolute -left-2.5 sm:-left-4 md:-left-6 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-background-secondary border-2 sm:border-3 md:border-4 border-theme 
                                                rounded-full z-10 flex items-center justify-center">
                                    <div className={`w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full ${bgColorClass}`}></div>
                                 </div>

                                 {/* Timeline dash */}
                                 <div className="absolute -left-3 sm:-left-3 md:-left-3 top-3 w-4 sm:w-6 md:w-8 h-0.5 bg-border-theme"></div>

                                 {/* Content card */}
                                 <div className="ml-4 sm:ml-6 md:ml-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
                                    <div className="bg-background-secondary border border-theme p-3 sm:p-4 rounded-md hover:shadow-lg 
                                                   transition-all duration-300 hover:translate-y-[-2px]">
                                       <div className={`${textColorClass} text-xs mb-1 font-medium`}>
                                          {formattedDate}
                                       </div>
                                       <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1.5 sm:mb-2 text-highlight-secondary">
                                          {event.title}
                                       </h3>
                                       <p className="text-xs sm:text-sm text-primary mb-2 sm:mb-3">
                                          {event.description}
                                       </p>
                                       {event.link && (
                                          <a
                                             href={event.link}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className={`${textColorClass} text-xs hover:underline inline-flex items-center gap-1`}
                                          >
                                             View Project
                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                             </svg>
                                          </a>
                                       )}
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  ))}
               </div>
            </div>
         </main>
      </>
   )
}

export default page;
