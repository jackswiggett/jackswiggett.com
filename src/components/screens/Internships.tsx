import React, { PureComponent } from 'react'
import { MdChevronRight } from 'react-icons/md'
import { IInternship } from '../../shared/types'
import Modal from '../common/Modal'
import Section from '../common/Section'

const styles = require('./Internships.module.scss')

interface IInternshipsProps {
  internships: IInternship[]
}

interface IInternshipsState {
  selectedInternship?: IInternship
}

export default class Internships extends PureComponent<
  IInternshipsProps,
  IInternshipsState
> {
  state: IInternshipsState = {}

  private clearSelectedInternship = () =>
    this.setState({ selectedInternship: undefined })

  private renderInternship = (internship: IInternship, index) => (
    <div
      key={index}
      className={styles.internship}
      // tslint:disable-next-line: jsx-no-lambda
      onClick={() => this.setState({ selectedInternship: internship })}
    >
      <div>
        <h4 className={styles.dateRange}>{internship.dateRange}</h4>
        <div className={styles.title}>
          <h3>{internship.company}</h3>
          <span className={styles.diamond}>&#9670;</span>
          <span className={styles.role}>{internship.role}</span>
        </div>
      </div>
      <MdChevronRight size={36} />
    </div>
  )

  private renderInternshipModal() {
    const { selectedInternship } = this.state
    if (selectedInternship) {
      return (
        <Modal onClose={this.clearSelectedInternship}>
          <h4>{selectedInternship.dateRange}</h4>
          <h2>{selectedInternship.company}</h2>
          <h3>{selectedInternship.role}</h3>
          <p className={styles.description}>{selectedInternship.description}</p>
        </Modal>
      )
    }
  }

  render() {
    const { internships } = this.props
    return (
      <Section className={styles.root} isPinned={false}>
        <div className={styles.internships}>
          {internships.map(this.renderInternship)}
        </div>
        {this.renderInternshipModal()}
      </Section>
    )
  }
}
