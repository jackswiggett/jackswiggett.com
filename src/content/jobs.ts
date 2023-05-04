import activelyLearnLogo from '../images/logos/actively_learn.png';
import arivaleLogo from '../images/logos/arivale.png';
import breakoutMentorsLogo from '../images/logos/breakout_mentors.jpg';
import harmonyCloudLogo from '../images/logos/harmony_cloud.png';
import inevalLogo from '../images/logos/ineval.png';
import kaimoLogo from '../images/logos/kaimo.png';
import loftiumLogo from '../images/logos/loftium.png';
import synapseLogo from '../images/logos/synapse.jpg';

export type Job = {
  id: string;
  logo: string;
  name: string;
  location: string;
  roles: Array<{
    title: string;
    start: string;
    end: string;
  }>;
  bullets: Array<string>;
};

const jobs: Array<Job> = [
  {
    id: 'loftium',
    logo: loftiumLogo,
    name: 'Loftium',
    location: 'Seattle, WA',
    roles: [
      { title: 'Head of Engineering', start: 'May 2021', end: 'Dec 2022' },
      { title: 'Engineering Team Lead', start: 'Oct 2020', end: 'May 2021' },
      { title: 'Software Engineer', start: 'Aug 2019', end: 'Oct 2020' },
    ],
    bullets: [
      'Led the growth of the engineering team from 2 to 6 engineers, overseeing the successful launch of a new mobile app, integrations with Airbnb and Vrbo, a brand new Host to Own product, and much more',
      'Contributed extensively to all parts of our React/Rails codebase, owning critical features like our short term rental pricing strategy and payment handling',
      'Ran sprint plannings, conducted 1-on-1s with direct reports, and introduced tech talks, pair programming, and other initiatives to help the team learn and grow',
    ],
  },
  {
    id: 'harmony_cloud',
    logo: harmonyCloudLogo,
    name: 'Harmony Cloud',
    location: 'Seattle, WA',
    roles: [
      {
        title: 'Software Engineering Contractor',
        start: 'Apr',
        end: 'Jul 2019',
      },
    ],
    bullets: [
      'Rebuilt the popular Harmony Cloud app in React Native to run cross-platform, employing an Objective-C/Java bridge to access shared algorithms written in C++',
      'Designed high-fidelity Figma mockups for every feature of the revamped app based on requirements from the founders',
    ],
  },
  {
    id: 'arivale',
    logo: arivaleLogo,
    name: 'Arivale',
    location: 'Seattle, WA',
    roles: [{ title: 'Software Engineer', start: 'Jan', end: 'Apr 2019' }],
    bullets: [
      'Spearheaded numerous improvements to our React Native app architecture, leveling up performance, stability, and user experience',
      'Owned frontend development of a new app for rapidly delivering customized health insights at low cost',
    ],
  },
  {
    id: 'kaimo',
    logo: kaimoLogo,
    name: 'Kaimo',
    location: 'Stanford, CA; Seattle WA',
    roles: [{ title: 'Co-Founder', start: 'Oct 2017', end: 'Dec 2018' }],
    bullets: [
      'Built and deployed a scalable web application from the ground up using Node.js, React, React Native, and MySQL',
      'Designed and tested extensive UI mockups and prototypes, and shipped frontends for browser, iOS and Android',
    ],
  },
  {
    id: 'actively_learn',
    logo: activelyLearnLogo,
    name: 'Actively Learn',
    location: 'Seattle, WA',
    roles: [
      {
        title: 'Software Engineering Intern',
        start: 'Jun',
        end: 'Sep 2017',
      },
    ],
    bullets: [
      'Worked on a small engineering team writing frontend and backend code that quickly went into production',
      'Revamped key parts of the codebase and implemented new features using React, Backbone, Node.js, MySQL, and other technologies',
    ],
  },
  {
    id: 'ineval',
    logo: inevalLogo,
    name: 'INEVAL',
    location: 'Paris, France',
    roles: [
      {
        title: 'Software Engineering Intern',
        start: 'Apr',
        end: 'Jul 2016',
      },
    ],
    bullets: [
      'Researched, designed and implemented a SCADA system for remote monitoring and automation of an anaerobic digestion plant, used to produce energy and fertilizer from agricultural waste',
      'Work conducted entirely in French',
    ],
  },
  {
    id: 'synapse',
    logo: synapseLogo,
    name: 'Synapse',
    location: 'Seattle, WA',
    roles: [
      {
        title: 'Software Engineering Intern',
        start: 'Jun',
        end: 'Sep 2015',
      },
    ],
    bullets: [
      'Wrote software used by Nike for data processing/graphing and automated unit testing of a new product',
      'Worked with two other engineers to design and build a tool to jumpstart development on embedded software projects',
      'Implemented Bluetooth Smart services using the nRF52 SDK',
      'Worked in C, C++, Python, and VBA',
    ],
  },
  {
    id: 'breakout_mentors',
    logo: breakoutMentorsLogo,
    name: 'Breakout Mentors',
    location: 'Stanford, CA',
    roles: [
      {
        title: 'Computer Science Mentor',
        start: 'Jan',
        end: 'Jun 2015',
      },
    ],
    bullets: [
      'Taught students ages 9-13 weekly, one-on-one, self-guided lessons in Java and Scratch, tailored to their individual interests and needs',
    ],
  },
];

export default jobs;
