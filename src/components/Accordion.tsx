import cn from 'classnames';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import * as styles from './Accordion.module.scss';
import { BsChevronDown } from 'react-icons/bs';

/** Content container that smoothly expands and collapses with a "view more"/"hide" button */
const Accordion: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!contentWrapperRef.current) return;

    if (expanded) {
      // Transition content to full height
      gsap.to(contentWrapperRef.current, {
        height: 'auto',
        duration: 0.5,
        ease: 'power1.inOut',
      });
    } else {
      gsap.to(contentWrapperRef.current, {
        height: 0,
        duration: 0.5,
        ease: 'power1.inOut',
      });
    }
  }, [expanded]);

  return (
    <div className={cn({ [styles.expanded]: expanded })}>
      <div ref={contentWrapperRef} className={styles.contentWrapper}>
        {children}
      </div>
      <button
        className={styles.toggleButton}
        onClick={() => setExpanded(!expanded)}
      >
        <span className={styles.viewMoreText}>View More</span>
        <span className={styles.hideText}>Hide</span>
        <BsChevronDown size={16} />
      </button>
    </div>
  );
};

export default Accordion;
