import React from 'react'
import { Link } from 'gatsby'
import { Button, Layout } from 'antd'

import SEO from '../components/seo'

const PlayersPage = () => {

  return (
  
  <div>
    <SEO title="Players Page" />
    <h1>this is a players page</h1>
    <p>Welcome to players page</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)}

export default PlayersPage
