import Card from "@/components/Card";
import type { Metadata } from "next";

// Sample projects data
const projects = [
   {
      title: "Tech Community Meetup: Web Development Workshop",
      description: "Organized and led an interactive workshop on modern web development techniques for local tech enthusiasts. This community event focused on Next.js, Tailwind CSS, and TypeScript fundamentals through hands-on coding sessions, networking opportunities, and collaborative problem-solving exercises. Participants gained practical skills in building responsive, accessible web applications.",
      demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7268438874941460481/",
      sourceCodeUrl: "",
      images: [
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743102987/next-portfolio/events/noadz1h59wlazgqhwkfx.jpg",
            alt: "Buddhadeb Koner presenting at web development workshop"
         },
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743103006/next-portfolio/events/zuqaractc6jfrf3nlp38.jpg",
            alt: "Attendees participating in coding exercises at tech meetup"
         },
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743103007/next-portfolio/events/yweyqmqszjgh4kcu0uae.jpg",
            alt: "Group discussion during web development workshop"
         },
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743103017/next-portfolio/events/uxiggs4uqvjmgmfqhk7o.jpg",
            alt: "Networking session at community tech event"
         },
      ],
      date: "2023-03-15",
      location: "Kolkata, India",
      tags: ["community event", "web development workshop", "tech meetup", "coding workshop", "developer networking"],
   },
];
export const metadata: Metadata = {
   title: "Life Events | Buddhadeb Koner | FullStack Web Developer",
   description: "Explore the timeline of life events by Buddhadeb Koner, from his early days to his career as a full-stack web developer. Click on the events to view more details.",
   openGraph: {
      title: "Life Events | Buddhadeb Koner | FullStack Web Developer",
      description: "Explore the timeline of life events by Buddhadeb Koner, from his early days to his career as a full-stack web developer. Click on the events to view more details.",
      url: "https://buddhadebkoner.vercel.app/events",
      siteName: "Buddhadeb Koner",
      images: [
         {
            url: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/kgpm4n0jvdh8rgwzeucw.webp",
            width: 1200,
            height: 630,
            alt: "Works Showcase by Buddhadeb Koner",
         },
      ],
      locale: "en_IN",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Works - Showcase | Buddhadeb Koner | FullStack Web Developer",
      description: "Explore the showcase of projects by Buddhadeb Koner, featuring modern web applications built with Next.js, Tailwind CSS, and TypeScript.",
      images: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285469/next-portfolio/xyxj8fdggwypdx2bwdnp.png",
   },
   alternates: {
      canonical: "https://buddhadebkoner.vercel.app/works",
   },
};

const Page = () => {
   return (
      <main className="min-h-screen bg-background text-primary py-25 accent-dots accent-dots">
         {/* Add corner glow effect */}
         <div className="corner-glow"></div>

         {/* Add constellation pattern */}
         <div className="constellation"></div>
         <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-10">
            <section className="animate-fadeIn">
               <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-highlight mb-3">
                  # Life Events
               </h1>
               <p className="text-sm sm:text-base text-primary">
                  Explore the timeline of my life events, from my early days to my career as a full-stack web developer. Click on the events to view more details.
               </p>
            </section>
            <section className="animate-fadeIn flex flex-col gap-8">
               {projects.map((project, index) => (
                  <div key={index} data-project-id={index} id={`project-${index}`}>
                     <Card
                        title={project.title}
                        description={project.description}
                        demoUrl={project.demoUrl}
                        sourceCodeUrl={project.sourceCodeUrl}
                        images={project.images.map(image => image.src)}
                        imageAlt={project.images.map(image => image.alt)}
                        tags={project.tags}
                     />
                  </div>
               ))}
            </section>
         </div>
      </main>
   );
};

export default Page;
