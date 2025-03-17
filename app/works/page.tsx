import Card from "@/components/Card";
import TimelineNavigation from "@/components/TimelineNavigation";
import type { Metadata } from "next";
import Link from "next/link";

// Sample projects data
const projects = [
   {
      title: "Modern Portfolio Developers",
      description: "Experience a sleek and modern portfolio design tailored for developers. Built using Next.js, Tailwind CSS, and TypeScript, this project offers an elegant, responsive interface. Clone the repository and showcase your skills with this cutting-edge portfolio.",
      demoUrl: "https://buddhadebkoner.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/devaloper-modern-portfolio/",
      images: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1741678714/next-portfolio/works/zugytqjxnvodwx8cwrob.png",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1741678715/next-portfolio/works/gp4bypu0qytpak6czzww.png"
      ],
      tags: ["Next.js-v15", "React-v19", "Tailwind CSS-v4.0", "TypeScript", "TanStack"],
   },
   {
      title: "MERN Blog",
      description: "Discover an engaging blog platform built with the MERN stack. Featuring a custom admin panel that enables administrators to create, update, and delete posts, this project seamlessly integrates with a MongoDB database for dynamic content delivery.",
      demoUrl: "https://blog-app-sandy-sigma.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/Blog-App/",
      images: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1741078414/mern-blog/blogs/bkdijkurwg0tawqboovl.png",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1741677597/next-portfolio/nkcfhecdizsja37xctps.png"
      ],
      tags: ["MERN", "Tailwind CSS", "TypeScript", "MongoDB", "Express", "React", "Node.js"],
   },
   {
      title: "Next Portfolio",
      description: "Showcase your professional skills with this personal portfolio website built with Next.js, Tailwind CSS, and TypeScript. Featuring a dark mode toggle and dynamic blog content from the DEV Community API, this project is perfect for modern web developers.",
      demoUrl: "https://next-portfolio-buddhadeb.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/nextjs-portfolio/",
      images: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1740965664/mern-blog/gxk6t1nzkljiswnsccwl.png"
      ],
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "TanStack", "Aceternity.ui"],
   },
   {
      title: "Kochugram",
      description: "Kochugram is a dynamic social media platform designed for the Koch community, built with Next.js, Tailwind CSS, and TypeScript. Leveraging Appwrite as its backend, users can effortlessly create posts, like, comment, and follow other community members.",
      demoUrl: "https://kochugram-com.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/kochugram.com/",
      images: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1740969977/mern-blog/tdtyjvq7yq475tpwuy1a.png",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/kgpm4n0jvdh8rgwzeucw.webp",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/tchgahuz0hew7to3jj9g.webp",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/lfgfndl2zl1sucyxthm3.webp"
      ],
      tags: ["REACT", "Tailwind CSS", "TypeScript", "appWrite"],
   },
   {
      title: "codecomm club",
      description: "Enhance your club's online presence with CodeComm Club—a dynamic website for college coding enthusiasts. Featuring a robust blog powered by the DEV Community API and designed for seminars and workshops, this platform delivers engaging content and interactive community features. (Currently on hold due to college-related issues.)",
      demoUrl: "",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/codecomm-coding-club/",
      images: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302518/next-portfolio/works/mvqmmgt4nwb52nhcrdzr.webp"
      ],
      tags: ["React", "Tailwind CSS", "Javascript", "appWrite"],
   },
   {
      title: "First React website",
      description: "Experience the evolution of web design with this inaugural React website. Featuring a user-friendly interface with a dark mode toggle, this simple yet elegant site includes essential pages like home, about, and contact.",
      demoUrl: "https://explorebuddhadeb.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/ExploreBuddhadeb",
      images: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302518/next-portfolio/works/a58zr5ko85vyhuz6f2du.webp"
      ],
      tags: ["React", "CSS", "Javascript"],
   },
   {
      title: "Chat Ai using api",
      description: "Engage in dynamic conversations with this intelligent chatbot powered by the OpenAI API. With its simple and intuitive user interface, the chatbot delivers real-time, responsive answers to your queries.",
      demoUrl: "",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/ChatAi/",
      images: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1741679312/next-portfolio/works/qnxdiihmttla0qwk2r9h.png"
      ],
      tags: ["React", "Tailwind CSS", "Javascript", "OpenAI API"],
   },
   {
      title: "React native todo app",
      description: "Explore a beginner-friendly React Native ToDo app developed using Expo. This learning project features a simple, functional interface with the todo list securely stored in the device's local storage.",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/Todo-Mobile-App/",
      images: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1741678237/next-portfolio/works/mta98dtemkkxdqsuu8mg.png"
      ],
      tags: ["React Native", "Javascript", "Expo"],
   },

];

export const metadata: Metadata = {
   title: "Works - Showcase | Buddhadeb Koner | FullStack Web Developer",
   description: "Explore the showcase of projects by Buddhadeb Koner, featuring modern web applications built with Next.js, Tailwind CSS, and TypeScript.",
   openGraph: {
      title: "Works - Showcase | Buddhadeb Koner | FullStack Web Developer",
      description: "Explore the showcase of projects by Buddhadeb Koner, featuring modern web applications built with Next.js, Tailwind CSS, and TypeScript.",
      url: "https://buddhadebkoner.vercel.app/works",
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
                  # Showcase
               </h1>
               <p className="text-sm sm:text-base text-primary">
                  Explore the showcase of projects by Buddhadeb Koner, featuring modern web applications built with Next.js, Tailwind CSS, and TypeScript. Most project source codes are available on <Link href="https://github.com/BuddhadebKoner" target="_blank" className="link-color hover:link-hover whitespace-nowrap">[GitHub ↗]</Link>. See my skills on <Link href="/skill" className="text-sm font-medium link-color hover:link-hover whitespace-nowrap">[Skill ↗]</Link>. Feel free to contact me, my DMs are always open <Link href="/contact" className="text-sm font-medium link-color hover:link-hover whitespace-nowrap">[Contact ↗]</Link>.
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
                        images={project.images}
                        tags={project.tags}
                     />
                  </div>
               ))}
            </section>
         </div>

         {/* Simple Timeline Navigation Component */}
         <TimelineNavigation projects={projects} />
      </main>
   );
};

export default Page;
