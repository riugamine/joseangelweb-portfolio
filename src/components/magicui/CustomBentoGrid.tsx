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
        'grid w-full',
        'grid-cols-1 sm:grid-cols-2 md:grid-cols-3', // Mejores breakpoints responsivos
        'auto-rows-[minmax(180px,auto)]', // Altura de fila más flexible
        'gap-3 sm:gap-4 md:gap-6 lg:gap-8', // Espaciado progresivo
        'p-2 sm:p-4 md:p-6', // Padding responsivo
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
        'group relative overflow-hidden rounded-xl',
        'bg-gradient-to-br from-white/5 to-white/10 dark:from-gray-800/50 dark:to-gray-900/50',
        'transition-all duration-500 ease-out',
        'hover:shadow-2xl hover:shadow-white/10',
        'hover:scale-[1.01] hover:-translate-y-0.5',
        'dark:shadow-[0_-20px_80px_-20px_#ffffff1f_inset]',
        'dark:border dark:border-white/10',
        'backdrop-blur-[6px]',
        colSpan > 1 ? `sm:col-span-${colSpan}` : '',
        rowSpan > 1 ? `sm:row-span-${rowSpan}` : '',
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