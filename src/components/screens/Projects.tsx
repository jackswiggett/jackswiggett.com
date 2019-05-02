import React, { PureComponent } from 'react'
import { MdChevronRight } from 'react-icons/md'
import { IProjectText } from '../../shared/types'
import Modal from '../common/Modal'
import Section from '../common/Section'

const styles = require('./Projects.module.scss')

interface IProjectsProps {
  projects: IProjectText[]
}

interface IProjectsState {
  selectedProject?: IProjectText
}

export default class Projects extends PureComponent<
  IProjectsProps,
  IProjectsState
> {
  state: IProjectsState = {}

  private clearSelectedProject = () =>
    this.setState({ selectedProject: undefined })

  private renderProject = (project: IProjectText, index) => (
    <div
      key={index}
      className={styles.project}
      // tslint:disable-next-line: jsx-no-lambda
      onClick={() => this.setState({ selectedProject: project })}
    >
      <div>
        <h3>{project.title}</h3>
        <div className={styles.shortDescription}>
          {project.shortDescription}
        </div>
      </div>
      <MdChevronRight className={styles.chevron} size={36} />
    </div>
  )

  private renderLinks(links: Array<{ title: string; href: string }>) {
    const elems = []
    links.forEach(({ title, href }, index) => {
      elems.push(
        <a key={index} href={href} target="_blank">
          {title}
        </a>
      )
      elems.push(
        <span key={index + 0.5} className={styles.linkSeperator}>
          |
        </span>
      )
    })

    // remove the final, unneeded '|'
    elems.pop()

    return <h4>{elems}</h4>
  }

  private renderProjectModal() {
    const { selectedProject } = this.state
    if (selectedProject) {
      return (
        <Modal onClose={this.clearSelectedProject}>
          <h2>{selectedProject.title}</h2>
          <h4>{selectedProject.shortDescription}</h4>
          <h4 className={styles.technologies}>
            {selectedProject.technologies.join(', ')}
          </h4>
          {this.renderLinks(selectedProject.links)}
          <ul className={styles.bullets}>
            {selectedProject.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </Modal>
      )
    }
  }

  render() {
    const { projects } = this.props
    return (
      <Section className={styles.root} isPinned={false}>
        <div className={styles.projects}>
          {projects.map(this.renderProject)}
        </div>
        {this.renderProjectModal()}
      </Section>
    )
  }
}
