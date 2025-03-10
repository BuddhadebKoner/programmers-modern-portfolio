import React from 'react'

const page = () => {
   const timelineEvents = [
      {
         year: 2022,
         events: [
            {
               title: "Started Learning Web Development",
               date: "March 15, 2022",
               description: "Began my journey with HTML, CSS, and JavaScript fundamentals. Created my first static websites and learned responsive design principles.",
               color: "accent-green-light",
               link: "https://example.com/first-website"
            },
            {
               title: "First Frontend Framework",
               date: "August 22, 2022",
               description: "Discovered React.js and built several small projects to understand component-based architecture. Deployed my first portfolio site.",
               color: "accent-green",
               link: "https://example.com/portfolio"
            },
         ]
      },
      {
         year: 2023,
         events: [
            {
               title: "Backend Development",
               date: "January 10, 2023",
               description: "Expanded my skills with Node.js and Express. Created RESTful APIs and connected them to MongoDB databases.",
               color: "accent-yellow",
               link: "https://github.com/yourusername/api-project"
            },
            {
               title: "First Freelance Project",
               date: "May 5, 2023",
               description: "Completed a website for a local business, implementing responsive design, contact forms, and custom animations.",
               color: "accent-yellow",
               link: "https://client-project.com"
            },
            {
               title: "TypeScript & Next.js",
               date: "October 18, 2023",
               description: "Learned TypeScript to improve code quality. Started using Next.js for SEO-friendly React applications with server-side rendering.",
               color: "accent-yellow",
               link: "https://github.com/yourusername/nextjs-project"
            },
         ]
      },
      {
         year: 2024,
         events: [
            {
               title: "Full-Stack Application",
               date: "February 7, 2024",
               description: "Built and deployed a complete SaaS application with user authentication, payment processing, and dashboard analytics.",
               color: "accent-orange",
               link: "https://my-saas-app.com"
            },
            {
               title: "Contributing to Open Source",
               date: "July 22, 2024",
               description: "Started contributing to open-source projects on GitHub. Had my first pull request merged into a popular library.",
               color: "accent-orange",
               link: "https://github.com/popular-lib/pull/123"
            },
         ]
      },
      {
         year: 2025,
         events: [
            {
               title: "Advanced React Patterns",
               date: "January 14, 2025",
               description: "Mastered advanced React concepts including custom hooks, context API, and performance optimization techniques.",
               color: "accent-red",
               link: "https://github.com/yourusername/react-patterns"
            },
            {
               title: "Cloud Certification",
               date: "March 10, 2025",
               description: "Obtained AWS Developer certification. Implemented serverless architectures and CI/CD pipelines for projects.",
               color: "accent-red",
               link: "https://aws.amazon.com/certification/certified-developer-associate/"
            },
         ]
      },
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
      return colorMap[colorName] || 'bg-blue-500'; // fallback color
   };

   return (
      <>
         <main className="min-h-screen bg-background text-primary py-8 sm:py-12 md:py-16">
            <div className="container max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col gap-6 sm:gap-8 md:gap-10">
               <section className="animate-fadeIn">
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-highlight mb-1.5 sm:mb-2 md:mb-3 pl-2 sm:pl-3 py-1">
                     # My Journey
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base text-primary pl-3 sm:pl-4 mb-6 sm:mb-8">
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

export default page