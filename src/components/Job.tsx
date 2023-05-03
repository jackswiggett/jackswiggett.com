import cn from 'classnames';
import React from 'react';
import * as styles from './Job.module.scss';
import InfoButton from './InfoButton';

export interface Props {
  logo: string;
  name: string;
  roles: Array<{
    title: string;
    start: string;
    end: string;
  }>;
  onClickInfo?: () => void;
}

/** Individual entry on the front of the JobsCard, showing the company, role(s), and dates */
const Job: React.FC<Props> = ({ logo, name, roles, onClickInfo }) => {
  const multipleRoles = roles.length > 1;

  return (
    <div className={cn(styles.root, { [styles.multipleRoles]: multipleRoles })}>
      <div className={styles.row}>
        <div className={styles.leftColumn}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.middleColumn}>
          <h3>{name}</h3>
          {multipleRoles ? null : (
            <div className={styles.role}>
              <div className={styles.title}>{roles[0].title}</div>
              <div className={styles.dates}>
                {roles[0].start} &ndash; {roles[0].end}
              </div>
            </div>
          )}
        </div>
        <div className={styles.rightColumn}>
          <InfoButton onClick={onClickInfo} />
        </div>
      </div>
      {multipleRoles &&
        roles.map(({ title, start, end }) => (
          <div key={title} className={styles.row}>
            <div className={styles.leftColumn}>
              <div className={styles.roleTimelineMarker}>
                <div className={styles.bullet} />
                <div className={styles.line} />
              </div>
            </div>
            <div className={styles.middleColumn}>
              <div className={styles.role}>
                <div className={styles.title}>{title}</div>
                <div className={styles.dates}>
                  {start} &ndash; {end}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Job;
