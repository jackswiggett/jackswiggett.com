import { IInternship } from './types'

export const LandingText = {
  subtitle: `Web & Mobile Engineer`,
  title: `Jack Swiggett`,
}

export const ArivaleJobText = {
  dateRange: `January - April 2019`,
  paragraphs: [
    `At Arivale, we combined science, technology, and one-on-one coaching to help people stay healthy and live life to the fullest.`,
    `I owned frontend development on a new, forward-thinking product, designed to offer the same exceptional efficacy as our flagship program while dramatically reducing cost and customer friction.`,
    `I also proposed and implemented extensive improvements to our codebase and mobile app architecture, leveling up its performance, stability, and user experience.`,
  ],
  title: `Software Engineer at Arivale`,
}

export const KaimoJobText = {
  dateRange: `May - December 2018`,
  paragraphs: [
    `Kaimo is a platform to help people explore and implement healthy lifestyle changes, track their efficacy, and develop a highly personalized approach to health and wellness.`,
    `As the sole engineer, I built and deployed a scalable, full stack application from the ground up, with frontends for browser, iOS and Android. I also designed and tested extensive UI/UX mockups and worked closely with end-users.`,
    `Ultimately, I decided that Kaimo’s vision would be best realized in a larger organization with deeper medical expertise, which is why I decided to join Arivale.`,
  ],
  title: `Technical Co-Founder at Kaimo`,
}

export const InternshipsText: IInternship[] = [
  {
    company: `Actively Learn`,
    dateRange: `June - September 2017`,
    description: `Worked on a small engineering team writing frontend and backend code that quickly went into production. Revamped key parts of the codebase and implemented new features using React, Backbone, Node, and other technologies.`,
    role: `Software Engineering Intern`,
  },
  {
    company: `INEVAL Environnement`,
    dateRange: `April - July 2016`,
    description: `Researched, designed and implemented a SCADA system for remote automation of an anaerobic digestion plant, used to produce energy from agricultural waste.`,
    role: `Software Engineering Intern`,
  },
  {
    company: `ISEP`,
    dateRange: `January - June 2016`,
    description: `Designed and implemented a coverage path planning algorithm and web platform to facilitate automated mission planning for autonomous agricultural drones.`,
    role: `Computer Science Research Intern`,
  },
  {
    company: `Synapse Product Development`,
    dateRange: `June - September 2015`,
    description: `Built data processing and test automation tools for cutting-edge consumer products. Helped build a tool to jumpstart embedded software development.`,
    role: `Software Engineering Intern`,
  },
]
