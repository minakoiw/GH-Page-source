import * as React from 'react'
import Layout from '../components/layout'
import Landing from '../components/landing';
import "../components/layout.css"

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
    </Layout>
  )
}

export const Head = () => {
  return (
    <title>Minako Williams, painter</title>
  )
}

export default IndexPage