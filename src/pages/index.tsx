import React, { PureComponent } from 'react'
import DocumentHead from '../components/common/DocumentHead'
import InternshipsScreen from '../components/screens/Internships'
import JobScreen from '../components/screens/Job'
import LandingScreen from '../components/screens/Landing'
import LaptopScreen from '../components/screens/Laptop'
import {
  ArivaleJobText,
  InternshipsText,
  KaimoJobText,
  LandingText,
} from '../shared/content'

const styles = require('./index.module.scss')

const variables = require('../styles/variables')
const arivaleScreenshots = [1, 2, 3, 4, 5].map(num =>
  require(`../images/arivale_screen_${num}.png`)
)
const kaimoMobileScreenshots = [1, 2, 3, 4, 5].map(num =>
  require(`../images/kaimo_mobile_screen_${num}.png`)
)
const kaimoWebScreenshots = [1, 2, 3, 4, 5].map(num =>
  require(`../images/kaimo_web_screen_${num}.png`)
)

export default class IndexPage extends PureComponent {
  render() {
    return (
      <div className={styles.root}>
        <DocumentHead />
        <LandingScreen {...LandingText} />
        <JobScreen
          {...ArivaleJobText}
          backgroundColor={variables.colorDarkBlue}
          screenshots={arivaleScreenshots}
        />
        <JobScreen
          {...KaimoJobText}
          backgroundColor={variables.colorMediumBlue}
          screenshots={kaimoMobileScreenshots}
          flexReverse={true}
        />
        <LaptopScreen screenshots={kaimoWebScreenshots} />
        <InternshipsScreen internships={InternshipsText} />
      </div>
    )
  }
}
