
import { notFound } from 'next/navigation'
import { CustomBentoGrid, CustomBentoItem } from '@/components/magicui/CustomBentoGrid'

import { projects } from '@/app/lib/data'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink, faCode, faLightbulb, faRocket, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

// Helper function to convert title to slug
const titleToSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '-')
}

// Get project by slug
const getProjectBySlug = (slug: string) => {
  return projects.find(project => titleToSlug(project.title) === slug)
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/50 py-12 px-4 sm:px-6 lg:px-8">
      <CustomBentoGrid className="max-w-7xl mx-auto">
        {/* Project Title and Status */}
        <CustomBentoItem colSpan={2} className="p-6">

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h1>
            {project.isLive && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <span>Ver en vivo</span>
                <FontAwesomeIcon icon={faExternalLink} className="w-4 h-4" />
              </a>
            )}

        </CustomBentoItem>

        {/* Continue replacing other sections similarly */}
      </CustomBentoGrid>
    </div>
  )
}