"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { projects, notifications } from "../lib/data";
import { AnimatedList } from "@/components/magicui/animated-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
  // Hook para detectar el tema actual (claro/oscuro)
  const { theme } = useTheme();

  // Animaciones para los proyectos
  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  // Animación para las etiquetas
  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="projects"
      className="py-16 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold md:text-4xl dark:text-white"
          >
            Proyectos Destacados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300"
          >
            Una selección de mis trabajos recientes en desarrollo web y
            aplicaciones.
          </motion.p>
        </div>

        {/* Grid de proyectos con diseño adaptativo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
              className={`group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-md 
                transition-all dark:border dark:border-gray-700 
                ${project.featured ? "md:col-span-2" : ""}`}
            >
              <Link href={`/projects/${project.slug}`} className="relative h-100 w-full overflow-hidden">
                {project.video ? (
                  <video
                    src={project.video}
                    className="object-cover w-full h-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        ${
          project.isLive
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
        }`}
                  >
                    <span
                      className={`w-2 h-2 mr-1.5 rounded-full ${
                        project.isLive
                          ? "animate-pulse bg-green-500"
                          : "bg-red-500"
                      }`}
                    ></span>
                    {project.isLive ? "Live" : "Offline"}
                  </span>
                </div>
                {/* Project Info Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/20 rounded-md text-sm text-white backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          {/* Animated Notifications Grid */}
          <div className="mt-16 max-w-2xl mx-auto">
            <AnimatedList
              delay={3000}
              onAnimationEnd={() => console.log("Animation ended")}
            >
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm mb-4"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <FontAwesomeIcon
                      icon={notification.icon}
                      className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      {notification.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {notification.description}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400">
                    {notification.time}
                  </span>
                </motion.div>
              ))}
            </AnimatedList>
          </div>
        </div>

      </div>
    </section>
  );
}
