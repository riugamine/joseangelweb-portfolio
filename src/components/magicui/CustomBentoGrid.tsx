'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CustomBentoGridProps {
  children: ReactNode
  className?: string
}

interface CustomBentoItemProps {
  children: ReactNode
  className?: string
  colSpan?: number
  rowSpan?: number
  title?: string
  description?: string
  header?: ReactNode
  icon?: ReactNode
}

export function CustomBentoGrid({ children, className = '' }: CustomBentoGridProps) {
  return (
    <div className={cn(
      'grid w-full grid-cols-1 md:grid-cols-3 auto-rows-[180px] gap-4 p-4',
      className
    )}>
      {children}
    </div>
  )
}

export function CustomBentoItem({ 
  children, 
  className = '', 
  colSpan = 1, 
  rowSpan = 1,
  title,
  description,
  header,
  icon
}: CustomBentoItemProps) {
  return (
    <motion.div 
      className={cn(
        'group relative overflow-hidden rounded-xl bg-white/5 dark:bg-gray-800/50',
        'transition-all duration-300 hover:shadow-xl hover:scale-[1.02]',
        'dark:shadow-[0_-20px_80px_-20px_#ffffff1f_inset] dark:border dark:border-gray-700/50',
        'backdrop-blur-sm',
        `md:col-span-${colSpan} md:row-span-${rowSpan}`,
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-0" />
      {header && (
        <div className="absolute top-4 left-4 z-20">
          {header}
        </div>
      )}
      {icon && (
        <div className="absolute top-4 right-4 z-20">
          {icon}
        </div>
      )}
      {(title || description) && (
        <div className="absolute top-4 left-4 z-20">
          {title && <h3 className="text-xl font-bold text-white mb-2">{title}</h3>}
          {description && <p className="text-sm text-gray-300">{description}</p>}
        </div>
      )}
      <div className="relative h-full w-full z-10">
        {children}
      </div>
    </motion.div>
  )
}