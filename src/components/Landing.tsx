import React from 'react'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const styles = require('./Landing.module.scss')

const EMAIL_URL = 'mailto:jackswiggett@gmail.com'
const GITHUB_URL = 'https://github.com/jackswiggett'
const LINKEDIN_URL = 'https://www.linkedin.com/in/jackswiggett/'

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

const Landing = () => (
  <div className={styles.root}>
    <ProfileImage />
    <div className={styles.titles}>
      <h1>{`Jack Swiggett`}</h1>
      <h2>{`Web & Mobile Engineer`}</h2>
    </div>
  </div>
)

export default Landing
