import {
  AlertTriangle,
  ArrowRight,
  BookMarked,
  Building,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  File,
  FileText,
  Gamepad2,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Menu,
  MessageCircle,
  Moon,
  MoreVertical,
  Music,
  Palette,
  Phone,
  Pizza,
  Plus,
  Scroll,
  Settings,
  Sparkles,
  SunMedium,
  Terminal,
  Trash,
  User,
  X,
  Zap,
} from "lucide-react";
import { AiFillStar } from "react-icons/ai";
import { BiLaugh, BiSolidUser } from "react-icons/bi";
import { BsInfoCircle, BsQuestionCircle } from "react-icons/bs";
import {
  HiBriefcase,
  HiOutlineExternalLink,
  HiOutlineLink,
} from "react-icons/hi";
import { IoIosGitBranch } from "react-icons/io";
import {
  SiAmazonwebservices,
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGmail,
  SiGraphql,
  SiHtml5,
  SiInstagram,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiWhatsapp,
  SiX,
} from "react-icons/si";

export const Icons = {
  contact: Phone,
  gitRepoIcon: BookMarked,
  gitOrgBuilding: Building,
  gitBranch: IoIosGitBranch,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  menu: Menu,
  chevronDown: ChevronDown,
  laughEmoji: BiLaugh,
  check: Check,
  infoMark: BsInfoCircle,
  questionMark: BsQuestionCircle,
  link: HiOutlineLink,
  externalLink: HiOutlineExternalLink,
  star: AiFillStar,
  amazonaws: SiAmazonwebservices,
  angular: SiAngular,
  bootstrap: SiBootstrap,
  css3: SiCss3,
  express: SiExpress,
  graphql: SiGraphql,
  html5: SiHtml5,
  javascript: SiJavascript,
  mongodb: SiMongodb,
  mui: SiMui,
  mysql: SiMysql,
  nestjs: SiNestjs,
  netlify: SiNetlify,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  react: SiReact,
  redux: SiRedux,
  socketio: SiSocketdotio,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  gmail: SiGmail,
  twitter: SiX,
  linkedin: SiLinkedin,
  instagram: SiInstagram,
  whatsapp: SiWhatsapp,
  userFill: BiSolidUser,
  work: HiBriefcase,
  retro: Gamepad2,
  cyberpunk: Terminal,
  paper: Scroll,
  aurora: Sparkles,
  synthwave: Music,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  gitHubColored: ({ ...props }: LucideProps) => (
    <svg
      width="496"
      height="512"
      viewBox="0 0 496 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M248 8C111 8 0 119 0 256C0 376 71.5 473.5 173.5 499.5C185.5 501.5 190.5 494.5 190.5 488.5C190.5 482.5 190.5 462.5 190.5 442.5C120.5 457.5 105.5 412.5 105.5 412.5C94.5 385.5 78.5 377.5 78.5 377.5C56.5 362.5 79.5 362.5 79.5 362.5C103.5 364.5 115.5 388.5 115.5 388.5C136.5 425.5 172.5 415.5 184.5 410.5C186.5 395.5 192.5 385.5 198.5 379.5C139.5 372.5 78.5 350.5 78.5 259.5C78.5 233.5 87.5 211.5 103.5 193.5C100.5 186.5 92.5 158.5 105.5 124.5C124.5 117.5 172.5 149.5 172.5 149.5C191.5 144.5 211.5 142.5 231.5 142.5C251.5 142.5 271.5 144.5 290.5 149.5C290.5 149.5 338.5 117.5 357.5 124.5C370.5 158.5 362.5 186.5 359.5 193.5C375.5 211.5 384.5 233.5 384.5 259.5C384.5 350.5 323.5 372.5 264.5 379.5C271.5 386.5 278.5 400.5 278.5 423.5C278.5 456.5 278.5 482.5 278.5 488.5C278.5 494.5 283.5 501.5 295.5 499.5C397.5 473.5 469 376 469 256C469 119 386 8 248 8Z"
        fill="url(#paint0_linear_1_2)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_2"
          x1="0"
          y1="0"
          x2="496"
          y2="512"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC800" />
          <stop offset="1" stop-color="#FF8A00" />
        </linearGradient>
      </defs>
    </svg>
  ),
  linkedinColored: ({ ...props }: LucideProps) => (
    <svg
      width="1024px"
      height="1024px"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="512" cy="512" r="512" style={{ fill: "#0a66c2" }} />
      <path
        d="M693.1 693.2h-76v-119c0-28.4-.6-64.9-39.6-64.9-39.6 0-45.7 30.9-45.7 62.8v121.1h-76V448.4h73v33.4h1c10.2-19.2 35-39.5 72-39.5 77 0 91.2 50.7 91.2 116.6l.1 134.3zm-323-278.3c-24.5 0-44.1-19.8-44.1-44.1s19.7-44.1 44.1-44.1c24.4 0 44.1 19.8 44.1 44.1s-19.8 44.1-44.1-44.1zm38.1 278.3H332V448.4h76.2v244.8zM731.1 256H293.9c-20.9 0-37.9 16.5-37.9 37v439c0 20.4 16.9 37 37.9 37H731c20.9 0 38-16.5 38-37V293c0-20.5-17.1-37-37.9-37z"
        style={{ fill: "#fff" }}
      />
    </svg>
  ),
  gmailColored: ({ ...props }: LucideProps) => (
    <svg
      width="1024px"
      height="1024px"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#4285F4"
        d="M100.3 221.1c0-23.2 18.9-42.1 42.1-42.1h739c23.2 0 42.1 18.9 42.1 42.1v581.8c0 23.2-18.9 42.1-42.1 42.1h-739c-23.2 0-42.1-18.9-42.1-42.1V221.1z"
      />
      <path
        fill="#FFFFFF"
        d="M288.6 488.3l-146.5-147c-5.1-5.1-13.4-5.1-18.5 0s-5.1 13.4 0 18.5l146.5 147c5.1 5.1 13.4 5.1 18.5 0s5.1-13.4 0-18.5z"
      />
      <path
        fill="#FFFFFF"
        d="M880.8 341.3l-146.5 147c-5.1 5.1-13.4 5.1-18.5 0s-5.1-13.4 0-18.5l146.5-147c5.1-5.1 13.4-5.1 18.5 0s5.1 13.4 0 18.5z"
      />
      <path
        fill="#EA4335"
        d="M512 488.3L288.6 264.9c-5.1-5.1-13.4-5.1-18.5 0s-5.1 13.4 0 18.5L512 525.3l241.9-241.9c5.1-5.1 5.1-13.4 0-18.5s-13.4-5.1-18.5 0L512 488.3z"
      />
      <path
        fill="#34A853"
        d="M288.6 658.7l-146.5 147c-5.1 5.1-5.1 13.4 0 18.5s13.4 5.1 18.5 0l146.5-147c5.1-5.1 5.1-13.4 0-18.5s-13.4-5.1-18.5 0z"
      />
      <path
        fill="#FBBC05"
        d="M735.1 658.7c-5.1-5.1-13.4-5.1-18.5 0s-5.1 13.4 0 18.5l146.5 147c5.1 5.1 13.4 5.1 18.5 0s5.1-13.4 0-18.5l-146.5-147z"
      />
    </svg>
  ),
  whatsappColored: ({ ...props }: LucideProps) => (
    <svg
      width="2500"
      height="2500"
      viewBox="0 0 2500 2500"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1250,0C559.6,0,0,559.6,0,1250c0,218.6,56.5,424.3,155.1,605L21.3,2500l663.6-130.6c174.4,93.2,372.5,146.4,582.4,146.4c690.4,0,1250-559.6,1250-1250S1940.4,0,1250,0z"
        fill="#FFFFFF"
      />
      <path
        d="M1250,2294.6c-187.8,0-365.1-50.6-519.8-140.7L712,2143.1L303.8,2219l85.2-392.2l-10.4-18.9C304.8,1663,260,1461.3,260,1250C260,695.5,704.7,245.2,1250,245.2c264.4,0,513,103,700,290c187,187,290,435.6,290,700C2240,1780.3,1795.3,2225,1250,2294.6z"
        fill="#25D366"
      />
      <path
        d="M1665.4,1479.2c-22.3-11.2-132.3-65.3-152.8-72.7c-20.5-7.4-35.4-11.2-50.3,11.2c-14.9,22.3-57.7,72.7-70.7,87.6c-13,14.9-26,16.8-48.4,5.6c-22.3-11.2-94.4-34.8-179.8-111c-66.7-59.5-111.7-133-124.7-155.4c-13-22.3-1.4-34.4,9.7-45.6c10.1-10.1,22.3-26,33.5-39.1c11.2-13,14.9-22.3,22.3-37.2c7.4-14.9,3.7-27.9-1.9-39.1c-5.6-11.2-50.3-121.1-68.9-165.8c-18.1-43.6-36.5-37.7-50.3-38.4c-13-0.7-27.9-0.9-42.8-0.9c-14.9,0-39.1,5.6-59.5,27.9c-20.5,22.3-78.1,76.3-78.1,186.2c0,109.9,80,216,91.1,231c11.2,14.9,157.4,240.2,381.3,336.9c53.3,23,94.9,36.7,127.4,47c53.2,16.9,101.6,14.5,140.2,8.8c42.8-6.3,132.3-54,151-106.1c18.6-52.1,18.6-96.8,13-106.1C1704.5,1497.8,1687.7,1490.4,1665.4,1479.2z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  instagramColored: ({ ...props }: LucideProps) => (
    <svg
      width="2500"
      height="2500"
      viewBox="0 0 2500 2500"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <radialGradient
        id="rg1"
        cx="493.5"
        cy="2444.6"
        fx="493.5"
        fy="2444.6"
        r="2819.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#f09433" offset="0" />
        <stop stop-color="#e6683c" offset="0.25" />
        <stop stop-color="#dc2743" offset="0.5" />
        <stop stop-color="#cc2366" offset="0.75" />
        <stop stop-color="#bc1888" offset="1" />
      </radialGradient>
      <path
        fill="url(#rg1)"
        d="M1250,0C559.6,0,0,559.6,0,1250s559.6,1250,1250,1250s1250-559.6,1250-1250S1940.4,0,1250,0z"
      />
      <path
        fill="#FFFFFF"
        d="M1612.9,625h-725.8c-266.1,0-482.1,216-482.1,482.1v725.8c0,266.1,216,482.1,482.1,482.1h725.8c266.1,0,482.1-216,482.1-482.1v-725.8C2095,841,1879,625,1612.9,625z M1933.7,1832.9c0,177.1-143.7,320.8-320.8,320.8h-725.8c-177.1,0-320.8-143.7-320.8-320.8v-725.8c0-177.1,143.7-320.8,320.8-320.8h725.8c177.1,0,320.8,143.7,320.8,320.8V1832.9z"
      />
      <path
        fill="#FFFFFF"
        d="M1250,967.7c-155.9,0-282.3,126.4-282.3,282.3S1094.1,1532.3,1250,1532.3s282.3-126.4,282.3-282.3S1405.9,967.7,1250,967.7z M1250,1371c-66.8,0-121-54.2-121-121s54.2-121,121-121s121,54.2,121,121S1316.8,1371,1250,1371z"
      />
      <path
        fill="#FFFFFF"
        d="M1661.3,778.2c-29.7,0-53.8,24.1-53.8,53.8s24.1,53.8,53.8,53.8c29.7,0,53.8-24.1,53.8-53.8S1691,778.2,1661.3,778.2z"
      />
    </svg>
  ),
  successAnimated: ({ ...props }: LucideProps) => (
    <div className="svg-container">
      <svg
        className="ft-green-tick"
        xmlns="http://www.w3.org/2000/svg"
        height="5rem"
        width="5rem"
        viewBox="0 0 48 48"
        aria-hidden="true"
        {...props}
      >
        <circle className="circle" cx="24" cy="24" r="22" />
        <path
          className="tick"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M14 27l5.917 4.917L34 17"
        />
      </svg>
    </div>
  ),

};
