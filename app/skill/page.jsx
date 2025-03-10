import React from 'react'
import SkillCategory from "@/components/SkillCategory";


const page = () => {
  // Skill data organized by categories
  const skillCategories = [
    {
      title: "A - Based",
      color: "bg-accent-green-light",
      skills: [
        { name: "React", slug: "react", description: "Component-based UI library for building modern interfaces" },
        { name: "Next.js", slug: "nextjs", description: "Full-stack React framework with SSR and SSG capabilities" },
        { name: "TypeScript", slug: "typescript", description: "Strongly typed programming language built on JavaScript" },
      ]
    },
    {
      title: "B - Good",
      color: "bg-accent-green",
      skills: [
        { name: "Node.js", slug: "nodejs", description: "JavaScript runtime for server-side applications" },
        { name: "Tailwind CSS", slug: "tailwind", description: "Utility-first CSS framework for rapid UI development" },
        { name: "Git", slug: "git", description: "Distributed version control system for tracking changes" },
      ]
    },
    {
      title: "C - Mid",
      color: "bg-accent-yellow",
      skills: [
        { name: "MongoDB", slug: "mongodb", description: "NoSQL database for modern applications" },
        { name: "Docker", slug: "docker", description: "Platform for developing, shipping, and running applications" },
        { name: "Redux", slug: "redux", description: "State management library for JavaScript applications" },
      ]
    },
    {
      title: "D - Cringe",
      color: "bg-accent-orange",
      skills: [
        { name: "jQuery", slug: "jquery", description: "Fast, small, feature-rich JavaScript library" },
        { name: "PHP", slug: "php", description: "Server-side scripting language for web development" },
      ]
    },
    {
      title: "E - Strong Skill",
      color: "bg-accent-red",
      skills: [
        { name: "JavaScript", slug: "javascript", description: "Core language of the web with vast ecosystem" },
        { name: "HTML/CSS", slug: "html-css", description: "Fundamental building blocks of web development" },
        { name: "UI/UX Design", slug: "ui-ux", description: "Creating intuitive and beautiful user experiences" },
      ]
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-background text-primary py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-10">
          <section className="animate-fadeIn">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-highlight mb-2 sm:mb-3 pl-3 py-1">
              # My skills
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-primary pl-4 mb-8">
              I have a strong foundation in web development and I am always learning new technologies to improve my skills. I am proficient in the following technologies:
            </p>
          </section>

          {/* Render all skill categories */}
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              color={category.color}
              skills={category.skills}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default page