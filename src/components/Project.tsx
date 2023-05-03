import React from 'react';
import * as styles from './Project.module.scss';
import InfoButton from './InfoButton';

export interface Props {
  logo: string;
  name: string;
  description: string | React.ReactNode;
  inProgress?: boolean;
  onClickInfo?: () => void;
}

/** Individual entry on the front of the ProjectsCard, showing the project name and description */
const Project: React.FC<Props> = ({
  logo,
  name,
  description,
  inProgress = false,
  onClickInfo,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.leftColumn}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.middleColumn}>
        <h3>
          {name}
          &ensp;
          {inProgress && (
            <span className={styles.inProgressText}>(In Progress)</span>
          )}
        </h3>
        <p>{description}</p>
      </div>
      <div className={styles.rightColumn}>
        <InfoButton onClick={onClickInfo} />
      </div>
    </div>
  );
};

export default Project;
