import * as React from 'react'
import Layout from '../components/layout'
import About from '../components/about';
import "../components/layout.css"

const AboutPage = () => {
  return (
    <Layout>
      <About />
    </Layout>
  )
}

export const Head = () => {
  return (
    <title>Porfolio of Minako Williams, painter</title>
  )
}

export default AboutPage