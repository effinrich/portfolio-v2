export type NavItem =
  | "home"
  | "work"
  | "projects"
  | "stack"
  | "contact"
  | "insights"
  | "services"
  | "testimonials"
  | "resources"
  | "case-studies"
  | "faq"
  | "resume"

export type NavLink = {
  label: string
  href: string
  item: NavItem
}

export const PRIMARY_NAV: NavLink[] = [
  { label: "Work", href: "/work", item: "work" },
  { label: "Projects", href: "/projects", item: "projects" },
  { label: "Stack", href: "/resources", item: "stack" },
  { label: "Contact", href: "/contact", item: "contact" },
]

export const SECONDARY_NAV: NavLink[] = [
  { label: "Insights", href: "/insights", item: "insights" },
  { label: "Services", href: "/services", item: "services" },
  { label: "Case Studies", href: "/case-studies", item: "case-studies" },
  { label: "Testimonials", href: "/testimonials", item: "testimonials" },
  { label: "FAQ", href: "/faq", item: "faq" },
  { label: "Resume", href: "/resume", item: "resume" },
  { label: "Site Map", href: "/site-map", item: "home" },
]
