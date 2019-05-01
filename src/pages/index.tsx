import React, { Component } from 'react'
import DocumentHead from '../components/DocumentHead'
import Job from '../components/Job'
import Landing from '../components/Landing'
import Laptop from '../components/Laptop'
import { ArivaleJobText, KaimoJobText, LandingText } from '../constants/content'

const variables = require('../styles/_variables.scss')
const arivaleScreenshots = [1, 2, 3, 4, 5].map(num =>
  require(`../images/arivale_screen_${num}.png`)
)
const kaimoMobileScreenshots = [1, 2, 3, 4, 5].map(num =>
  require(`../images/kaimo_mobile_screen_${num}.png`)
)
const kaimoWebScreenshots = [1, 2, 3, 4, 5].map(num =>
  require(`../images/kaimo_web_screen_${num}.png`)
)

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <DocumentHead />
        <Landing {...LandingText} />
        <Job
          {...ArivaleJobText}
          backgroundColor={variables.colorDarkBlue}
          screenshots={arivaleScreenshots}
        />
        <Job
          {...KaimoJobText}
          backgroundColor={variables.colorMediumBlue}
          screenshots={kaimoMobileScreenshots}
          flexReverse={true}
        />
        <Laptop screenshots={kaimoWebScreenshots} />
      </div>
    )
  }
}
