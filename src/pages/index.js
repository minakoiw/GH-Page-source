import * as React from 'react'
import Layout from '../components/layout'
import Landing from '../components/landing';
import Events from '../components/events';
import About from '../components/about';
import "../components/layout.css"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Landing />
      <Events />
      <About />
    </Layout>
  )
}

export default IndexPage