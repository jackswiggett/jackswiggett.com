import React from 'react';
import { BsEnvelopeFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import Card from '../Card';
import * as styles from './ContactCard.module.scss';

const links = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jackswiggett/',
    IconComponent: BsLinkedin,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/jackswiggett',
    IconComponent: BsGithub,
  },
  // TODO: Add resume once it is updated
  // {
  //   label: 'Resume',
  //   url: '',
  //   IconComponent: BsFileEarmarkTextFill,
  // },
];

/** Card with links to get in touch or learn more about my work */
const ContactCard: React.FC = () => (
  <Card title="Get In Touch">
    <div className={styles.content}>
      <a className="mailtoui" href="mailto:jackswiggett@gmail.com">
        <BsEnvelopeFill size={24} />
        <br />
        Email
      </a>
      {links.map(({ label, url, IconComponent }) => (
        <a key={label} href={url} target="_blank" rel="noopener noreferrer">
          <IconComponent size={24} />
          <br />
          {label}
        </a>
      ))}
    </div>
  </Card>
);

export default ContactCard;
