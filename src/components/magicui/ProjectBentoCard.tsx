
import { ReactNode } from 'react'

interface ProjectBentoCardProps {
  children: ReactNode
  className?: string
}

export function ProjectBentoCard({ children, className = '' }: ProjectBentoCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      {children}
    </div>
  )
}