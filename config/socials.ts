import { Icons } from "@/components/common/icons"

interface SocialInterface {
  name: string
  username: string
  icon: any
  link: string
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "ikram77-up",
    icon: Icons.gitHub,
    link: "https://github.com/ikram77-up",
  },
  {
    name: "LinkedIn",
    username: "Ikram Habib Allah",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/ikram-habib-allah-309543213?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTlAVR50MQIKIVxLjudAOeQ%3D%3D",
  },
  {
    name: "Gmail",
    username: "ikramhabiballah",
    icon: Icons.gmail,
    link: "mailto:ikramhabiballah77@gmail.com",
  },
  {
    name: "instagram ",
    username: "ikram_habib_allah",
    icon: Icons.instagram,
    link: "https://www.instagram.com/ikram_habib_allah/?next=%2F",
  },
  {
    name: "WhatsApp",
    username: "Contact on WhatsApp",
    icon: Icons.whatsapp,
    link: "https://wa.me/212620785160",
  },
]
