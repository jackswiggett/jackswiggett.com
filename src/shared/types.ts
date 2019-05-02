export interface IInternshipText {
  dateRange: string
  company: string
  role: string
  description: string
}

export interface IEducationText {
  school: string
  concentrations: string[]
  honors: string[]
}

export interface IProjectText {
  title: string
  shortDescription: string
  technologies: string[]
  links: Array<{
    title: string
    href: string
  }>
  bullets: string[]
}
