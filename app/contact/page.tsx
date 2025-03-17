import React from 'react';
import MediaCard from "@/components/MediaCard";
import ContactForm from "@/components/ContactForm";
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
         username: "@buddhadeb_koner",
         url: "https://x.com/buddhadeb_koner/",
         description: "X is where I post my thoughts, memes, takes, and whatever else comes to mind"
      },
      {
         title: "GitHub",
         username: "@BuddhadebKoner",
         url: "https://github.com/BuddhadebKoner/",
         description: "Check out my code repositories and open-source contributions"
      },
      {
         title: "LinkedIn",
         username: "@Buddhadeb Koner",
         url: "https://www.linkedin.com/in/buddhadeb-koner/",
         description: "Connect with me professionally for work opportunities and collaboration"
      },
      {
         title: "Instagram",
         username: "@buddhadeb_koner",
         url: "https://www.instagram.com/buddhadeb_koner/",
         description: "Connect with me professionally for work opportunities and collaboration"
      },
      {
         title: "Email",
         username: "iambuddhadebkoner@gmail.com",
         url: "mailto:buddhadeb@example.com",
         description: "The most direct way to reach me for business inquiries and collaborations"
      }
   ];

   return (
      <main className="min-h-screen bg-background text-primary py-25 accent-dots">
      {/* Add corner glow effect */}
      <div className="corner-glow"></div>

      {/* Add constellation pattern */}
      <div className="constellation"></div>
         <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-10">
            <section className="w-full animate-fadeIn">
               <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-highlight mb-2 sm:mb-3 pl-3 py-1">
                  # Get in touch
               </h1>
               <p className="text-xs sm:text-sm md:text-base text-primary pl-4">
                  My DMs are always open for any kind of collaboration or just to say hi!
               </p>
            </section>

            <section className="animate-fadeIn flex flex-col gap-2">
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

            {/* Contact Form Section */}
            <section className="w-full animate-fadeIn border border-theme rounded-lg bg-background-secondary p-6">
               <h2 className="text-lg sm:text-xl font-bold text-highlight mb-4 pl-2">
                  Send a Direct Message
               </h2>
               <ContactForm />
               <p className="text-secondary text-xs mt-4">
                  I typically respond within 24-48 hours on weekdays.
               </p>
            </section>
         </div>
      </main>
   );
};

export default page;
