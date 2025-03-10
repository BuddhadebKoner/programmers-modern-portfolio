import React from 'react'

const AboutPage = () => {
   return (
      <main className="min-h-screen bg-background text-primary py-16">
         <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-10">
            <section className="animate-fadeIn">
               <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-highlight mb-3">
                  # Documentation
               </h1>
               <p className="text-sm sm:text-base text-primary md:max-w-2xl">
                  I'm IronMan, a dedicated web developer specializing in Next.js and the MERN/Node environment. I focus on writing clean, efficient code with minimal lines while ensuring up-to-date practices.
               </p>
            </section>

            <section className="animate-fadeIn">
               <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-highlight mb-3">
                  ## Who am I
               </h2>
               <p className="text-sm sm:text-base text-primary md:max-w-2xl">
                  I am a passionate web developer with expertise in building modern, high-performance web applications. I continuously explore new technologies and frameworks to deliver innovative solutions.
               </p>
            </section>

            <section className="animate-fadeIn">
               <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-highlight mb-4">
                  ## Basic Information
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Nationality:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Indian</span>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Type:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Freshers With Strong Skills</span>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Class:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Web Developer (MERN & Next.js Specialist)</span>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">State:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Remote</span>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Age:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">21</span>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Religion:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Hinduisam</span>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Political Alignment:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Coding Party</span>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Status:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">
                        Available for projects (Freelance / Full-time)
                     </span>
                  </div>
               </div>
            </section>

            <section className="animate-fadeIn">
               <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-highlight mb-4">
                  ## Primary Language
               </h2>
               <div className="grid grid-cols-1 gap-3">
                  <div className="p-3 rounded-lg bg-background-secondary border border-theme">
                     <div className="flex items-center mb-2">
                        <span className="text-sm sm:text-base font-medium text-highlight-secondary">Spoken:</span>
                        <span className="text-sm sm:text-base text-secondary ml-2">English</span>
                     </div>
                     <div className="flex items-center mb-2">
                        <span className="text-sm sm:text-base font-medium text-highlight-secondary">Written:</span>
                        <span className="text-sm sm:text-base text-secondary ml-2">Technical Documentation</span>
                     </div>
                     <div className="flex items-center">
                        <span className="text-sm sm:text-base font-medium text-highlight-secondary">Programming:</span>
                        <span className="text-sm sm:text-base text-secondary ml-2">JavaScript / TypeScript</span>
                     </div>
                  </div>
               </div>
            </section>

            <section className="animate-fadeIn">
               <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-highlight mb-4">
                  ## Hobbies
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-background-secondary border border-theme flex items-center justify-center">
                     <span className="text-sm sm:text-base text-secondary">Coding</span>
                  </div>
                  <div className="p-3 rounded-lg bg-background-secondary border border-theme flex items-center justify-center">
                     <span className="text-sm sm:text-base text-secondary">Learning New Technologies</span>
                  </div>
                  <div className="p-3 rounded-lg bg-background-secondary border border-theme flex items-center justify-center">
                     <span className="text-sm sm:text-base text-secondary">Open Source Contribution</span>
                  </div>
                  <div className="p-3 rounded-lg bg-background-secondary border border-theme flex items-center justify-center">
                     <span className="text-sm sm:text-base text-secondary">Problem Solving</span>
                  </div>
               </div>
            </section>

            <section className="animate-fadeIn">
               <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-highlight mb-4">
                  ## Software & Hardware
               </h2>

               <div className="flex flex-col gap-3">
                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Editor:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">VS Code</span>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Browser:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Fire Fox</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Terminal:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Warp</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Device:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Asus Vivobook Pro 14 oled</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Operating System:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Ubuntu</span>
                  </div>
               </div>
            </section>
         </div>
      </main>
   )
}

export default AboutPage
