import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/app/lib/data";
import ProjectDetails from "@/app/components/ProjectDetails";

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const project = projects.find((project) => project.slug === resolvedParams.slug)
  
  if (!project) return { title: "Project Not Found" }

  return {
    title: `${project.title} | Jose Angel Portfolio`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params
  const project = projects.find((project) => project.slug === resolvedParams.slug)

  if (!project) return notFound()
  
  return <ProjectDetails project={project} />;
}