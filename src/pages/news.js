import React from 'react'
import { Link } from 'gatsby'
import { Button, Layout } from 'antd'

import SEO from '../components/seo'

const NewsPage = () => {

  return (
  
  <div>
    <SEO title="News" />
    <h1>This is a news page</h1>
    <p>Welcome to news page</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)}

export default NewsPage
