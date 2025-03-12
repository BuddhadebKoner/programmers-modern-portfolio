import React from 'react';
import SkillCategory from "@/components/SkillCategory";
import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Skills - Buddhadeb Koner | FullStack Web Developer",
  description:
    "Explore the skills and technologies mastered by Buddhadeb Koner, a FullStack Web Developer with expertise in modern web development, React, Next.js, and more.",
  openGraph: {
    title: "Skills - Buddhadeb Koner | FullStack Web Developer",
    description:
      "Explore the skills and technologies mastered by Buddhadeb Koner, a FullStack Web Developer with expertise in modern web development, React, Next.js, and more.",
    url: "https://buddhadebkoner.vercel.app/skill",
    siteName: "Buddhadeb Koner",
    images: [
      {
        url: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285452/next-portfolio/ntuasgjzwygk9ntvwlgi.png",
        width: 1200,
        height: 630,
        alt: "Skills of Buddhadeb Koner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills - Buddhadeb Koner | FullStack Web Developer",
    description:
      "Explore the skills and technologies mastered by Buddhadeb Koner, a FullStack Web Developer with expertise in modern web development, React, Next.js, and more.",
    images: ["https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285452/next-portfolio/ntuasgjzwygk9ntvwlgi.png"],
  },
  alternates: {
    canonical: "https://buddhadebkoner.vercel.app/skill",
  },
};

const page = () => {
  // Skill data organized by categories
  const skillCategories = [
    {
      title: "A - Based",
      color: "bg-accent-green-light",
      skills: [
        {
          name: "HTML",
          description: "Markup language essential for structuring web content."
        },
        {
          name: "CSS",
          description: "Styling language for crafting visually appealing web pages."
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework enabling rapid and responsive UI development."
        },
        {
          name: "Git",
          description: "Version control system for tracking changes in code and collaborating with others."
        },
        {
          name: "Figma",
          description: "Design tool for creating high-fidelity prototypes and mockups."
        },
        {
          name: "Blog Writing",
          description: "Experience in writing technical articles and blog posts on web development."
        },
      ]
    },
    {
      title: "B - Mid",
      color: "bg-accent-green",
      skills: [
        {
          name: "JavaScript (ES6+)",
          description: "Core programming language for creating dynamic web experiences."
        },
        {
          name: "C++",
          description: "Enhanced programming with object-oriented principles and performance optimization."
        },
        {
          name: "Java",
          description: "Robust language for building scalable applications and deepening programming expertise."
        },
        {
          name: "Python",
          description: "Versatile scripting language for automation, data handling, and quick prototyping."
        },
        {
          name: "DSA",
          description: "Understanding of fundamental data structures and algorithms for efficient problem-solving."
        },
        {
          name: "Linux",
          description: "Experience with Linux-based operating systems and command-line tools."
        },
      ]
    },
    {
      title: "C - Good",
      color: "bg-accent-yellow",
      skills: [
        {
          name: "Next.js",
          description: "Powerful framework for server-rendered React applications and full-stack development."
        },
        {
          name: "Express.js",
          description: "Minimalist web framework for Node.js that simplifies API development."
        },
        {
          name: "MongoDB",
          description: "NoSQL database integral to the MERN stack for handling dynamic data."
        },
        {
          name: "UI/UX Design",
          description: "Knowledge of design principles and tools to create intuitive user interfaces."
        },
      ]
    },
    {
      title: "D - Cringe",
      color: "bg-accent-orange",
      skills: [
        {
          name: "React Native",
          description: "Framework for building high-quality native mobile apps using React."
        }
      ]
    },
    {
      title: "E - Strong Skill",
      color: "bg-accent-red",
      skills: [
        {
          name: "React",
          description: "Modern component-based library for building interactive user interfaces."
        },
        {
          name: "Node.js",
          description: "Efficient JavaScript runtime for building scalable backend services."
        },
      ]
    }
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
              Here are the skills and technologies I&apos;ve mastered over the years as a FullStack Web Developer. I&apos;m always learning and exploring new tools to enhance my development workflow and create better user experiences. see my works on<Link href="/works" className="px-3 py-2 rounded-md text-sm font-medium link-color hover:link-hover">[Work ↗]</Link>page.
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
  );
};

export default page;
