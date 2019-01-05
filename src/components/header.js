import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Layout, Menu, Icon, Card, Row, Col } from 'antd'
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
  @media (max-width: 480px) {
    display: none;
  }
`
const StyledSandwichMenu = css`
  font-size: 24px;
  float: right;
  margin-top: 20px;
  margin-right: 20px;
  color: #dae3ee;
`
const MenuIcon = styled.a`
  @media (min-width: 480px) {
    display: none;
  }
`


const HeaderComponent = () => (
  <Header
      style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0px' }}
    >
      <Link to="/">
        <img src={logo} alt="logo" css={logoStyle} />
      </Link>
      <Menu
        css={StyledMenu}
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
      <MenuIcon
        href="#"
        onClick={() => alert('toggle')}
      >
        <Icon type="menu-unfold" css={StyledSandwichMenu} />
      </MenuIcon>
    </Header>
)

HeaderComponent.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderComponent.defaultProps = {
  siteTitle: ``,
}

export default HeaderComponent;
