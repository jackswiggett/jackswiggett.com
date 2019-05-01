import React, { PureComponent } from 'react'
import ScrollMagic from 'scrollmagic'
import { controller } from '../../shared/scrollmagic'
import Section from '../common/Section'

const styles = require('./Laptop.module.scss')

interface ILaptopProps {
  screenshots: string[]
}

const ANIMATION_DURATION = 2000

export default class Laptop extends PureComponent<ILaptopProps> {
  private rootRef = React.createRef<HTMLDivElement>()
  private screenshotRefs = this.props.screenshots.map(() =>
    React.createRef<HTMLDivElement>()
  )

  private initScrollMagic() {
    this.screenshotRefs.forEach((ref, index) => {
      new ScrollMagic.Scene({
        offset: index * (ANIMATION_DURATION / this.screenshotRefs.length),
        triggerElement: this.rootRef.current,
        triggerHook: 'onLeave',
      })
        .setClassToggle(ref.current, styles.visible)
        .addTo(controller)
    })
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
        ref={this.screenshotRefs[index]}
      />
    ))
  }

  render() {
    return (
      <Section
        className={styles.root}
        style={{ marginBottom: ANIMATION_DURATION }}
        rootRef={this.rootRef}
        unpinAfterDuration={ANIMATION_DURATION}
      >
        <div className={styles.laptopContainer}>{this.renderScreenshots()}</div>
      </Section>
    )
  }
}
