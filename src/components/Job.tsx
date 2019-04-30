import React from 'react'
import Section from './Section'

const styles = require('./Job.module.scss')

interface IJobProps {
  dateRange: string
  title: string
  paragraphs: string[]
  backgroundColor: string
}

const Job = ({ dateRange, title, paragraphs, backgroundColor }: IJobProps) => (
  <Section style={{ backgroundColor }}>
    <div>
      <h4>{dateRange}</h4>
      <h2 className={styles.title}>{title}</h2>
      {paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  </Section>
)

export default Job
