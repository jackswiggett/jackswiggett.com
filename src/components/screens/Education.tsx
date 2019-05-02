import React, { PureComponent } from 'react'
import { IEducationText } from '../../shared/types'
import Section from '../common/Section'

const styles = require('./Education.module.scss')

interface IEducationProps extends IEducationText {}

export default class Internships extends PureComponent<IEducationProps> {
  private renderDegree() {
    const { school, concentrations } = this.props

    return (
      <div className={styles.degreeContainer}>
        <h4>Education</h4>
        <div className={styles.spacer} />
        <h2>{school}</h2>
        {concentrations.map((concentration, index) => (
          <div key={index} className={styles.concentration}>
            {concentration}
          </div>
        ))}
      </div>
    )
  }

  private renderHonors() {
    const { honors } = this.props
    return (
      <div className={styles.honorsContainer}>
        <h4>Honors</h4>
        {honors.map((honor, index) => (
          <div key={index} className={styles.honor}>
            {honor}
          </div>
        ))}
      </div>
    )
  }

  render() {
    return (
      <Section className={styles.root} isPinned={false}>
        <div className={styles.textContainer}>
          {this.renderDegree()}
          <div className={styles.spacer} />
          {this.renderHonors()}
        </div>
      </Section>
    )
  }
}
