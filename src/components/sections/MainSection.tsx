import React from 'react';
import stripes from '../../images/stripes.svg';
import ContactCard from '../cards/ContactCard';
import EducationCard from '../cards/EducationCard';
import HobbiesCard from '../cards/HobbiesCard';
import ProjectsCard from '../cards/ProjectsCard';
import JobsCard from '../cards/JobsCard';
import * as styles from './MainSection.module.scss';

/** Main section of the site with all the cards and content */
const MainSection: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.stripesContainer}>
        <img src={stripes} className={styles.stripes} />
      </div>
      <div className={styles.content}>
        <div className={styles.column}>
          <JobsCard />
          <EducationCard />
        </div>
        <div className={styles.column}>
          <ProjectsCard />
          <HobbiesCard />
          <ContactCard />
        </div>
      </div>
      <p className={styles.footer}>
        &copy; {new Date().getFullYear()} Jack Swiggett. Check out the source
        code for this website on{' '}
        <a
          href="https://github.com/jackswiggett/jackswiggett.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
};

export default MainSection;
