import { IEducationText, IInternshipText, IProjectText } from './types'

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

export const InternshipsText: IInternshipText[] = [
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

export const EducationText: IEducationText = {
  concentrations: [
    `B.S. in Computer Science, 2018`,
    `Focus in Human-Computer Interaction`,
    `Minor in French`,
  ],
  honors: [
    `Terman Award for Scholastic Achievement in Engineering`,
    `President’s Award for Academic Excellence in the Freshman Year`,
    `Graduated with Distinction`,
    `Elected to Phi Beta Kappa`,
  ],
  school: `Stanford University`,
}

export const ProjectsText: IProjectText[] = [
  {
    bullets: [
      `Built an application to test users' ability to read music notation and identify one-, two-, and three-note chords on a virtual piano keyboard`,
      `Supports testing traditional western notation and Klavarskribo; modularized to allow for supporting additional notation systems in the future`,
      `Records accuracy and speed as well as metadata for each test, which is stored in a searchable/filterable results database for comparison and analysis`,
      `I also prepared a test plan and documents describing each notation system, ran tests of each system with ten participants, and wrote a research paper analyzing my results`,
    ],
    links: [
      {
        href: `https://github.com/jackswiggett/BetterNote`,
        title: `GitHub`,
      },
      {
        href: `pdf/betternote-report.pdf`,
        title: `Research Paper`,
      },
    ],
    shortDescription: `A web app to evaluate alternative music notation systems`,
    technologies: [`JavaScript`, `HTML`, `CSS`, `React`, `Node.js`, `MongoDB`],
    title: `BetterNote`,
  },
  {
    bullets: [
      `Worked on a team of two under the supervision of a researcher at ISEP in Paris`,
      `The linked GitHub repo implements a coverage path planning algorithm which efficiently finds a path for an autonomous drone to traverse all areas of a polygonal field defined by GPS coordinates, while avoiding any obstacles within the field`,
      `We also built a web platform that interfaced with our algorithm, allowing users to define field coordinates using Google Maps, generate a coverage path, and send commands to a drone over a local network`,
      `Systems like this one could be used to help drones more efficiently monitor crop health and administer fertilizer or pesticides`,
    ],
    links: [
      {
        href: `https://github.com/jkamalu/agricopter`,
        title: `GitHub`,
      },
    ],
    shortDescription: `An algorithm and web platform to facilitate automated mission planning for agricultural drones`,
    technologies: [`Python`, `JavaScript`, `HTML`, `CSS`, `Node.js`, `MongoDB`],
    title: `Agricopter`,
  },
  {
    bullets: [
      `Implemented the same basic web application in two functional languages that compile to JavaScript, Elm and Reason, with the exact same UI and functionality in each implementation`,
      `Took notes throughout the development process, and compiled a paper describing the characteristics, advantages, and disadvantages of each language`,
    ],
    links: [
      {
        href: `https://github.com/jackswiggett/functional-web-apps`,
        title: `GitHub`,
      },
      {
        href: `pdf/functional-web-apps-report.pdf`,
        title: `Research Paper`,
      },
    ],
    shortDescription: `A bare-bones web app implemented in Elm and Reason, along with a comparison of the two languages`,
    technologies: [`Elm`, `Reason`, `ReasonReact`, `HTML`, `CSS`],
    title: `Functional Web Apps`,
  },
  {
    bullets: [
      `Built a high fidelity prototype for an app that gives newcomers to a country the chance to explore their new surroundings, make new friends, and push themselves out of their comfort zone`,
      `As a team of three, we went through a rigorous, iterative process of needfinding, prototyping, and user testing/evaluation; I wrote 100% of the code for the final app prototype`,
      `I also starred in our concept video ☺ (link above)`,
    ],
    links: [
      {
        href: `https://github.com/jackswiggett/pelican-prototype`,
        title: `GitHub`,
      },
      {
        href: `https://hci.stanford.edu/courses/cs147/2016/au/projects/LearningEducation/Pelican/`,
        title: `Website`,
      },
      {
        href: `https://www.youtube.com/watch?v=8Jzbz2pbqII`,
        title: `Concept Video`,
      },
    ],
    shortDescription: `A native iOS app prototype to help people who have recently moved to a new country`,
    technologies: [`Swift`, `iOS SDK`, `Xcode`],
    title: `Pelican`,
  },
  {
    bullets: [
      `Canoe automatically finds inexpensive, upcoming round-trip flights to destinations based on users' price and duration preferences, and recommends new destinations based on how they've rated previous travel experiences`,
      `I built Canoe with a team of four in 36 hours for TreeHacks 2017, where we won the "Best Use of Amadeus API" award accompanied by a $2000 prize`,
      `I wrote a large majority of the React Native application, which included a list and map of upcoming trips, a screen with details and a photo for each destination, a screen to configure trip preferences, and an interface to rate past trips`,
    ],
    links: [
      {
        href: `https://github.com/jackswiggett/CanoeFrontend`,
        title: `GitHub`,
      },
      {
        href: `https://devpost.com/software/canoe`,
        title: `Devpost`,
      },
    ],
    shortDescription: `A React Native app to facilitate spontaneous and inexpensive travel`,
    technologies: [`JavaScript`, `React Native`, `Node.js`, `Microsoft Azure`],
    title: `Canoe`,
  },
  {
    bullets: [
      `Limerick Land allows users to collaboratively write limericks, one line at a time, building off each other's ideas, with built-in rhyme and syllable validation`,
      `Limericks grow in a branching structure, so that each line can have multiple possible continuations, and users can explore many different endings to the same limerick`,
      `I built and deployed Limerick Land with a team of three, and we attracted over 150 unique users to the site`,
    ],
    links: [
      {
        href: `https://github.com/jackswiggett/limerick-land`,
        title: `GitHub`,
      },
    ],
    shortDescription: `A web platform for creating and sharing collaborative, crowdsourced poetry`,
    technologies: [`JavaScript`, `HTML`, `CSS`, `React`, `Node.js`, `MongoDB`],
    title: `Limerick Land`,
  },
]
