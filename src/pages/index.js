import React from 'react'
import { Link } from 'gatsby'
import { Layout, Menu, Icon, Card, Row, Col } from 'antd'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import SEO from '../components/seo'
import { FormField } from '../components/FormField'
import logo from '../images/logo.svg'; 
const { Header, Content, Footer, Sider } = Layout

const logoStyle = css`
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 20px;
  float: left;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header
      style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0px' }}
    >
      <img src={logo} alt="logo" css={logoStyle}/>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px'}}
        
      >
        <Menu.Item key="1">
          <Icon type="home" />
          <span className="nav-text">Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="read" />
          <span className="nav-text">Players</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="news" />
          <Icon type="read" />
          <span className="nav-text">News</span>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
        Content
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
)

export default IndexPage
