import React from 'react';
import stanfordLogo from '../../images/logos/stanford.png';
import Card from '../Card';
import * as styles from './EducationCard.module.scss';

/** Card with information about my degree and honors */
const EducationCard: React.FC = () => (
  <Card title="Education">
    <div className={styles.content}>
      <div className={styles.topSection}>
        <img src={stanfordLogo} alt="" />
        <div className={styles.textContainer}>
          <h3>Stanford University</h3>
          <div>B.S. in Computer Science, 2018</div>
          <div>Minor in French</div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <h4>Honors</h4>
        <ul>
          <li>Terman Award for Scholastic Achievement in Engineering</li>
          <li>President’s Award for Academic Excellence</li>
          <li>Graduated with Distinction and Elected to Phi Beta Kappa</li>
        </ul>
      </div>
    </div>
  </Card>
);

export default EducationCard;
