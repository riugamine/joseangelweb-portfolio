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

  return (
    <section
      id="about"
      className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300"
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
            className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight dark:text-white"
          >
            Solucionador de Problemas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300"
          >
            Transformando ideas en soluciones digitales elegantes y eficientes
          </motion.p>
        </motion.div>

        {/* Grid principal con diseño bento */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {/* Imagen de perfil con icono interactivo */}
          <Card className="md:col-span-5 overflow-hidden relative group ">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] w-full"
            >
              <Image
                src="/images/profile.jpg"
                alt="José Ángel Velásquez"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Icono interactivo */}
              <motion.div
                className="absolute bottom-4 right-4 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                onClick={() => setShowInfo(!showInfo)}
              >
                <div className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-lg">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="h-6 w-6 text-blue-500"
                  />
                </div>
              </motion.div>

              {/* Panel de información personal */}
              <AnimatePresence>
                {showInfo && (
                  <motion.div
                    ref={infoCardRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm p-6 flex flex-col justify-center space-y-4 rounded-xl"
                  >
                    {Object.entries(personalInfo).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 text-white"
                      >
                        <FontAwesomeIcon
                          icon={
                            key === "edad"
                              ? faClock
                              : key === "sexo"
                              ? faVenusMars
                              : key === "altura"
                              ? faRulerVertical
                              : key === "colorOjos"
                              ? faEye
                              : faHeart
                          }
                          className="h-5 w-5 text-blue-400"
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
          <Card className="md:col-span-7 p-8">
            <CardContent className="space-y-6">
              <motion.h3
                variants={itemVariants}
                className="text-3xl font-bold dark:text-white"
              >
                José Ángel Velásquez
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                Desarrollador web freelance especializado en transformar
                problemas complejos en soluciones elegantes. Mi enfoque combina
                la precisión técnica con un diseño minimalista inspirado en
                Apple, creando experiencias digitales que no solo funcionan
                perfectamente, sino que también son intuitivas y agradables de
                usar.
              </motion.p>

              <ScrollArea className="h-[200px] rounded-md border p-4">
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <h4 className="font-semibold text-lg dark:text-white">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                          >
                            {item}
                          </span>
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
          <h3 className="mb-8 text-center text-2xl font-bold dark:text-white">
            Mi Filosofía
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophies.map((philosophy, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all hover:scale-[1.02]"
              >
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center space-y-4"
                  >
                    <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={philosophy.icon}
                        className="h-6 w-6 text-blue-500"
                      />
                    </div>
                    <h4 className="font-semibold dark:text-white">
                      {philosophy.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
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
