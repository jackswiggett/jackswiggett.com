import React, { PureComponent } from 'react'
import ScrollMagic from 'scrollmagic'
import { controller } from '../util/scrollmagic'

const styles = require('./Section.module.scss')

interface ISectionProps {
  className?: string
  style?: React.CSSProperties
  rootRef?: React.RefObject<HTMLDivElement>
}

export default class Section extends PureComponent<ISectionProps> {
  private rootRef = this.props.rootRef || React.createRef<HTMLDivElement>()

  initScrollMagic() {
    new ScrollMagic.Scene({
      triggerElement: this.rootRef.current,
      triggerHook: 'onLeave',
    })
      .setPin(this.rootRef.current, { pushFollowers: false })
      .addTo(controller)
  }

  componentDidMount() {
    this.initScrollMagic()
  }

  render() {
    const className = `${styles.root} ${this.props.className || ''}`

    return (
      <div className={className} style={this.props.style} ref={this.rootRef}>
        {this.props.children}
      </div>
    )
  }
}
