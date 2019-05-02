import React, { PureComponent } from 'react'
import ScrollMagic from 'scrollmagic'
import { controller } from '../../shared/scrollmagic'

const styles = require('./Section.module.scss')

interface ISectionProps {
  className?: string
  style?: React.CSSProperties
  rootRef?: React.RefObject<HTMLDivElement>
  isPinned?: boolean
  unpinAfterDuration?: number | string
}

export default class Section extends PureComponent<ISectionProps> {
  static defaultProps = {
    isPinned: true,
  }

  private scrollMagicScene: any

  private rootRef = this.props.rootRef || React.createRef<HTMLDivElement>()

  private initScrollMagic() {
    if (!this.props.isPinned) {
      return
    }

    this.scrollMagicScene = new ScrollMagic.Scene({
      duration: this.props.unpinAfterDuration || 0,
      triggerElement: this.rootRef.current,
      triggerHook: 'onLeave',
    })
      .setPin(this.rootRef.current, { pushFollowers: false })
      .addTo(controller)
  }

  private onResize = () => {
    // Handle window resizing correctly
    // See https://github.com/janpaepke/ScrollMagic/issues/379
    if (this.scrollMagicScene) {
      this.scrollMagicScene.destroy(true)
      this.initScrollMagic()
    }
  }

  componentDidMount() {
    this.initScrollMagic()
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
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
