import React from 'react';
import swingtime from '../../images/swingtime.jpg';
import Card from '../Card';
import * as styles from './HobbiesCard.module.scss';

const MUSIC_LINK =
  'https://open.spotify.com/track/0fsLe1QggM42YAsl3OZIK9?si=1eb62fb0336c4178';
const DANCE_LINK = 'https://www.youtube.com/watch?v=1m4PqwRl_Lo';

/** Card with information about my hobbies and interests outside work */
const HobbiesCard: React.FC = () => (
  <Card title="Outside Work">
    <div className={styles.content}>
      <img
        src={swingtime}
        alt="Jack posing during a swing dance performance"
        className={styles.swingtimeImage}
      />
      <p>
        I am an avid{' '}
        <a href={MUSIC_LINK} target="_blank" rel="noopener noreferrer">
          jazz musician
        </a>{' '}
        and{' '}
        <a href={DANCE_LINK} target="_blank" rel="noopener noreferrer">
          swing dancer
        </a>
        . I also love skiing, mountaineering, and exploring the outdoors!
      </p>
    </div>
  </Card>
);

export default HobbiesCard;
