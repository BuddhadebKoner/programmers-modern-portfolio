import Card from "@/components/Card";

// Sample projects data
const projects = [
   {
      title: "Portfolio Website",
      description: "A modern developer portfolio built with Next.js and Tailwind CSS featuring responsive design and dark mode support.",
      demoUrl: "https://example.com",
      sourceCodeUrl: "https://github.com/username/portfolio",
      images: ["https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/kgpm4n0jvdh8rgwzeucw.webp", "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/tchgahuz0hew7to3jj9g.webp", "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739302520/next-portfolio/works/lfgfndl2zl1sucyxthm3.webp"],
      tags: ["Next.js", "Tailwind CSS", "TypeScript"]
   },
];

const page = () => {
   return (
      <main className="min-h-screen bg-background text-primary py-16">
         <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-10">
            <section className="animate-fadeIn">
               <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-highlight mb-3">
                  # Showcase
               </h1>
               <p className="text-sm sm:text-base text-primary md:max-w-2xl">
                  All the presentable projects I've made throughout the years
               </p>
            </section>
            <section className='animate-fadeIn flex flex-col gap-8'>
               {projects.map((project, index) => (
                  <Card
                     key={index}
                     title={project.title}
                     description={project.description}
                     demoUrl={project.demoUrl}
                     sourceCodeUrl={project.sourceCodeUrl}
                     images={project.images}
                     tags={project.tags}
                  />
               ))}
            </section>
         </div>
      </main>
   );
};

export default page;