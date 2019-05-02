import React from 'react'

const styles = require('./Footer.module.scss')

const Footer = () => (
  <div className={styles.root}>
    <p>
      This website was built with React, Gatsby, and ScrollMagic. Check it out
      on&nbsp;
      <a
        href="https://github.com/jackswiggett/jackswiggett.com"
        target="_blank"
      >
        GitHub
      </a>
      .
    </p>
    <p>© 2019 Jack Swiggett</p>
  </div>
)

export default Footer
