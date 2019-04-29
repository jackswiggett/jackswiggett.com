import { Link } from 'gatsby'
import React from 'react'
import DocumentHead from '../components/DocumentHead'

const NotFoundPage = () => (
  <div>
    <DocumentHead title="404: Not found" />
    <h1>Not Found</h1>
    <p>
      This page doesn't exist. Please return <Link to="/">home</Link>.
    </p>
  </div>
)

export default NotFoundPage
