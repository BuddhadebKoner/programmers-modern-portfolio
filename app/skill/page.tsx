import React from 'react';
import SkillCategory from "@/components/SkillCategory";
import type { Metadata } from "next";

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
          name: "JavaScript (ES6+)",
          description: "Core programming language for creating dynamic web experiences."
        }
      ]
    },
    {
      title: "B - Good",
      color: "bg-accent-green",
      skills: [
        {
          name: "C Programming",
          description: "Foundational language learned during college, crucial for understanding programming concepts."
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
        }
      ]
    },
    {
      title: "C - Mid",
      color: "bg-accent-yellow",
      skills: [
        {
          name: "UI/UX Design",
          description: "Fundamental principles of designing user-friendly and intuitive interfaces."
        },
        {
          name: "Responsive Web Design",
          description: "Techniques to build adaptive layouts for various devices and screen sizes."
        },
        {
          name: "Small Website Development",
          description: "Experience in creating basic websites to experiment and learn new concepts."
        }
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
          name: "Next.js",
          description: "Powerful framework for server-rendered React applications and full-stack development."
        },
        {
          name: "Node.js",
          description: "Efficient JavaScript runtime for building scalable backend services."
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
          name: "Tailwind CSS",
          description: "Utility-first CSS framework enabling rapid and responsive UI development."
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
  );
};

export default page;
