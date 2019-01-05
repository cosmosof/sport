import React from 'react'
import { Link } from 'gatsby'
import { Button, Layout } from 'antd'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import ThemeLayout from '../components/layout'

import SEO from '../components/seo'

const { Content } = Layout

const StyledContent = styled(Content)`
  padding: 0 50px;
  background: #dae3ee;
  padding: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`
const NewsPage = () => {
  return (
    <ThemeLayout>
      <SEO title="News" />
      <StyledContent>
        <h1>This is news page</h1>
        <p>Welcome to news page</p>
        <Link to="/">Go back to the homepage</Link>
      </StyledContent>
    </ThemeLayout>
  )
}

export default NewsPage
