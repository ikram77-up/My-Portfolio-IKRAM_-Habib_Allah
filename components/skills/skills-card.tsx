import { skillsInterface } from "@/config/skills"

interface SkillsCardProps {
  skills: skillsInterface[]
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto flex flex-wrap justify-center gap-2">
      {skills.map((skill, id) => (
        <span
          key={id}
          className="
            inline-flex items-center
            rounded-full
            border border-border
            bg-muted
            px-4 py-1.5
            text-sm font-medium
            text-foreground
            transition-all duration-200
            hover:bg-primary hover:text-primary-foreground
          "
        >
          {skill.name}
        </span>
      ))}
    </div>
  )
}
