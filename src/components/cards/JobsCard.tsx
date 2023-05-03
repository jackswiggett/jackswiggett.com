import React, { useState } from 'react';
import jobs, { Job as JobType } from '../../content/jobs';
import Card from '../Card';
import * as styles from './JobsCard.module.scss';
import Job from '../Job';
import Accordion from '../Accordion';

/** Card with information about my employment history */
const JobsCard: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  const [scrollToId, setScrollToId] = useState<string>();

  const renderJob = ({ id, logo, name, roles }: JobType) => (
    <Job
      key={id}
      logo={logo}
      name={name}
      roles={roles}
      onClickInfo={() => {
        setFlipped(true);
        setScrollToId(`jobs-card-${id}`);
      }}
    />
  );

  return (
    <Card
      title="Work History"
      flipped={flipped}
      flippedChildren={
        <div className={styles.flippedContent}>
          {jobs.map(({ id, name, location, roles, bullets }) => (
            <div key={id}>
              <div className={styles.headerRow}>
                <h3 id={`jobs-card-${id}`}>{name}</h3>
                <span className={styles.location}>{location}</span>
              </div>
              {roles.map(({ title, start, end }) => (
                <div key={title} className={styles.headerRow}>
                  <span className={styles.title}>{title}</span>
                  <span className={styles.dates}>
                    {start} &ndash; {end}
                  </span>
                </div>
              ))}
              <ul>
                {bullets.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      }
      scrollToId={scrollToId}
      unflip={() => setFlipped(false)}
    >
      <div className={styles.content}>
        {jobs.slice(0, 4).map(renderJob)}
        <Accordion>{jobs.slice(4).map(renderJob)}</Accordion>
      </div>
    </Card>
  );
};

export default JobsCard;
