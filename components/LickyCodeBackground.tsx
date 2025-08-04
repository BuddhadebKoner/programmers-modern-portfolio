import React from 'react';

interface LickyCodeBackgroundProps {
   variant?: 'home' | 'default';
}

const LickyCodeBackground: React.FC<LickyCodeBackgroundProps> = ({ variant = 'default' }) => {
   const getFloatingElements = () => {
      if (variant === 'home') {
         return (
            <>
               <span className="code-float code-float-1">{'<dev>'}</span>
               <span className="code-float code-float-2">{'{ }'}</span>
               <span className="code-float code-float-3">{'</>'}</span>
               <span className="code-float code-float-4">{'&&'}</span>
               <span className="code-float code-float-5">{'=>'}</span>
               <span className="code-float code-float-6">{'/*'}</span>
            </>
         );
      }

      // Different code elements for other pages
      return (
         <>
            <span className="code-float code-float-1">{'<>'}</span>
            <span className="code-float code-float-2">{'[ ]'}</span>
            <span className="code-float code-float-3">{'( )'}</span>
            <span className="code-float code-float-4">{'?:'}</span>
            <span className="code-float code-float-5">{'!=='}</span>
            <span className="code-float code-float-6">{'/**/'}</span>
         </>
      );
   };

   const getCreativeText = () => {
      if (variant === 'home') {
         return (
            <>
               <span className="creative-text creative-text-1">code.life()</span>
               <span className="creative-text creative-text-2">while(coding)</span>
               <span className="creative-text creative-text-3">dream++</span>
               <span className="creative-text creative-text-4">build()</span>
            </>
         );
      }

      // Different creative text for other pages
      return (
         <>
            <span className="creative-text creative-text-1">create()</span>
            <span className="creative-text creative-text-2">innovate</span>
            <span className="creative-text creative-text-3">explore++</span>
            <span className="creative-text creative-text-4">debug.fix()</span>
         </>
      );
   };

   return (
      <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ zIndex: -1 }}>
         {/* Licky Code Grid Background */}
         <div className="code-grid"></div>

         {/* Floating Code Elements */}
         <div className="floating-code-elements">
            {getFloatingElements()}
         </div>

         {/* Random Creative Text */}
         <div className="creative-text-elements">
            {getCreativeText()}
         </div>

         {/* SVG Arrow Elements */}
         <div className="svg-arrows">
            <svg className="arrow arrow-1" viewBox="0 0 24 24" fill="none">
               <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg className="arrow arrow-2" viewBox="0 0 24 24" fill="none">
               <path d="M17 7L7 17M7 17H17M7 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg className="arrow arrow-3" viewBox="0 0 24 24" fill="none">
               <path d="M12 5L19 12L12 19M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </div>
      </div>
   );
};

export default LickyCodeBackground;
