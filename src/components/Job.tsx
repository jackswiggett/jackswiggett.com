import { Linear, TweenLite } from 'gsap'
import React, { PureComponent } from 'react'
import ScrollMagic from 'scrollmagic'
import { controller } from '../util/scrollmagic'
import Section from './Section'

const styles = require('./Job.module.scss')

interface IJobProps {
  dateRange: string
  title: string
  paragraphs: string[]
  backgroundColor: string
  screenshots: string[]
  flexReverse?: boolean
}

const ANIMATION_DURATION = 2000

export default class Job extends PureComponent<IJobProps> {
  private rootRef = React.createRef<HTMLDivElement>()
  private textRef = React.createRef<HTMLDivElement>()
  private screenshotsInnerRef = React.createRef<HTMLDivElement>()
  private paragraphRefs = this.props.paragraphs.map(() =>
    React.createRef<HTMLParagraphElement>()
  )

  private initScrollMagic() {
    this.props.screenshots.forEach((_, index) => {
      new ScrollMagic.Scene({
        offset: index * (ANIMATION_DURATION / this.props.screenshots.length),
        triggerElement: this.rootRef.current,
        triggerHook: 'onLeave',
      })
        .setClassToggle(
          this.screenshotsInnerRef.current,
          styles[`showItem${index}`]
        )
        .addTo(controller)
    })

    this.paragraphRefs.forEach((ref, index) => {
      new ScrollMagic.Scene({
        offset:
          (index + 2) * (ANIMATION_DURATION / (this.paragraphRefs.length + 2)),
        triggerElement: this.rootRef.current,
        triggerHook: 'onLeave',
      })
        .setClassToggle(ref.current, styles.visible)
        .addTo(controller)
    })

    new ScrollMagic.Scene({
      duration: ANIMATION_DURATION,
      triggerElement: this.rootRef.current,
      triggerHook: 'onLeave',
    })
      .setTween(
        TweenLite.fromTo(
          this.textRef.current,
          1,
          { y: 150 },
          { y: 0, ease: Linear.easeNone }
        )
      )
      .addTo(controller)
  }

  componentDidMount() {
    this.initScrollMagic()
  }

  private renderScreenshots() {
    return this.props.screenshots.map((url, index) => (
      <div
        key={url}
        className={styles.screenshot}
        style={{ backgroundImage: `url('${url}')` }}
      />
    ))
  }

  render() {
    const {
      dateRange,
      title,
      paragraphs,
      backgroundColor,
      flexReverse,
    } = this.props
    return (
      <Section
        style={{
          backgroundColor,
          flexDirection: flexReverse ? 'row-reverse' : 'row',
          marginBottom: ANIMATION_DURATION,
        }}
        rootRef={this.rootRef}
        unpinAfterDuration={ANIMATION_DURATION}
      >
        <div className={styles.screenshotsOuter}>
          <div
            className={styles.screenshotsInner}
            ref={this.screenshotsInnerRef}
          >
            {this.renderScreenshots()}
          </div>
        </div>
        <div className={styles.spacer} />
        <div className={styles.text} ref={this.textRef}>
          <h4>{dateRange}</h4>
          <h2 className={styles.title}>{title}</h2>
          {paragraphs.map((text, index) => (
            <p
              key={index}
              className={styles.paragraph}
              ref={this.paragraphRefs[index]}
            >
              {text}
            </p>
          ))}
        </div>
      </Section>
    )
  }
}
