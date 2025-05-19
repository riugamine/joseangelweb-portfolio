import { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { faClock, faUserTie, faGlobe, faUsers, faCalendar, faInfo } from '@fortawesome/free-solid-svg-icons'
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

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) return notFound();
// Helper function to get icon for project info
function getInfoIcon(key: string) {
    const icons = {
      duration: faClock,
      role: faUserTie,
      team: faUsers,
      client: faUserTie,
      industry: faGlobe,
      startDate: faCalendar,
      completionDate: faCalendar
    };
    return icons[key as keyof typeof icons] || faInfo;
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-8 px-4 md:py-12 md:px-6">
      <div className="max-w-[90rem] mx-auto">
        <nav className="fixed top-4 left-4 z-50">
          <Link
            href="/projects"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back</span>
          </Link>
        </nav>

        <CustomBentoGrid className="gap-4 md:gap-6 lg:gap-8">
          {/* Hero Section */}
          <CustomBentoItem
            colSpan={2}
            rowSpan={2}
            className="min-h-[50vh] lg:min-h-[60vh] overflow-hidden"
          >
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700"
              />
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8 flex flex-col justify-end">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${project.isLive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  <span className={`w-2 h-2 mr-2 rounded-full ${project.isLive ? 'animate-pulse bg-green-500' : 'bg-red-500'}`} />
                  {project.isLive ? "Live" : "In Development"}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-lg text-gray-300">{project.description}</p>
            </div>
          </CustomBentoItem>

          {/* Project Info */}
          <CustomBentoItem
            colSpan={1}
            rowSpan={2}
            className="bg-blue-950/20 p-6"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Project Info</h3>
                <div className="space-y-3">
                  {Object.entries(project.projectInfo).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2">
                      <FontAwesomeIcon 
                        icon={getInfoIcon(key)} 
                        className="text-blue-400 w-5" 
                      />
                      <span className="text-gray-400 capitalize">{key}:</span>
                      <span>{Array.isArray(value) ? value.join(', ') : value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                <div className="grid grid-cols-2 gap-2">
                  {project.technologies.map((tech) => (
                    <div 
                      key={tech.name}
                      className={`flex items-center gap-2 p-2 rounded-lg bg-white/5 ${tech.color}`}
                    >
                      <FontAwesomeIcon icon={tech.icon} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CustomBentoItem>

          {/* Features */}
          <CustomBentoItem
            colSpan={3}
            className="bg-purple-900/20 p-6"
          >
            <h3 className="text-xl font-semibold mb-6">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.features.map((feature) => (
                <div 
                  key={feature.title}
                  className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <FontAwesomeIcon 
                    icon={feature.icon} 
                    className="text-2xl mb-3 text-purple-400" 
                  />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </CustomBentoItem>

          {/* Challenges and Solutions */}
          <CustomBentoItem
            colSpan={3}
            className="bg-gray-900/50 p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenges */}
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <FontAwesomeIcon icon={faLightbulb} className="text-yellow-400" />
                  Challenges
                </h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge) => (
                    <div 
                      key={challenge.title}
                      className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <FontAwesomeIcon 
                          icon={challenge.icon} 
                          className="text-yellow-400" 
                        />
                        <h4 className="font-semibold">{challenge.title}</h4>
                      </div>
                      <p className="text-gray-400">{challenge.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <FontAwesomeIcon icon={faCode} className="text-green-400" />
                  Solutions
                </h3>
                <div className="space-y-4">
                  {project.solutions.map((solution) => (
                    <div 
                      key={solution.title}
                      className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <FontAwesomeIcon 
                          icon={solution.icon} 
                          className="text-green-400" 
                        />
                        <h4 className="font-semibold">{solution.title}</h4>
                      </div>
                      <p className="text-gray-400">{solution.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CustomBentoItem>

          {/* Metrics */}
          {project.metrics && (
            <CustomBentoItem
              colSpan={3}
              className="bg-blue-900/20 p-6"
            >
              <h3 className="text-xl font-semibold mb-6">Performance Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div 
                    key={key}
                    className="p-4 rounded-lg bg-white/5 text-center"
                  >
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      {value}%
                    </div>
                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </CustomBentoItem>
          )}
        </CustomBentoGrid>

        {/* Actions */}
        <div className="fixed bottom-8 right-8 flex gap-4 z-50">
          <Link
            href={project.links.live}
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-medium transition-all"
          >
            <FontAwesomeIcon icon={faExternalLink} />
            View Project
          </Link>
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}


