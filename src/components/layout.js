import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import { Layout, Menu, Icon, Card, Row, Col } from 'antd'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import SEO from '../components/seo'
import logo from '../images/logo.svg'
const { Header, Content, Footer, Sider } = Layout

const logoStyle = css`
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 20px;
  float: left;
`

const StyledMenu = css`
  line-height: 64px;
  @media (max-width: 480px) {
    display: none;
  }
`
const StyledSandwichMenu = css`
  font-size: 24px;
  margin-top: 20px;
  margin-right: 20px;
  color: #dae3ee;
`
const MenuIcon = styled.a`
  @media (min-width: 480px) {
    display: none;
  }
`
const LayoutStyle = css`
  height: 100vh;
`
const ThemeLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Layout css={LayoutStyle}>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            padding: '0px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Link to="/">
            <img src={logo} alt="logo" css={logoStyle} />
          </Link>
          <Menu
            css={StyledMenu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="home" />
                <span className="nav-text">Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/players/">
                <Icon type="team" />
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
          <MenuIcon href="#" onClick={() => alert('toggle')}>
            <Icon type="menu-unfold" css={StyledSandwichMenu} />
          </MenuIcon>
        </Header>
        {children}
        <Footer style={{ textAlign: 'center' }}>
          Mustafa Kahraman || Boston ©2019
        </Footer>
      </Layout>
    )}
  />
)

ThemeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeLayout
