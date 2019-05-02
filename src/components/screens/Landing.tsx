import React, { PureComponent } from 'react'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import ScrollMagic from 'scrollmagic'
import { controller } from '../../shared/scrollmagic'
import Section from '../common/Section'

const styles = require('./Landing.module.scss')

const EMAIL_URL = 'mailto:jackswiggett@gmail.com'
const GITHUB_URL = 'https://github.com/jackswiggett'
const LINKEDIN_URL = 'https://www.linkedin.com/in/jackswiggett/'

interface ILandingProps {
  title: string
  subtitle: string
}

const SocialLink = ({
  icon: IconComponent,
  size,
  href,
}: {
  icon: (props: { size: number }) => JSX.Element
  size: number
  href: string
}) => (
  <a className={styles.socialLink} href={href} target="_blank">
    <IconComponent size={size} />
  </a>
)

const ProfileImage = () => (
  <div className={styles.profileImage}>
    <div className={styles.socialLinks}>
      <SocialLink icon={MdEmail} href={EMAIL_URL} size={26} />
      <SocialLink icon={FaGithubAlt} href={GITHUB_URL} size={24} />
      <SocialLink icon={FaLinkedin} href={LINKEDIN_URL} size={24} />
    </div>
  </div>
)

export default class Landing extends PureComponent<ILandingProps> {
  private rootRef = React.createRef<HTMLDivElement>()
  private innerRef = React.createRef<HTMLDivElement>()

  private initScrollMagic() {
    new ScrollMagic.Scene({
      duration: '100%',
      triggerElement: this.rootRef.current,
      triggerHook: 'onLeave',
    })
      .setTween(this.innerRef.current, 1, { opacity: 0 })
      .addTo(controller)
  }

  componentDidMount() {
    this.initScrollMagic()
  }

  render() {
    const { title, subtitle } = this.props

    return (
      <Section
        className={styles.root}
        rootRef={this.rootRef}
        unpinAfterDuration="100%"
      >
        <div className={styles.inner} ref={this.innerRef}>
          <ProfileImage />
          <div className={styles.titles}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </div>
        </div>
      </Section>
    )
  }
}
