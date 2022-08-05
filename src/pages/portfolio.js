import * as React from 'react'
import Layout from '../components/layout'
import ArtList from '../components/art-list';
import "../components/layout.css"

const IndexPage = () => {
  return (
    <Layout pageTitle="My Portfolio">
      <ArtList />
    </Layout>
  )
}

export default IndexPage