import React, { PureComponent } from 'react'
import ScrollMagic from 'scrollmagic'
import { controller } from '../../shared/scrollmagic'

const styles = require('./Section.module.scss')

interface ISectionProps {
  className?: string
  style?: React.CSSProperties
  rootRef?: React.RefObject<HTMLDivElement>
  isPinned?: boolean
  unpinAfterDuration?: number
}

export default class Section extends PureComponent<ISectionProps> {
  static defaultProps = {
    isPinned: true,
  }

  private rootRef = this.props.rootRef || React.createRef<HTMLDivElement>()

  private initScrollMagic() {
    if (!this.props.isPinned) {
      return
    }

    new ScrollMagic.Scene({
      duration: this.props.unpinAfterDuration || 0,
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
