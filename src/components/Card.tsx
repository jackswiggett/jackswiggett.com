import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { BsXLg } from 'react-icons/bs';
import * as styles from './Card.module.scss';

interface Props {
  title: string;
  flippedChildren?: React.ReactNode;
  flipped?: boolean;
  scrollToId?: string;
  unflip?: () => void;
}

/**
 * Content container that looks like a card, with the ability to flip over via a 3D animation and
 * display additional content on the back
 */
const Card: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  children,
  flippedChildren,
  flipped = false,
  scrollToId,
  unflip = () => {},
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardFrontRef = useRef<HTMLDivElement>(null);
  const cardBackRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToElement = () => {
    if (!scrollToId || !scrollContainerRef.current) return;

    const element = document.getElementById(scrollToId);
    if (!element) return;

    scrollContainerRef.current.scrollTo({
      top: element.offsetTop - 20,
      behavior: 'smooth',
    });
  };

  const previousFlipTimelineRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    if (!flipped) {
      if (previousFlipTimelineRef.current) {
        // Reset the animation that flipped the card from front to back, so we can recompute the
        // card's size/position on the screen (which may have changed if the window was resized) and
        // then show the "unflip" animation.
        previousFlipTimelineRef.current.revert();
      } else {
        // If `flipped` is false and there was no previous flip animation, this is the initial
        // render, so we do nothing.
        return;
      }
    }

    if (
      !rootRef.current ||
      !cardContainerRef.current ||
      !cardRef.current ||
      !cardFrontRef.current ||
      !cardBackRef.current
    ) {
      return;
    }

    const startingRect = cardRef.current.getBoundingClientRect();

    const startingWidth = startingRect.width;
    const startingHeight = startingRect.height;
    const startingOriginX = startingRect.x + startingWidth / 2;
    const startingOriginY = startingRect.y + startingHeight / 2;

    const endingWidth = window.innerWidth;
    const endingHeight = window.innerHeight;
    const endingOriginX = endingWidth / 2;
    const endingOriginY = endingHeight / 2;

    const cardUnflippedAttributes = {
      scaleX: startingWidth / endingWidth,
      scaleY: startingHeight / endingHeight,
      translateX: startingOriginX - endingOriginX,
      translateY: startingOriginY - endingOriginY,
      rotateY: '180deg',
    };

    const cardFlippedAttributes = {
      scaleX: 1,
      scaleY: 1,
      translateX: 0,
      translateY: 0,
      rotateY: '0deg',
    };

    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: 'power2.inOut' },
    });

    timeline.set('body', {
      // Prevent scrolling
      overflow: 'hidden',
    });

    timeline.set(rootRef.current, {
      height: startingHeight,
      zIndex: 1,
    });

    timeline.set(cardContainerRef.current, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
    });

    timeline.set(cardRef.current, {
      width: '100%',
      height: '100%',
      ...(flipped ? cardUnflippedAttributes : cardFlippedAttributes),
    });

    timeline.set(cardFrontRef.current, {
      width: startingWidth,
      height: startingHeight,
      scaleX: endingWidth / startingWidth,
      scaleY: endingHeight / startingHeight,
      position: 'absolute',
      top: '50%',
      left: '50%',
      translateX: '-50%',
      translateY: '-50%',
      rotateY: '180deg',
    });

    timeline.set(cardBackRef.current, {
      display: 'block',
    });

    if (flipped) {
      timeline.to(cardRef.current, cardFlippedAttributes);
      timeline.eventCallback('onComplete', scrollToElement);
      previousFlipTimelineRef.current = timeline;
    } else {
      timeline.to(cardRef.current, cardUnflippedAttributes);
      timeline.eventCallback('onComplete', () => {
        timeline.revert();
      });
    }
  }, [flipped]);

  return (
    <div className={styles.root} ref={rootRef}>
      <div className={styles.cardContainer} ref={cardContainerRef}>
        <div className={styles.card} ref={cardRef}>
          <div className={styles.cardFront} ref={cardFrontRef}>
            <h2>{title}</h2>
            {children}
          </div>
          <div className={styles.cardBack} ref={cardBackRef}>
            <button className={styles.unflipButton} onClick={unflip}>
              <BsXLg />
            </button>
            <div className={styles.scrollContainer} ref={scrollContainerRef}>
              {flippedChildren}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
