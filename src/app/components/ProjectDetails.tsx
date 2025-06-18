"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faClock,
  faUserTie,
  faGlobe,
  faUsers,
  faCalendar,
  faInfo,
  faWifi,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import {
  CustomBentoGrid,
  CustomBentoItem,
} from "@/components/magicui/CustomBentoGrid";
import { Project } from "@/lib/data";
import { useTranslation } from '@/contexts/LanguageContext';

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const { t } = useTranslation();

  function getInfoIcon(key: string) {
    const icons = {
      duration: faClock,
      role: faUserTie,
      team: faUsers,
      client: faUserTie,
      industry: faGlobe,
      startDate: faCalendar,
      completionDate: faCalendar,
    };
    return icons[key as keyof typeof icons] || faInfo;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6">
      <div className="max-w-[90rem] mx-auto">
        <nav className="fixed top-4 left-4 z-50">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-sm sm:text-base"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{t('projects.backButton')}</span>
          </Link>
        </nav>

        <CustomBentoGrid className="gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-10">
          <CustomBentoItem
            colSpan={2}
            rowSpan={2}
            className="min-h-[40vh] sm:min-h-[50vh] lg:min-h-[50vh] overflow-hidden relative group"
          >
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover brightness-90"
              />
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover brightness-90"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 md:p-8 flex flex-col justify-end">
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex gap-2">
                <span
                  className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                    project.isLive
                      ? "bg-neutral-900/80 text-white"
                      : "bg-neutral-900/80 text-neutral-300"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faWifi}
                    className={`w-3 h-3 sm:w-4 sm:h-4 mr-1.5 ${
                      project.isLive
                        ? "animate-pulse text-emerald-400"
                        : "text-neutral-400"
                    }`}
                    style={{
                      filter: project.isLive
                        ? "drop-shadow(0 0 8px rgb(52 211 153 / 0.5))"
                        : "none",
                    }}
                  />
                  {project.isLive ? t('projects.status.live') : t('projects.status.offline')}
                </span>
                {project.isLive && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-emerald-500 hover:bg-emerald-600 transition-all text-white shadow-lg shadow-emerald-500/20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="w-3 h-3 sm:w-4 sm:h-4 mr-2"
                    />
                    {t('projects.visitButton')}
                  </a>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-2 sm:mb-4">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-neutral-200 font-light line-clamp-3 sm:line-clamp-none">
                {project.description}
              </p>
            </div>
          </CustomBentoItem>

          <CustomBentoItem
            colSpan={1}
            rowSpan={2}
            className="bg-neutral-900/50 backdrop-blur-sm p-4 sm:p-6 md:p-8"
          >
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">
                  {t('projects.projectInfo.title')}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {Object.entries(project.projectInfo).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-xs"
                    >
                      <FontAwesomeIcon
                        icon={getInfoIcon(key)}
                        className="text-neutral-400 w-3 h-3 sm:w-4 sm:h-4"
                      />
                      <span className="text-neutral-400 capitalize">
                        {t(`projects.projectInfo.${key}`)}:
                      </span>
                      <span className="font-light">
                        {Array.isArray(value) ? value.join(", ") : value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">
                  {t('projects.technologies.title')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`inline-flex items-center px-2 py-1 rounded-md text-xs sm:text-sm ${tech.color} bg-white/10`}
                    >
                      <FontAwesomeIcon icon={tech.icon} className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CustomBentoItem>
        </CustomBentoGrid>
      </div>
    </div>
  );
}
