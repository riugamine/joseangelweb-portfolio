import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Progress } from "@/components/ui/progress"
import {
  CustomBentoGrid,
  CustomBentoItem,
} from "@/components/magicui/CustomBentoGrid";
import { projects } from "@/app/lib/data";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLink,
  faCode,
  faLightbulb,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  faClock,
  faUserTie,
  faGlobe,
  faUsers,
  faCalendar,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
// Helper function to get project by slug
const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Jose Angel Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await Promise.resolve(params)
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) return notFound();
  
        {/* Helper function for translations */}
        function translateKey(key: string): string {
          const translations: Record<string, string> = {
            duration: 'Duración',
            role: 'Rol',
            team: 'Equipo',
            client: 'Cliente',
            industry: 'Industria',
            startDate: 'Fecha de Inicio',
            completionDate: 'Fecha de Finalización'
          };
          return translations[key] || key;
        }
  // Helper function to get icon for project info
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-8 px-4 md:py-12 md:px-6">
      <div className="max-w-[90rem] mx-auto">
        <nav className="fixed top-4 left-4 z-50">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Volver</span>
          </Link>
        </nav>

        <CustomBentoGrid className="gap-4 md:gap-6 lg:gap-8">
          {/* Hero Section */}
          <CustomBentoItem
            colSpan={2}
            rowSpan={2}
            className="min-h-[50vh] lg:min-h-[60vh] overflow-hidden relative group"
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 md:p-10 flex flex-col justify-end">
              <div className="absolute top-6 right-6">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${project.isLive ? 'bg-neutral-900/80 text-white' : 'bg-neutral-900/80 text-neutral-300'}`}>
                  <span className={`w-1.5 h-1.5 mr-2 rounded-full ${project.isLive ? 'bg-emerald-400' : 'bg-neutral-400'}`} />
                  {project.isLive ? "Activo" : "En Desarrollo"}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">{project.title}</h1>
              <p className="text-lg text-neutral-200 font-light">{project.description}</p>
            </div>
          </CustomBentoItem>

          {/* Project Info */}
          <CustomBentoItem
            colSpan={1}
            rowSpan={2}
            className="bg-neutral-900/50 backdrop-blur-sm p-8"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-6">Información del Proyecto</h3>
                <div className="space-y-4">
                  {Object.entries(project.projectInfo).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-3">
                      <FontAwesomeIcon 
                        icon={getInfoIcon(key)} 
                        className="text-neutral-400 w-4" 
                      />
                      <span className="text-neutral-400 capitalize">{translateKey(key)}:</span>
                      <span className="font-light">{Array.isArray(value) ? value.join(', ') : value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-6">Tecnologías</h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.technologies.map((tech) => (
                    <div 
                      key={tech.name}
                      className="flex items-center gap-2 p-3 rounded-lg bg-neutral-800/50"
                    >
                      <FontAwesomeIcon icon={tech.icon} className="text-neutral-400" />
                      <span className="font-light">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CustomBentoItem>

        </CustomBentoGrid>


        {/* Actions */}
        <div className="fixed bottom-8 right-8 flex gap-4 z-50">
          {project.links.live && (
            <Link
              href={project.links.live}
              target="_blank"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all"
            >
              <FontAwesomeIcon icon={faGlobe} size="lg" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
