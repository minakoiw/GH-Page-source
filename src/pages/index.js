import * as React from 'react'
import Layout from '../components/layout'
import Landing from '../components/landing';
import Events from '../components/events';
import About from '../components/about';
import "../components/layout.css"

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <Events />
      <About />
    </Layout>
  )
}

export const Head = () => {
  return (
    <title>Minako Williams, painter</title>
  )
}

export default IndexPage