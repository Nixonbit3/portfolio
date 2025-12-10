import React, { useState, useEffect, useRef } from "react";

const iconStyle = "h-6 w-6 text-white/70";

const CategoryIcons = {
  "¿Qué tecnologías uso?": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconStyle}>
      <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd" />
    </svg>
  ),
  "Mi Experiencia": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconStyle}>
      <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3V6h4.5A1.5 1.5 0 0122.5 7.5v12a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5v-12A1.5 1.5 0 013 6h4.5v-.75zm3-1.5a1.5 1.5 0 00-1.5 1.5V6h3v-.75a1.5 1.5 0 00-1.5-1.5h-3z" clipRule="evenodd" />
    </svg>
  ),
  "Mi formación": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconStyle}>
      <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
      <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
    </svg>
  ),
  "¿Cómo trabajo en equipo?": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconStyle}>
      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
    </svg>
  ),
  "Metodologías Ágiles": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconStyle}>
      <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);
  const cardsRef = useRef([]);

  const skills = {
    "¿Qué tecnologías uso?": [
      "Unity, C++, Blender, Maya, Substance Painter, Figma, 3Dmax, C#, Photoshop, Unreal..."
    ],
    "Mi Experiencia": [
      "He trabajado en mi TFG y en varios proyectos de videojuegos y herramientas interactivas, creando sistemas jugables y diseños funcionales."
    ],
    "Mi formación": [
      "Grado en Diseño y Desarrollo de Videojuegos – CITM (UPC)."
    ],
    "¿Cómo trabajo en equipo?": [
      "Soy introvertido, pero me adapto a equipos multidisciplinarios usando metodologías ágiles y comunicación clara para coordinar tareas."
    ],
    "Metodologías Ágiles": [
      "Scrum y Kanban para gestionar proyectos, sprints de desarrollo y revisiones, asegurando eficiencia y organización."
    ],
  };

  const toggleItem = (item) => setOpenItem(openItem === item ? null : item);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show-card");
            }, index * 100);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-32 md:py-40 px-6 overflow-hidden bg-black">
      
      {/* AMBIENT BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="mx-auto w-full max-w-4xl">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          {/* LABEL */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span className="text-white/70 text-sm font-medium">FAQ</span>
          </div>

          {/* TITLE */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
              Sobre mí
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              y mi trabajo
            </span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Conoce más sobre mi experiencia, habilidades y forma de trabajo
          </p>
        </div>

        {/* ACCORDION */}
        <ul className="space-y-4">
          {Object.entries(skills).map(([category, items], index) => (
            <li key={category} className="w-full">
              <div
                ref={el => (cardsRef.current[index] = el)}
                className="faq-card opacity-0 translate-y-8"
              >
                {/* CARD */}
                <div
                  className={`
                    relative overflow-hidden rounded-3xl
                    bg-gradient-to-br from-white/10 to-white/5
                    backdrop-blur-xl border border-white/10
                    shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                    transition-all duration-500 ease-out
                    ${openItem === category 
                      ? 'shadow-[0_20px_60px_rgba(120,54,207,0.3)] border-white/20' 
                      : 'hover:border-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]'
                    }
                  `}
                >
                  {/* QUESTION / HEADER */}
                  <button
                    onClick={() => toggleItem(category)}
                    className="flex items-center gap-4 p-6 md:p-8 w-full text-left group"
                  >
                    {/* ICON */}
                    <div className={`
                      flex-shrink-0 p-3 rounded-2xl
                      bg-white/5 border border-white/10
                      transition-all duration-500
                      ${openItem === category 
                        ? 'bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-white/20 scale-110' 
                        : 'group-hover:bg-white/10'
                      }
                    `}>
                      {CategoryIcons[category]}
                    </div>

                    {/* QUESTION TEXT */}
                    <div className="flex grow items-center justify-between">
                      <span className={`
                        text-lg md:text-xl font-semibold
                        transition-all duration-300
                        ${openItem === category 
                          ? 'text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text' 
                          : 'text-white group-hover:text-white/90'
                        }
                      `}>
                        {category}
                      </span>
                      
                      {/* CHEVRON */}
                      <div className={`
                        flex-shrink-0 p-2 rounded-xl
                        bg-white/5 border border-white/10
                        transition-all duration-500
                        ${openItem === category 
                          ? 'rotate-180 bg-white/10' 
                          : 'group-hover:bg-white/10'
                        }
                      `}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-white/70"
                        >
                          <path d="M12 14L6 8H18L12 14Z" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* ANSWER / CONTENT */}
                  <div
                    className={`
                      overflow-hidden
                      transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${openItem === category 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                      }
                    `}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      {/* DIVIDER */}
                      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
                      
                      {/* TEXT */}
                      <p className="text-white/70 text-base md:text-lg leading-relaxed">
                        {items}
                      </p>
                    </div>
                  </div>

                  {/* GLOW EFFECT (visible when open) */}
                  {openItem === category && (
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-3xl blur-2xl -z-10 animate-pulse-slow"></div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>

      <style jsx>{`
        .show-card {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

        /* Typography */
        h2, p, span, button {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </section>
  );
};

export default SkillsList;