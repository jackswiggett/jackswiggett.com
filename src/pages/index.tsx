import React, { Component } from 'react'
import DocumentHead from '../components/DocumentHead'
import Job from '../components/Job'
import Landing from '../components/Landing'
import { ArivaleJobText, KaimoJobText, LandingText } from '../constants/content'

const variables = require('../styles/_variables.scss')

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <DocumentHead />
        <Landing {...LandingText} />
        <Job {...ArivaleJobText} backgroundColor={variables.colorDarkBlue} />
        <Job {...KaimoJobText} backgroundColor={variables.colorMediumBlue} />
      </div>
    )
  }
}
