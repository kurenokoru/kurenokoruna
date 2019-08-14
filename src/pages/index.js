import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>INDEX</h1>
    <p>Hey! This is ALL ABOUT ME!!!</p>
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage