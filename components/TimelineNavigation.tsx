"use client";

import { useState, useEffect, useRef } from 'react';
import { ArrowUp, ChevronDown, ChevronUp } from 'lucide-react';

const TimelineNavigation = ({ projects }: {
   projects: { title: string; description: string; demoUrl?: string; sourceCodeUrl?: string; images: string[]; tags?: string[]; }[];
}) => {
   const [activeProject, setActiveProject] = useState(0);
   const [isExpanded, setIsExpanded] = useState(false);
   const navRef = useRef<HTMLDivElement>(null);

   // Handle scroll to set the active project
   useEffect(() => {
      const handleScroll = () => {
         // Get all project elements
         const projectElements = document.querySelectorAll('[data-project-id]');

         // Find which project is currently in view
         for (let i = 0; i < projectElements.length; i++) {
            const element = projectElements[i];
            const rect = element.getBoundingClientRect();

            // If the element is in the viewport
            if (rect.top <= 250 && rect.bottom >= 100) {
               const projectId = element.getAttribute('data-project-id');
               if (projectId !== null) {
                  setActiveProject(parseInt(projectId));
               }
               break;
            }
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   // Scroll to the selected project
   const scrollToProject = (index: number) => {
      const element = document.querySelector(`[data-project-id="${index}"]`);
      if (element) {
         const yOffset = -80; // Offset for header
         const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
         window.scrollTo({ top: y, behavior: 'smooth' });
         setIsExpanded(false); // Close navigation after selection on mobile
      }
   };

   // Scroll to top
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   // Toggle navigation expansion
   const toggleNavigation = () => {
      setIsExpanded(!isExpanded);
   };

   // Close navigation when clicking outside
   useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
         if (navRef.current && !navRef.current.contains(e.target as Node) && isExpanded) {
            setIsExpanded(false);
         }
      };

      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
   }, [isExpanded]);

   return (
      <div
         ref={navRef}
         className="navigatebox fixed z-50 sm:right-4 right-2 bottom-16 sm:bottom-auto sm:top-1/2 sm:transform sm:-translate-y-1/2"
         aria-label="Project navigation"
      >
         {/* Licky Code Background Elements */}
         <div className="absolute -top-2 -right-2 text-accent-green opacity-20 font-mono text-xs pointer-events-none">
            {'[]'}
         </div>
         <div className="absolute -bottom-2 -left-2 text-link-color opacity-15 font-mono text-xs pointer-events-none">
            {'// nav'}
         </div>

         <div
            className={`
               bg-background-secondary border border-theme rounded-lg p-3 shadow-lg relative
               ${isExpanded ? 'opacity-100' : 'opacity-90 hover:opacity-100'}
               ${isExpanded ? 'scale-100' : 'scale-95 hover:scale-100'}
            `}
         >
            <button
               onClick={!isExpanded ? toggleNavigation : scrollToTop}
               className="
                  cursor-pointer w-full flex items-center justify-center gap-2 p-2 rounded-md 
                  bg-theme/20 hover:bg-theme/40 active:bg-theme/50
                  text-sm font-mono
               "
               aria-label={isExpanded ? "Scroll to top" : "Open navigation menu"}
            >
               {isExpanded ? (
                  <>
                     <ArrowUp size={14} />
                     <span>{`// top`}</span>
                     <ArrowUp size={14} />
                  </>
               ) : (
                  <>
                     <ChevronDown size={16} />
                     <span className="sm:block hidden">{"{ nav }"}</span>
                  </>
               )}
            </button>

            {isExpanded && (
               <>
                  <div className="w-full h-px bg-theme/30 my-3"></div>
                  <div className="text-xs text-accent-green opacity-60 font-mono mb-2">
                     {'/* projects */'}
                  </div>

                  <nav className="flex flex-col gap-2 max-h-[40vh] sm:max-h-[240px] overflow-y-auto custom-scrollbar">
                     {projects.map((project, index) => (
                        <button
                           key={index}
                           onClick={() => scrollToProject(index)}
                           className={`
                              cursor-pointer text-left px-3 py-2 rounded-md text-sm font-mono
                              focus:outline-none focus:ring-1 focus:ring-highlight/50
                              ${activeProject === index
                                 ? 'bg-highlight/20 text-highlight font-medium'
                                 : 'hover:bg-theme/20 active:bg-theme/30'
                              }
                           `}
                           aria-current={activeProject === index ? "true" : "false"}
                        >
                           <span className="text-accent-green opacity-60">-[</span>
                           {project.title.length > 20 ? `${project.title.slice(0, 20)}...` : project.title}
                           <span className="text-accent-green opacity-60">]</span>
                        </button>
                     ))}
                  </nav>

                  <div className="w-full h-px bg-theme/30 my-3"></div>

                  <button
                     onClick={toggleNavigation}
                     className="
                        w-full flex items-center justify-center gap-2 p-2 rounded-md 
                        hover:bg-theme/20 active:bg-theme/30
                        text-sm font-mono
                        focus:outline-none focus:ring-2 focus:ring-highlight/50
                     "
                     aria-label="Close navigation menu"
                  >
                     <ChevronUp size={14} />
                     <span>{'</>'}</span>
                     <ChevronUp size={14} />
                  </button>
               </>
            )}
         </div>
      </div>
   );
};

export default TimelineNavigation;