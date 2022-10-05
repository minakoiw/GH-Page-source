import * as React from 'react'
import Layout from '../components/layout'
import ArtList from '../components/art-list';
import "../components/layout.css"

const IndexPage = () => {
  return (
    <Layout layoutClass="portfolio">
      <ArtList />
    </Layout>
  )
}

export const Head = () => {
  return (
    <title>Porfolio of Minako Williams, painter</title>
  )
}

export default IndexPage