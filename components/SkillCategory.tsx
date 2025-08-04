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
      <section className="relative hover:shadow-md hover:translate-y-[-1px]">
         {/* Licky Code Background Elements */}
         <div className="absolute top-1 right-2 text-accent-green opacity-15 font-mono text-xs pointer-events-none z-10">{'[]'}</div>
         <div className="absolute bottom-2 left-2 text-link-color opacity-10 font-mono text-xs pointer-events-none z-10">{'// skills'}</div>

         <div className={`flex items-center ${color} px-4 py-2.5 rounded-t-md relative z-10`}>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-black font-mono">
               {title}
            </p>
         </div>
         <div className="flex flex-col gap-3 px-4 py-5 bg-background-secondary rounded-b-md border-l border-r border-b border-theme relative z-10">
            {skills.map((skill, index) => (
               <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span
                     title={`Learn more about ${skill.name}`}
                     aria-label={`Learn more about ${skill.name}`}
                     className="px-2 sm:px-3 py-1 sm:py-1.5 text-base sm:text-lg font-medium link-color hover:link-hover hover:underline font-mono"
                  >
                     -[{skill.name} ↗]
                  </span>
                  <p className="text-xs sm:text-sm md:text-base text-primary pl-4 font-mono opacity-80">
                     {skill.description}
                  </p>
               </div>
            ))}
         </div>
      </section>
   );
};

export default SkillCategory;
