import React from 'react'
import { Link } from 'gatsby'
import { Layout, Menu, Icon, Card, Row, Col } from 'antd'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import SEO from '../components/seo'
import { FormField } from '../components/FormField'
import logo from '../images/logo.svg'
const { Header, Content, Footer, Sider } = Layout

const logoStyle = css`
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 20px;
  float: left;
`

const Title = styled.h1`
  color: #013f8e;
  text-align: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="everting about NFL" keywords={[`NFL`, `player`, `football`]} />
    <Header
      style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0px' }}
    >
      <Link to="/">
        <img src={logo} alt="logo" css={logoStyle} />
      </Link>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
          <Icon type="home" />
          <span className="nav-text">Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/players/">
            <Icon type="read" />
            <span className="nav-text">Players</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
        <Link to="/news/">
          <Icon type="read" />
          <span className="nav-text">News</span>
          </Link>

        </Menu.Item>
      </Menu>
    </Header>
    <Content
      style={{ padding: '0 50px', marginTop: 64, background: '#DAE3EE' }}
    >
      <div
        style={{
          background: '#DAE3EE',
          padding: 24,
          height: `86vh`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <Title>
          Hi, I am AntSport. I have everthing about NFL you are looking for...
        </Title>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Mustafa Kahraman || Boston ©2019
    </Footer>
  </Layout>
)

export default IndexPage
