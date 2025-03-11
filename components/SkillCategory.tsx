import React from 'react';

const SkillCategory = ({ title, color, skills }: {
   title: string;
   color: string;
   skills: {
      name: string;
      description: string;
   }[];
}) => {
   return (
      <section className="animate-fadeIn transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
         <div className={`flex items-center ${color} px-4 py-2.5 rounded-t-md`}>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-black">
               {title}
            </p>
         </div>
         <div className="flex flex-col gap-3 px-4 py-5 bg-background-secondary rounded-b-md border-l border-r border-b border-theme">
            {skills.map((skill, index) => (
               <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span
                     title={`Learn more about ${skill.name}`}
                     aria-label={`Learn more about ${skill.name}`}
                     className="px-2 sm:px-3 py-1 sm:py-1.5 text-base sm:text-lg font-medium link-color hover:link-hover transition-colors duration-200 hover:underline"
                  >
                     -[{skill.name} ↗]
                  </span>
                  <p className="text-xs sm:text-sm md:text-base text-primary pl-4">
                     {skill.description}
                  </p>
               </div>
            ))}
         </div>
      </section>
   );
};

export default SkillCategory;
