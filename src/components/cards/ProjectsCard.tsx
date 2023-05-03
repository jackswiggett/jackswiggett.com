import React, { useState } from 'react';
import projects, { Project as ProjectType } from '../../content/projects';
import Card from '../Card';
import Project from '../Project';
import Accordion from '../Accordion';
import * as styles from './ProjectsCard.module.scss';

/** Card with information about projects I have done outside work */
const ProjectsCard: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  const [scrollToId, setScrollToId] = useState<string>();

  const renderProject = ({
    id,
    logo,
    name,
    description,
    inProgress,
  }: ProjectType) => (
    <Project
      key={id}
      logo={logo}
      name={name}
      description={description}
      inProgress={inProgress}
      onClickInfo={() => {
        setFlipped(true);
        setScrollToId(`projects-card-${id}`);
      }}
    />
  );

  return (
    <Card
      title="Projects"
      flipped={flipped}
      flippedChildren={
        <div className={styles.flippedContent}>
          {projects.map(
            ({ id, name, description, bullets, links, technologies }) => (
              <div key={id}>
                <h3 id={`projects-card-${id}`}>{name}</h3>
                <p>{description}</p>
                <p className={styles.technologies}>{technologies.join(', ')}</p>
                <p>
                  {links.map(({ href, title }, index) => (
                    <a key={index} href={href}>
                      {title}
                    </a>
                  ))}
                </p>
                <ul>
                  {bullets.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      }
      scrollToId={scrollToId}
      unflip={() => setFlipped(false)}
    >
      <div className={styles.content}>
        {projects.slice(0, 4).map(renderProject)}
        <Accordion>{projects.slice(4).map(renderProject)}</Accordion>
      </div>
    </Card>
  );
};

export default ProjectsCard;
