import gsap from 'gsap';
import React, { useLayoutEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import profile from '../../images/profile.jpg';
import * as styles from './WelcomeSection.module.scss';

/** Welcome section of the site with my name and a fancy animation */
const WelcomeSection: React.FC = () => {
  useLayoutEffect(() => {
    const gsapContext = gsap.context(() => {
      gsap.set(`.${styles.content}`, {
        visibility: 'visible',
      });

      const welcomeAnimationTimeline = gsap.timeline();
      const matchMedia = gsap.matchMedia();

      // For small screens
      matchMedia.add(`not all and (min-width: ${styles.breakpointMd})`, () => {
        welcomeAnimationTimeline.from(
          `.${styles.profileImage}`,
          {
            x: -1 * (window.innerWidth / 2 + 100),
            ease: 'power2.out',
            duration: 1,
            rotation: -90,
          },
          0.5
        );
        welcomeAnimationTimeline.from(`.${styles.blueCircle}`, {
          scale: 0,
          duration: 1,
          ease: 'power2.in',
        });
        welcomeAnimationTimeline.from(
          `.${styles.mainTextContainer}`,
          {
            height: 0,
            duration: 1,
            ease: 'power1.inOut',
          },
          '<'
        );
      });

      // For medium to large screens
      matchMedia.add(`(min-width: ${styles.breakpointMd})`, () => {
        welcomeAnimationTimeline.from(
          `.${styles.profileImage}`,
          {
            y: '-100vh',
            ease: 'power2.out',
            duration: 1,
            rotation: -90,
          },
          0.5
        );
        welcomeAnimationTimeline.from(`.${styles.mainTextContainer}`, {
          width: 0,
          duration: 1,
          ease: 'power2.inOut',
        });
        welcomeAnimationTimeline.from(
          `.${styles.bottomContainer}`,
          {
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
          },
          '+=0.5'
        );
      });

      welcomeAnimationTimeline.eventCallback('onComplete', () => {
        // Once the animation is done, revert all effects of GSAP. Otherwise, the layout can get
        // wonky when the screen is resized.
        matchMedia.revert();

        // Also make the background of the root HTML element blue to prevent the white background
        // from showing up sometimes when scrolling (particularly in mobile Safari)
        document.documentElement.classList.add('afterWelcomeAnimation');
      });

      // Hide the text after scrolling, otherwise it becomes visible when you overscroll past the
      // bottom of the main section
      gsap.to(`.${styles.content}`, {
        visibility: 'hidden',
        scrollTrigger: {
          trigger: `.${styles.spacer}`,
          start: 'bottom -50px',
          scrub: true,
        },
      });
    });

    return () => {
      // Clean up when component unmounts. See https://greensock.com/react-basics/.
      gsapContext.revert();
    };
  }, []);

  return (
    <div>
      <div className={styles.spacer} />
      <div className={styles.content}>
        <div className={styles.blueCircle} />
        <div className={styles.topContainer}>
          <img src={profile} alt="" className={styles.profileImage} />
          <div className={styles.mainTextContainer}>
            <div className={styles.mainText}>
              <h1>
                Hi, I'm <strong>Jack</strong>.
              </h1>
              <p className={styles.displaySmall}>
                I love working with
                <br />
                mission-driven teams to
                <br />
                build great software.
              </p>
              <p className={styles.displayMedium}>
                I love working with mission-driven
                <br />
                teams to build great software.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.scrollMessage}>Scroll Down</div>
          <BsChevronDown size={16} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
