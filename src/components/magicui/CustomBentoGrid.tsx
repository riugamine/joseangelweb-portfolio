'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CustomBentoGridProps {
  children: ReactNode
  className?: string
}

interface CustomBentoItemProps {
  children: ReactNode
  className?: string
  colSpan?: number
  rowSpan?: number
}

export function CustomBentoGrid({ children, className = '' }: CustomBentoGridProps) {
  return (
    <div className={cn(
      'grid w-full grid-cols-1 md:grid-cols-3 auto-rows-[180px] gap-4',
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
  rowSpan = 1 
}: CustomBentoItemProps) {
  return (
    <div className={cn(
      'group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800',
      'transition-all duration-300 hover:shadow-lg',
      'dark:shadow-[0_-20px_80px_-20px_#ffffff1f_inset] dark:border dark:border-gray-700/50',
      `col-span-${colSpan} row-span-${rowSpan}`,
      className
    )}>
      {children}
    </div>
  )
}