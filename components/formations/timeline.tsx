"use client"

import Image from "next/image"
import React from "react"

import { AnimatedSection } from "@/components/common/animated-section"
import { FormationInterface } from "@/config/formations"

// Helper function to extract year from date
const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString()
}

// Helper function to get duration text
const getDurationText = (
  startDate: Date,
  endDate: Date | "Present" | "En cours"
): string => {
  const startYear = getYearFromDate(startDate)
  const endYear =
    typeof endDate === "string" ? endDate : getYearFromDate(endDate)
  return `${startYear} - ${endYear}`
}

interface TimelineProps {
  formations: FormationInterface[]
}

const Timeline: React.FC<TimelineProps> = ({ formations }) => {
  // Sort formations by date (most recent first)
  const sortedFormations = [...formations].sort((a, b) => {
    const dateA =
      a.endDate === "Present" || a.endDate === "En cours"
        ? new Date()
        : a.endDate
    const dateB =
      b.endDate === "Present" || b.endDate === "En cours"
        ? new Date()
        : b.endDate
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <div className="space-y-4">
      {sortedFormations.map((formation, index) => (
        <AnimatedSection
          key={formation.id}
          delay={0.1 * (index + 1)}
          direction="up"
        >
          <div className="w-full p-4 sm:p-6 bg-background border border-border rounded-lg transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-4 flex-1 min-w-0">
                {formation.logo && (
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
                    <Image
                      src={formation.logo}
                      alt={formation.school}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {formation.degree}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary border border-primary/20 w-fit">
                      {getDurationText(formation.startDate, formation.endDate)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-muted-foreground">
                      {formation.school}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  )
}

export default Timeline
