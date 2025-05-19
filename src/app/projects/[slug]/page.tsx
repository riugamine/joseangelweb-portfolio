import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CustomBentoGrid, CustomBentoItem } from '@/components/magicui/CustomBentoGrid'
import { projects } from '@/app/lib/data'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faExternalLink, faCode, faLightbulb, faRocket } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

// Helper function to get project by slug
const getProjectBySlug = (slug: string) => {
  return projects.find(project => project.slug === slug)
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params)
  const project = getProjectBySlug(resolvedParams.slug)
  
  if (!project) return { title: 'Project Not Found' }
  
  return {
    title: `${project.title} | Jose Angel Portfolio`,
    description: project.description
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="mb-8">
          <Link 
            href="/projects" 
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </nav>
      </div>

      <CustomBentoGrid>
        {/* Project Title and Status */}
        <CustomBentoItem
          colSpan={2}
          className="bg-gradient-to-br from-purple-500 to-pink-500"
          header={
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              project.isLive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {project.isLive ? 'Live Project' : 'In Development'}
            </span>
          }
          icon={
            <Link 
              href={project.link} 
              className="text-white hover:text-primary transition-colors p-2 hover:bg-white/10 rounded-full"
              target="_blank"
            >
              <FontAwesomeIcon icon={faExternalLink} size="lg" />
            </Link>
          }
        >
          <div className="flex flex-col justify-end h-full p-8">
            <h1 className="text-5xl font-bold leading-tight">{project.title}</h1>
          </div>
        </CustomBentoItem>

        {/* Project Preview */}
        <CustomBentoItem rowSpan={2}>
          <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </CustomBentoItem>

        {/* Technologies */}
        <CustomBentoItem
          title="Technologies"
          icon={<FontAwesomeIcon icon={faCode} className="text-blue-400" />}
        >
          <div className="flex flex-wrap gap-2 p-6 pt-16">
            {project.technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </CustomBentoItem>

        {/* Description */}
        <CustomBentoItem
          colSpan={2}
          title="Overview"
          icon={<FontAwesomeIcon icon={faLightbulb} className="text-yellow-400" />}
        >
          <div className="p-6 pt-16">
            <p className="text-gray-200 text-lg leading-relaxed">{project.description}</p>
          </div>
        </CustomBentoItem>

        {/* Challenges and Solutions */}
        <CustomBentoItem
          colSpan={3}
          title="Key Features"
          icon={<FontAwesomeIcon icon={faRocket} className="text-purple-400" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 pt-16">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                Challenges
              </h4>
              <ul className="space-y-3 text-gray-200">
                {project.challenges?.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Solutions
              </h4>
              <ul className="space-y-3 text-gray-200">
                {project.solutions?.map((solution, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CustomBentoItem>
      </CustomBentoGrid>

      <div className="fixed bottom-8 right-8 flex gap-4 z-50">
        <Link 
          href="https://github.com/joseangelvelazquez" 
          className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all hover:scale-110"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </Link>
        <Link 
          href="https://linkedin.com/in/joseangelvelazquez" 
          className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all hover:scale-110"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </Link>
        <Link 
          href="https://twitter.com/joseangeldev" 
          className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all hover:scale-110"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </Link>
      </div>
    </div>
  )
}