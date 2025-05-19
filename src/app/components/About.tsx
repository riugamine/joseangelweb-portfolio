"use client";
import { useState, useRef, useEffect } from "react";
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptopCode,
  faGraduationCap,
  faBrain,
  faClock,
  faVenusMars,
  faUser,
  faRulerVertical,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
// Hook personalizado para detectar clics fuera del elemento
const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
};
export default function About() {
  const [showInfo, setShowInfo] = useState(false);
  const { scrollYProgress } = useScroll();
  const infoCardRef = useRef<HTMLDivElement>(null);
  
  useClickOutside(infoCardRef as React.RefObject<HTMLElement>, () => {
    if (showInfo) setShowInfo(false);
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  //Datos personales
  const personalInfo = {
    edad: 27,
    sexo: "Masculino",
    altura: "1.75m",
    colorOjos: "Marrones",
    hobbies: ["Programación", "Lectura", "Música"],
  };
  // Datos de habilidades
  const skills = [
    {
      name: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "3D emgineering",
      ],
      description:
        "Desarrollo de interfaces modernas y responsivas con las últimas tecnologías",
    },
    {
      name: "Backend",
      items: ["Node.js", "Express", "Supabase", "PostgreSQL"],
      description: "Arquitectura backend robusta y escalable",
    },
    {
      name: "Herramientas",
      items: ["Git", "Docker", "Figma"],
      description: "Flujo de trabajo profesional y colaborativo",
    },
    {
      name: "Otros",
      items: [
        "SEO",
        "Responsive Design",
        "Performance Optimization",
        "Testing",
      ],
      description: "Optimización y mejores prácticas",
    },
  ];

  // Datos de filosofía
  const philosophies = [
    {
      icon: faCode,
      title: "Código Limpio",
      description:
        "Desarrollo con enfoque en legibilidad, mantenibilidad y escalabilidad.",
    },
    {
      icon: faLaptopCode,
      title: "Aprendizaje Continuo",
      description:
        "Constantemente explorando nuevas tecnologías y mejores prácticas.",
    },
    {
      icon: faGraduationCap,
      title: "Estoicismo",
      description:
        "Enfoque en lo que puedo controlar y aceptación de lo que no.",
    },
    {
      icon: faBrain,
      title: "Disciplina",
      description: "Consistencia y dedicación en cada proyecto que emprendo.",
    },
  ];
  const getIconForKey = (key: string) => {
    // 
    const iconMap: { [key: string]: IconDefinition } = {
      edad: faClock,
      sexo: faVenusMars,
      altura: faRulerVertical,
      colorOjos: faEye,
      hobbies: faHeart
    };
  
    return iconMap[key] || faUser; // Retorna faUser como icono por defecto
  };
  return (
    <section
      id="about"
      className="py-16 bg-background transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Encabezado con efecto parallax */}
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -50]),
          }}
          className="mb-16 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground"
          >
            Solucionador de Problemas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground"
          >
            Transformando ideas en soluciones digitales elegantes y eficientes
          </motion.p>
        </motion.div>

        {/* Grid principal con diseño bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 sm:gap-6 mb-12">
          {/* Imagen de perfil con icono interactivo */}
          <Card className="sm:col-span-1 md:col-span-5 overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-full w-full"
            >
              <Image
                src="https://res.cloudinary.com/da95ksabl/image/upload/v1747675089/profile_m3snnc.jpg"
                alt="José Ángel Velásquez"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 40vw"
                priority
              />
              {/* Icono interactivo */}
              <motion.button
                className="absolute bottom-4 right-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowInfo(!showInfo)}
                aria-label="Mostrar información personal"
              >
                <div className="bg-card/90 dark:bg-card-foreground/90 p-3 rounded-full shadow-lg">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="h-6 w-6 text-primary"
                  />
                </div>
              </motion.button>

              {/* Panel de información personal */}
              <AnimatePresence>
                {showInfo && (
                  <motion.div
                    ref={infoCardRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute inset-0 bg-card/90 backdrop-blur-sm p-6 flex flex-col justify-center space-y-4 rounded-xl"
                  >
                    {Object.entries(personalInfo).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 text-foreground"
                      >
                        <FontAwesomeIcon
                          icon={getIconForKey(key)}
                          className="h-5 w-5 text-primary"
                        />
                        <span className="capitalize">
                          {key.replace(/([A-Z])/g, " $1").toLowerCase()}:
                        </span>
                        <span className="font-semibold">
                          {Array.isArray(value) ? value.join(", ") : value}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </Card>

          {/* Bio principal */}
          <Card className="sm:col-span-1 md:col-span-7 p-6 sm:p-8 h-auto sm:h-[400px] md:h-[500px] overflow-hidden">
            <CardContent className="space-y-6 h-full">
              <motion.h3
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-bold text-foreground"
              >
                José Ángel Velásquez
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              >
                Desarrollador web freelance especializado en transformar
                problemas complejos en soluciones elegantes. Mi enfoque combina
                la precisión técnica con un diseño minimalista inspirado en
                Apple, creando experiencias digitales que no solo funcionan
                perfectamente, sino que también son intuitivas y agradables de
                usar.
              </motion.p>

              <ScrollArea className="h-[calc(80%-200px)] rounded-md border p-4">
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-3"
                    >
                      <h4 className="font-semibold text-lg text-foreground">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 bg-muted/50 text-foreground rounded-full text-sm hover:bg-muted transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Filosofía */}
        <div>
          <h3 className="mb-8 text-center text-xl sm:text-2xl font-bold text-foreground">
            Mi Filosofía
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {philosophies.map((philosophy, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all hover:shadow-lg group"
              >
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center space-y-4"
                  >
                    <motion.div 
                      className="h-12 w-12 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <FontAwesomeIcon
                        icon={philosophy.icon}
                        className="h-6 w-6 text-primary"
                      />
                    </motion.div>
                    <h4 className="font-semibold text-foreground">
                      {philosophy.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {philosophy.description}
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
