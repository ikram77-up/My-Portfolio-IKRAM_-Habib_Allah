"use client"

import Image from "next/image"
import React from "react"

import { FormationInterface } from "@/config/formations"

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

interface FormationCardProps {
  formation: FormationInterface
}

const FormationCard: React.FC<FormationCardProps> = ({ formation }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-4 sm:p-6 transition-all duration-300">
      <div className="flex items-start gap-3 sm:gap-4">
        {formation.logo && (
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
            <Image
              src={formation.logo}
              alt={formation.school}
              width={48}
              height={48}
              className="w-full h-full object-contain p-2"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex items-start sm:items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-foreground line-clamp-2 sm:line-clamp-1">
                {formation.degree}
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-muted-foreground">
              <span className="font-medium">{formation.school}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {getDurationText(formation.startDate, formation.endDate)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormationCard
