import React from 'react'
import { Link } from 'gatsby'
import { Layout, Menu, Icon, Card, Row, Col } from 'antd'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import SEO from '../components/seo'
import ThemeLayout from '../components/layout'

const { Content } = Layout

const Title = styled.h1`
  color: #03326e;
  text-align: center;
`
const Text = styled.p`
  color: #013f8e;
  text-align: center;
  font-size: 24px;
`

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

const IndexPage = () => (
  <ThemeLayout>
    <SEO title="everting about NFL" keywords={[`NFL`, `player`, `football`]} />
    <StyledContent>
      <Title>
        Hi, I am AntSport. I have everthing about NFL you are looking for...
      </Title>

      <Text>You will find a lot more by going through menu tabs...</Text>
    </StyledContent>
  </ThemeLayout>
)

export default IndexPage
