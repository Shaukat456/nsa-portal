// Excom
import abdullahKhanImg from "../app/Excom/EXCOM/Abdullah-khan.jpg";
import abdullahSaleemImg from "../app/Excom/EXCOM/Abdullah-Saleem.jpg";
import afeefaLodhiImg from "../app/Excom/EXCOM/Afeefa-lodhi.jpg";
import dureShehwarImg from "../app/Excom/EXCOM/Dur-e-shehwar.jpg";
import manalMehtabImg from "../app/Excom/EXCOM/Manal-Mehtab.jpg";
import muhammadShaheerImg from "../app/Excom/EXCOM/Muhammad-Shaheer.jpg";
import saadHasanImg from "../app/Excom/EXCOM/Saad-Hasan.jpg";
import zofishanSaleemImg from "../app/Excom/EXCOM/Zofishan-Saleem.jpg";
import AffanKhanimg from "../app/Excom/EXCOM/Affan-khan.jpg";

export const excomMembers: TeamMember[] = [
  {
    id: "president",
    name: "Affan Khan",
    role: "President",
    image: AffanKhanimg.src,
    reports: ["tech-head", "marketing-head", "social-head", "design-head"],
  },
  {
    id: "vice-president",
    name: "Zofishan Saleem",
    role: "Vice President",
    image: zofishanSaleemImg.src,
    reports: ["tech-head", "marketing-head"],
  },
  {
    id: "general-secretary",
    name: "Muhammad Shaheer",
    role: "General Secretary",
    image: muhammadShaheerImg.src,
    reports: [],
  },
  {
    id: "deputy-general-secretary",
    name: "Abdullah Saleem",
    role: "Excom Projects",
    image: abdullahSaleemImg.src,
    reports: ["tech-head", "marketing-head"],
  },
  {
    id: "advisor",
    name: "Abdullah Khan",
    role: "Advisor",
    image: abdullahKhanImg.src,
    reports: ["tech-head", "marketing-head"],
  },
  {
    id: "excom-media",
    name: "Manaal Mehtab",
    role: "Excom Media",
    image: manalMehtabImg.src,
    reports: [],
  },
  {
    id: "secretary",
    name: "Afeefa Lodhi",
    role: "Deputy General Secretary",
    image: afeefaLodhiImg.src,
    reports: ["social-head", "design-head"],
  },
  {
    id: "strategic-thinker-and-planner",
    name: "Dur-e-Shehwar",
    role: "Strategic Thinker and Planner",
    image: dureShehwarImg.src,
    reports: [],
  },
  {
    id: "excom-resources",
    name: "Saad Hasan",
    role: "Excom Resources",
    image: saadHasanImg.src,
    reports: [],
  },
  // Add EXCOM Projects role if needed
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string | "";
  domain?: string;
  reports?: string[];
  description?: string;
}

export interface Domain {
  name: string;
  description: string;
  color: string;
}

export const domains: Record<string, Domain> = {
  IT: {
    name: "IT",
    description: "Software development and technical infrastructure",
    color: "blue",
  },
  Marketing: {
    name: "Marketing",
    description: "Brand strategy and market presence",
    color: "green",
  },
  // SocialMedia: {
  //   name: "Social Media",
  //   description: "Online presence and community engagement",
  //   color: "purple",
  // },
  Graphics: {
    name: "Graphics",
    description: "User experience and visual design",
    color: "pink",
  },
  News: {
    name: "News",
    description: "Content creation and dissemination of news updates",
    color: "orange",
  },
  Events: {
    name: "Events",
    description: "Planning and execution of corporate events and activities",
    color: "teal",
  },
  Public_Relations: {
    name: "Public Relations",
    description:
      "Managing communication between the organization and the public",
    color: "red",
  },
  HR: {
    name: "Human Resources",
    description: "Employee management, recruitment, and organizational culture",
    color: "brown",
  },
  Photography: {
    name: "Photography",
    description: "Capturing images for branding and documentation purposes",
    color: "lightblue",
  },
  Film_Making: {
    name: "Film Making",
    description: "Film production from concept to final cut",
    color: "yellow",
  },
  Creativity: {
    name: "Creativity",
    description: "Innovative thinking and idea generation across all domains",
    color: "violet",
  },
  Docs: {
    name: "Docs",
    description:
      "Documentation and record-keeping for all organizational activities",
    color: "cyan",
  },
  NKB: {
    name: "NKB",
    description: "Memes and Stuff",
    color: "indigo",
  },
  Promotions: {
    name: "Promotions",
    description: "Promotions and stuff",
    color: "lightgreen",
  },
};
import DurShehwarImg from "../app/Heads/Creativity_co_manager.jpg";
import ArmeenTahirImg from "../app/Heads/Creativity_head.jpg";
import MariamSaad from "../app/Heads/Creativity_manager.jpg";
import MalihaHassan from "../app/Heads/Docs_co_manager.jpg";
import FahdBinFaridImg from "../app/Heads/Docs_head.jpg";
import ZainabAsimImg from "../app/Heads/Docs_manager.jpg";
import AdnanTahirImg from "../app/Heads/EM_co_head.jpg";
import MawraKhanImg from "../app/Heads/EM_Co_manager.jpg";
import YousufZainImg from "../app/Heads/EM__head.jpg";
import ShifaSiddiquiImg from "../app/Heads/EM_Manager2.jpg";
import HamzaAnwarImg from "../app/Heads/Film_head.jpg";
import HamzaAliImg from "../app/Heads/Film_manager.jpg";
import MustafaAsadImg from "../app/Heads/Graphics_manager.jpg";
import MaryamMasoodImg from "../app/Heads/HR_co_manager.jpg";
import MuhammadReeyanImg from "../app/Heads/HR_Manager.jpg";
import ShaukatSohailImg from "../app/Heads/it_Head.jpg";
import FizzaRasoolImg from "../app/Heads/it_Manager.jpg";
import UsmanZafarImg from "../app/Heads/Marketing_Head.jpg";
import SabihuddinSiddiquiImg from "../app/Heads/Marketing_manager.jpg";
import RamalMallickImg from "../app/Heads/News_head.jpg";
import MuhammadZainImg from "../app/Heads/News_manager.jpg";
import AftabSolangiImg from "../app/Heads/NKB_head.jpg";
import ZainabDawoodImg from "../app/Heads/NKB_Manager.jpg";
import SumbhulShamsImg from "../app/Heads/photo_co_manager.jpg";
import MuhammadZohaibImg from "../app/Heads/Photo_Co-manager.jpg";
import MubashirHassanImg from "../app/Heads/Photo_manager.jpg";
import AimanNaqviImg from "../app/Heads/Photography_head.jpg";
import AmnaKhanImg from "../app/Heads/PR_head.jpg";
import JawadIqbalImg from "../app/Heads/PR_manager.jpg";
import ChandiniFarooquiImg from "../app/Heads/Promo_Co_manager.jpg";
import GoharAliKhanImg from "../app/Heads/Promo_head.jpg";
import MahnoorKanwal from "../app/Heads/Promotions_manager.jpg";
import WarishaBatoolImg from "../app/Heads/PR_co_manager.jpg";

export const heads: TeamMember[] = [
  {
    id: "Durr-e-Shehwar",
    name: "Durr-e-Shehwar",
    role: "Co-Manager Creativity",
    domain: "Creativity",
    image: DurShehwarImg.src,
    reports: ["dev-manager", "infra-manager"],
    description: "Durr-e-Shehwar is a creative thinker and a visionary leader.",
  },
  {
    id: "Armeen Tahir",
    name: "Armeen Tahir",
    role: "Head Creativity",
    domain: "Creativity",
    image: ArmeenTahirImg.src,
    reports: ["brand-manager", "market-research-manager"],
  },
  {
    id: "Mariam Saad",
    name: "Mariam Saad",
    role: "Manager Creativity",
    domain: "Creativity",
    image: MariamSaad.src,
    reports: ["content-manager", "community-manager"],
  },
  {
    id: "Maliha Hassan",
    name: "Maliha Hassan",
    role: "Co-Manager Docs",
    domain: "Docs",
    image: MalihaHassan.src,
    reports: ["ui-manager", "graphics-manager"],
  },
  {
    id: "Fahd Bin Farid",
    name: "Fahd Bin Farid",
    role: "Head Docs",
    domain: "Docs",
    image: FahdBinFaridImg.src,
    reports: ["brand-manager", "market-research-manager"],
  },
  {
    id: "Zainab Asim",
    name: "Zainab Asim",
    role: "Manager Docs",
    domain: "Docs",
    image: ZainabAsimImg.src,
    reports: ["content-manager", "community-manager"],
  },
  {
    id: "Adnan Tahir",
    name: "Adnan Tahir",
    role: "Co-Head EM",
    domain: "Events",
    image: AdnanTahirImg.src,
    reports: ["dev-manager", "infra-manager"],
  },
  {
    id: "Mawra Khan",
    name: "Mawra Khan",
    role: "Co manager",
    domain: "Events",
    image: MawraKhanImg.src,
    reports: ["brand-manager", "market-research-manager"],
  },
  {
    id: "Yousuf Zain",
    name: "Yousuf Zain",
    role: "Head EM",
    domain: "Events",
    image: YousufZainImg.src,
    reports: ["content-manager", "community-manager"],
  },
  {
    id: "Shifa Siddiqui",
    name: "Shifa Siddiqui",
    role: "Manager EM",
    domain: "Events",
    image: ShifaSiddiquiImg.src,
    reports: ["ui-manager", "graphics-manager"],
  },
  {
    id: "Hamza Anwar",
    name: "Hamza Anwar",
    role: "Head Film-Making",
    domain: "Film_Making",
    image: HamzaAnwarImg.src,
    reports: ["brand-manager", "market-research-manager"],
  },
  {
    id: "Hamza Ali",
    name: "Hamza Ali",
    role: "Manager Film-Making",
    domain: "Film_Making",
    image: HamzaAliImg.src,
    reports: ["content-manager", "community-manager"],
  },
  {
    id: "Mustafa Asad",
    name: "Mustafa Asad",
    role: "Manager Graphic",
    domain: "Graphics",
    image: MustafaAsadImg.src,
    reports: ["dev-manager", "infra-manager"],
  },
  {
    id: "Maryam Masood",
    name: "Maryam Masood",
    role: "Co-Manager HR",
    domain: "HR",
    image: MaryamMasoodImg.src,
    reports: ["brand-manager", "market-research-manager"],
  },

  {
    id: "Muhammad Reeyan",
    name: "Muhammad Reeyan",
    role: "Manager HR",
    domain: "HR",
    image: MuhammadReeyanImg.src,
    reports: ["brand-manager", "market-research-manager"],
  },
  {
    id: "Shaukat Sohail",
    name: "Shaukat Sohail",
    role: "Head IT",
    domain: "IT",
    image: ShaukatSohailImg.src,
    reports: ["content-manager", "community-manager"],
  },
  {
    id: "Fizza Rasool",
    name: "Fizza Rasool",
    role: "Manager IT",
    domain: "IT",
    image: FizzaRasoolImg.src,
    reports: ["ui-manager", "graphics-manager"],
  },
  {
    id: "Usman Zafar",
    name: "Usman Zafar",
    role: "Head Marketing",
    domain: "Marketing",
    image: UsmanZafarImg.src,
    reports: ["content-manager", "community-manager"],
  },
  {
    id: "Sabihuddin Siddiqui",
    name: "Sabihuddin Siddiqui",
    role: "Manager Marketing",
    domain: "Marketing",
    image: SabihuddinSiddiquiImg.src,
    reports: ["dev-manager", "infra-manager"],
  },
  {
    id: "Ramal Mallick",
    name: "Ramal Mallick",
    role: "Head News",
    domain: "News",
    image: RamalMallickImg.src,
    reports: ["brand-manager", "market-research-manager"],
  },
  {
    id: "Muhammad Zain",
    name: "Muhammad Zain",
    role: "Manager News",
    domain: "News",
    image: MuhammadZainImg.src,
    reports: ["content-manager", "community-manager"],
  },
  {
    id: "Aftab Solangi",
    name: "Aftab Solangi",
    role: "Head NKB",
    domain: "NKB",
    image: AftabSolangiImg.src,
    reports: ["ui-manager", "graphics-manager"],
  },
  {
    id: "Zainab Dawood",
    name: "Zainab Dawood",
    role: "Manager NKB",
    domain: "NKB",
    image: ZainabDawoodImg.src,
    reports: ["dev-manager", "infra-manager"],
  },
  {
    id: "Sumbul Shams",
    name: "Sumbul Shams",
    role: "Co-head Photography",
    domain: "Photography",
    image: SumbhulShamsImg.src,
    reports: ["content-manager", "community-manager"],
  },
  {
    id: "Muhammad Zohaib",
    name: "Muhammad Zohaib",
    role: "Co-Manager Photography",
    domain: "Photography",
    image: MuhammadZohaibImg.src,
    reports: ["ui-manager", "graphics-manager"],
  },
  {
    id: "Mubashir Hassan",
    name: "Mubashir Hassan",
    role: "Manager Photography",
    domain: "Photography",
    image: MubashirHassanImg.src,
    reports: ["dev-manager", "infra-manager"],
  },
  {
    id: "Aiman Naqvi",
    name: "Aiman Naqvi",
    role: "Head Photography",
    domain: "Photography",
    image: AimanNaqviImg.src,
    reports: ["brand-manager", "market-research-manager"],
  },
  {
    id: "Warisha Batool",
    name: "Warisha Batool",
    role: "Co-Manager Public Relations",
    domain: "Public_Relations",
    image: WarishaBatoolImg.src,
    reports: ["content-manager", "community-manager"],
  },
  {
    id: "Amna Khan",
    name: "Amna Khan",
    role: "Head Public Relations",
    domain: "Public_Relations",
    image: AmnaKhanImg.src,
    reports: ["ui-manager", "graphics-manager"],
  },
  {
    id: "Jawad Iqbal",
    name: "Jawad Iqbal",
    role: "Manager Public Relations",
    domain: "Public_Relations",
    image: JawadIqbalImg.src,
    reports: ["dev-manager", "infra-manager"],
  },
  {
    id: "Chandini Farooqui",
    name: "Chandini Farooqui",
    role: "Co-Manager Promotions",
    domain: "Promotions",
    image: ChandiniFarooquiImg.src,
    reports: ["brand-manager", "market-research-manager"],
  },
  {
    id: "Gohar Ali Khan",
    name: "Gohar Ali Khan",
    role: "Head Promotions",
    domain: "Promotions",
    image: GoharAliKhanImg.src,
    reports: ["content-manager", "community-manager"],
  },
  {
    id: "Mahnoor Kanwal",
    name: "Mahnoor Kanwal",
    role: "Manager Promotions",
    domain: "Promotions",
    image: MahnoorKanwal.src,
    reports: ["ui-manager", "graphics-manager"],
  },
];

export const managers: TeamMember[] = [
  // IT Domain
  {
    id: "dev-manager",
    name: "Alex Thompson",
    role: "Development Manager",
    domain: "IT",
    image: "",
  },
  {
    id: "infra-manager",
    name: "Daniel Lee",
    role: "Infrastructure Manager",
    domain: "IT",
    image: "",
  },
  // Marketing Domain
  {
    id: "brand-manager",
    name: "Sophie Chen",
    role: "Brand Manager",
    domain: "Marketing",
    image: "",
  },
  {
    id: "market-research-manager",
    name: "Marcus Johnson",
    role: "Market Research Manager",
    domain: "Marketing",
    image: "",
  },
  // Social Media Domain
  {
    id: "content-manager",
    name: "Priya Patel",
    role: "Content Manager",
    domain: "SocialMedia",
    image: "",
  },
  {
    id: "community-manager",
    name: "Tom Wilson",
    role: "Community Manager",
    domain: "SocialMedia",
    image: "",
  },
  // Design Domain
  {
    id: "ui-manager",
    name: "Nina Rodriguez",
    role: "UI/UX Manager",
    domain: "Design",
    image: "",
  },
  {
    id: "graphics-manager",
    name: "Chris Park",
    role: "Graphics Manager",
    domain: "Design",
    image: "",
  },
];
