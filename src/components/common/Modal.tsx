import React, { PureComponent } from 'react'
import { MdClose } from 'react-icons/md'

const styles = require('./Modal.module.scss')

interface IModalProps {
  onClose: () => void
}

export default class Modal extends PureComponent<IModalProps> {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.background} />
        <div className={styles.content}>{this.props.children}</div>
        <MdClose
          className={styles.closeButton}
          size={48}
          onClick={this.props.onClose}
        />
      </div>
    )
  }
}
