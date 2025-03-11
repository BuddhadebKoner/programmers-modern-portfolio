import React from 'react';
import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
   title: "About - Buddhadeb Koner | FullStack Web Developer",
   description:
      "Learn more about Buddhadeb Koner, a dedicated web developer specializing in Next.js and the MERN/Node environment. Explore his documentation, skills, and background.",
   openGraph: {
      title: "About - Buddhadeb Koner | FullStack Web Developer",
      description:
         "Learn more about Buddhadeb Koner, a dedicated web developer specializing in Next.js and the MERN/Node environment. Explore his documentation, skills, and background.",
      url: "https://buddhadebkoner.vercel.app/about",
      siteName: "Buddhadeb Koner",
      images: [
         {
            url: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285471/next-portfolio/otl2olxxc36kfsbidj7d.png",
            width: 1200,
            height: 630,
            alt: "Buddhadeb Koner - About Page",
         },
      ],
      locale: "en_IN",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "About - Buddhadeb Koner | FullStack Web Developer",
      description:
         "Learn more about Buddhadeb Koner, a dedicated web developer specializing in Next.js and the MERN/Node environment. Explore his documentation, skills, and background.",
      images: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285469/next-portfolio/xyxj8fdggwypdx2bwdnp.png",
   },
   alternates: {
      canonical: "https://buddhadebkoner.vercel.app/about/",
   },
};

const AboutPage = () => {
   return (
      <main className="min-h-screen bg-background text-primary py-16">
         <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-10">
            <section className="animate-fadeIn">
               <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-highlight mb-3">
                  # Documentation
               </h1>
               <p className="text-sm sm:text-base text-primary md:max-w-2xl">
                  I am a passionate web developer with expertise in building modern, high-performance web applications. I continuously explore new technologies and frameworks to deliver innovative solutions.
               </p>
            </section>

            <section className="animate-fadeIn">
               <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-highlight mb-3">
                  ## Who am I
               </h2>
               <p className="text-sm sm:text-base text-primary md:max-w-2xl">
                  I am a Buddhadeb Koner from India. I am a dedicated web developer specializing in Next.js and the MERN/Node environment. I have a strong passion for web development and love to create modern, high-performance web applications. I am a quick learner and always eager to learn new technologies and frameworks to deliver innovative solutions.
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
                     <span className="text-sm sm:text-base text-secondary ml-2">
                        {(() => {
                           const birthDate = new Date(2004, 7, 18);
                           const currentDate = new Date();
                           const timeDifference = currentDate.getTime() - birthDate.getTime();
                           const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
                           return `${daysDifference} Days Successfully Survived`;
                        })()}
                     </span>
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
                        <span className="text-sm sm:text-base font-medium text-highlight-secondary">Native Spoken:</span>
                        <span className="text-sm sm:text-base text-secondary ml-2">Bengali</span>
                     </div>
                     <div className="flex items-center mb-2">
                        <span className="text-sm sm:text-base font-medium text-highlight-secondary">Written Docs:</span>
                        <span className="text-sm sm:text-base text-secondary ml-2">Markdown</span>
                     </div>
                     <div className="flex items-center">
                        <span className="text-sm sm:text-base font-medium text-highlight-secondary">Programming:</span>
                        <span className="text-sm sm:text-base text-secondary ml-2">JavaScript / TypeScript</span>
                     </div>
                     <div className="flex items-center">
                        <span className="text-sm sm:text-base font-medium text-highlight-secondary">Extra Programming:</span>
                        <span className="text-sm sm:text-base text-secondary ml-2">C++ / Java</span>
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
                     <Link
                        target='_blank'
                        href="https://code.visualstudio.com/"
                        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium link-color hover:link-hover"
                     >
                        [-code  ↗]
                     </Link>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Browser:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">FireFox</span>
                     <Link
                        target='_blank'
                        href="https://www.mozilla.org/en-US/firefox/"
                        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium link-color hover:link-hover"
                     >
                        [-firefox  ↗]
                     </Link>

                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Terminal:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Warp</span>
                     <Link
                        target='_blank'
                        href="https://www.warp.dev/"
                        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium link-color hover:link-hover"
                     >
                        [-warp  ↗]
                     </Link>
                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Device:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Asus Vivobook Pro 14 oled</span>
                     <Link
                        target='_blank'
                        href="https://in.store.asus.com/creator-laptop-asus-vivobook-pro-14-oled-m3400qa.html"
                        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium link-color hover:link-hover"
                     >
                        [-asus  ↗]
                     </Link>

                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Operating System:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Ubuntu 24.04.2 LTS</span>
                     <Link
                        target='_blank'
                        href="https://ubuntu.com/download/desktop"
                        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium link-color hover:link-hover"
                     >
                        [-ubuntu  ↗]
                     </Link>
                  </div>
               </div>
            </section>
         </div>
      </main>
   );
};

export default AboutPage;
