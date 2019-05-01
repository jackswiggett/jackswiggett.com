import { Link } from 'gatsby'
import React, { PureComponent } from 'react'
import DocumentHead from '../components/common/DocumentHead'

const styles = require('./404.module.scss')

export default class NotFoundPage extends PureComponent {
  render() {
    return (
      <div className={styles.root}>
        <DocumentHead title="404: Not found" />
        <h1>Not Found</h1>
        <p>
          This page doesn't exist. Please return <Link to="/">home</Link>.
        </p>
      </div>
    )
  }
}
