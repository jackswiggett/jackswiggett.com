import agricopterLogo from '../images/logos/agricopter.png';
import betternoteLogo from '../images/logos/betternote.png';
import canoeLogo from '../images/logos/canoe.png';
import elmLogo from '../images/logos/elm.png';
import limerickLandLogo from '../images/logos/limerick_land.png';
import lingoLibraryLogo from '../images/logos/lingo_library.png';
import pelicanLogo from '../images/logos/pelican.png';

export type Project = {
  id: string;
  name: string;
  logo: string;
  description: string;
  inProgress?: boolean;
  bullets: Array<String>;
  links: Array<{ href: string; title: string }>;
  technologies: Array<string>;
};

const projects: Array<Project> = [
  // TODO: add this once it is ready to be shared publicly
  // {
  //   id: 'lingo_library',
  //   name: 'Lingo Library',
  //   logo: lingoLibraryLogo,
  //   description: (
  //     <>
  //       An e-reader built for language learning. <a href="#">Try it out</a>.
  //     </>
  //   ),
  //   inProgress: true,
  // },
  {
    id: 'betternote',
    name: 'BetterNote',
    logo: betternoteLogo,
    description: 'A web app to evaluate alternative music notation systems',
    bullets: [
      "Built an application to test users' ability to read music notation and identify one-, two-, and three-note chords on a virtual piano keyboard",
      'Supports testing traditional western notation and Klavarskribo; modularized to allow for supporting additional notation systems in the future',
      'Records accuracy and speed as well as metadata for each test, which is stored in a searchable/filterable results database for comparison and analysis',
      'I also prepared a test plan and documents describing each notation system, ran tests of each system with ten participants, and wrote a research paper analyzing my results',
    ],
    links: [
      {
        href: 'https://github.com/jackswiggett/BetterNote',
        title: 'GitHub',
      },
      {
        href: 'pdf/betternote-report.pdf',
        title: 'Research Paper',
      },
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'MongoDB'],
  },
  {
    id: 'agricopter',
    name: 'Agricopter',
    logo: agricopterLogo,
    description:
      'An algorithm and web platform to facilitate automated mission planning for agricultural drones',
    bullets: [
      'Worked in French on a team of two under the supervision of a researcher at the Paris Institute of Digital Technology',
      'The linked GitHub repo implements a coverage path planning algorithm which efficiently finds a path for an autonomous drone to traverse all areas of a polygonal field defined by GPS coordinates, while avoiding any obstacles within the field',
      'We also built a web platform that interfaced with our algorithm, allowing users to define field coordinates using Google Maps, generate a coverage path, and send commands to a drone over a local network',
      'Systems like this one could be used to help drones more efficiently monitor crop health and administer fertilizer or pesticides',
    ],
    links: [
      {
        href: 'https://github.com/jkamalu/agricopter',
        title: 'GitHub',
      },
    ],
    technologies: ['Python', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'MongoDB'],
  },
  {
    id: 'pelican',
    name: 'Pelican',
    logo: pelicanLogo,
    description:
      'An iOS app prototype to help people who have recently moved to a new country',
    bullets: [
      'Built a high fidelity prototype for an app that gives newcomers to a country the chance to explore their new surroundings, make new friends, and push themselves out of their comfort zone',
      'As a team of three, we went through a rigorous, iterative process of needfinding, prototyping, and user testing/evaluation; I wrote 100% of the code for the final app prototype',
      'I also starred in our concept video ☺ (link above)',
    ],
    links: [
      {
        href: 'https://github.com/jackswiggett/pelican-prototype',
        title: 'GitHub',
      },
      {
        href: 'https://hci.stanford.edu/courses/cs147/2016/au/projects/LearningEducation/Pelican/',
        title: 'Website',
      },
      {
        href: 'https://www.youtube.com/watch?v=8Jzbz2pbqII',
        title: 'Concept Video',
      },
    ],
    technologies: ['Swift', 'iOS SDK', 'Xcode'],
  },
  {
    id: 'canoe',
    name: 'Canoe',
    logo: canoeLogo,
    description:
      'A React Native app to facilitate spontaneous and inexpensive travel',
    bullets: [
      "Canoe automatically finds inexpensive, upcoming round-trip flights to destinations based on users' price and duration preferences, and recommends new destinations based on how they've rated previous travel experiences",
      'I built Canoe with a team of four in 36 hours for TreeHacks 2017, where we won the "Best Use of Amadeus API" award accompanied by a $2000 prize',
      'I wrote a large majority of the React Native application, which included a list and map of upcoming trips, a screen with details and a photo for each destination, a screen to configure trip preferences, and an interface to rate past trips',
    ],
    links: [
      {
        href: 'https://github.com/jackswiggett/CanoeFrontend',
        title: 'GitHub',
      },
      {
        href: 'https://devpost.com/software/canoe',
        title: 'Devpost',
      },
    ],
    technologies: ['JavaScript', 'React Native', 'Node.js', 'Microsoft Azure'],
  },
  {
    id: 'beyond_javascript',
    name: 'Beyond JavaScript',
    logo: elmLogo,
    description:
      'A simple web app implemented in two functional languages, Elm and Reason',
    bullets: [
      'Implemented the same basic web application in two functional languages that compile to JavaScript, Elm and Reason, with the exact same UI and functionality in each implementation',
      'Took notes throughout the development process, and compiled a paper describing the characteristics, advantages, and disadvantages of each language',
    ],
    links: [
      {
        href: 'https://github.com/jackswiggett/functional-web-apps',
        title: 'GitHub',
      },
      {
        href: 'pdf/functional-web-apps-report.pdf',
        title: 'Research Paper',
      },
    ],
    technologies: ['Elm', 'Reason', 'ReasonReact', 'HTML', 'CSS'],
  },
  {
    id: 'limerick_land',
    name: 'Limerick Land',
    logo: limerickLandLogo,
    description:
      'A web platform for creating and sharing collaborative, crowdsourced poetry',
    bullets: [
      "Limerick Land allows users to collaboratively write limericks, one line at a time, building off each other's ideas, with built-in rhyme and syllable validation",
      'Limericks grow in a branching structure, so that each line can have multiple possible continuations, and users can explore many different endings to the same limerick',
      'I built and deployed Limerick Land with a team of three, and we attracted over 150 unique users to the site',
    ],
    links: [
      {
        href: 'https://github.com/jackswiggett/limerick-land',
        title: 'GitHub',
      },
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'MongoDB'],
  },
];

export default projects;
