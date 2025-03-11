import React from 'react';
import MediaCard from "@/components/MediaCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Contact - Get in Touch | Buddhadeb Koner",
   description:
      "Connect with Buddhadeb Koner on Twitter, GitHub, LinkedIn, Instagram, or via email. My DMs are always open for collaboration or a friendly hello.",
   openGraph: {
      title: "Contact - Get in Touch | Buddhadeb Koner",
      description:
         "Connect with Buddhadeb Koner on Twitter, GitHub, LinkedIn, Instagram, or via email. My DMs are always open for collaboration or a friendly hello.",
      url: "https://buddhadebkoner.vercel.app/contact", 
      siteName: "Buddhadeb Koner",
      images: [
         {
            url: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285471/next-portfolio/otl2olxxc36kfsbidj7d.png", 
            width: 1200,
            height: 630,
            alt: "Contact Buddhadeb Koner",
         },
      ],
      locale: "en_US",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Contact - Get in Touch | Buddhadeb Koner",
      description:
         "Connect with Buddhadeb Koner on Twitter, GitHub, LinkedIn, Instagram, or via email. My DMs are always open for collaboration or a friendly hello.",
      images: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285471/next-portfolio/otl2olxxc36kfsbidj7d.png", 
   },
   alternates: {
      canonical: "https://buddhadebkoner.vercel.app/contact", 
   },
};

const page = () => {
   // Social media contact data
   const socialMedias = [
      {
         title: "Twitter",
         username: "@buddhadeb",
         url: "https://twitter.com/yourusername",
         description: "X is where I post my thoughts, memes, takes, and whatever else comes to mind"
      },
      {
         title: "GitHub",
         username: "@buddhadeb",
         url: "https://github.com/yourusername",
         description: "Check out my code repositories and open-source contributions"
      },
      {
         title: "LinkedIn",
         username: "Buddhadeb Koner",
         url: "https://linkedin.com/in/yourusername",
         description: "Connect with me professionally for work opportunities and collaboration"
      },
      {
         title: "Instagram",
         username: "Buddhadeb Koner",
         url: "https://linkedin.com/in/yourusername",
         description: "Connect with me professionally for work opportunities and collaboration"
      },
      {
         title: "Email",
         username: "buddhadeb@example.com",
         url: "mailto:buddhadeb@example.com",
         description: "The most direct way to reach me for business inquiries and collaborations"
      }
   ];

   return (
      <main className="min-h-screen bg-background text-primary py-16">
         <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-10">
            <section className="w-full animate-fadeIn">
               <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-highlight mb-2 sm:mb-3 pl-3 py-1">
                  # Get in touch
               </h1>
               <p className="text-xs sm:text-sm md:text-base text-primary pl-4">
                  My DMs are always open for any kind of collaboration or just to say hi!
               </p>
            </section>

            <section className="animate-fadeIn flex flex-col gap-5 sm:gap-8">
               {socialMedias.map((socialMedia, index) => (
                  <MediaCard
                     key={index}
                     title={socialMedia.title}
                     username={socialMedia.username}
                     url={socialMedia.url}
                     description={socialMedia.description}
                  />
               ))}
            </section>
         </div>
      </main>
   );
};

export default page;
