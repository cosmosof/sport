import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Layout, Menu, Icon } from 'antd'
/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import logo from '../images/logo.svg'
const { Header, Footer } = Layout

const logoStyle = css`
  width: 50%;
  height: 50%;
  margin: 16px 24px 16px 20px;
  float: left;
`

const StyledMenu = css`
  line-height: 64px;
  @media (max-width: 576px) {
    display: none;
  }
`
const StyledSandwichMenu = css`
  font-size: 24px;
  margin-top: 20px;
  margin-right: 20px;
  color: #dae3ee;
`
const MenuIcon = styled.div`
  cursor: pointer;
  @media (min-width: 576px) {
    display: none;
  }
`
const StyledOverlay = styled.aside`
  position: fixed;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
`
const StyledOverlayMenu = styled.aside`
  position: fixed;
  z-index: 99999999;
  display: flex;
  height: 100%;
  background: #051f48;
`

export default class ThemeLayout extends Component {
  constructor(props) {
    super(props)
    this.state = { toggleMenu: false }
  }
  render() {
    const handleMenuTouch = () => {
      this.setState(({ toggleMenu }) => ({ toggleMenu: !toggleMenu }))
    }
    const handleOverlayTouch = () => {
      this.setState(({ toggleMenu }) => ({ toggleMenu: !toggleMenu }))
    }
    return (
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
          <>
            <Global
              styles={css`
                html,
                body,
                #root {
                  height: 100%;
                  margin: 0;
                }
              `}
            />
            <Layout style={{ minHeight: '100vh' }}>
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
                <Location>
                  {({ location }) => {
                    let selectedKey
                    switch (location.pathname) {
                      case '/':
                        selectedKey = '1'
                        break
                      case '/players/':
                        selectedKey = '2'
                        break
                      case '/news/':
                        selectedKey = '3'
                        break
                      default:
                        break
                    }
                    return (
                      <Menu
                        css={StyledMenu}
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={[selectedKey]}
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
                    )
                  }}
                </Location>

                <MenuIcon onClick={handleMenuTouch}>
                  <Icon type="menu-unfold" css={StyledSandwichMenu} />
                </MenuIcon>
              </Header>
              {this.props.children}
              {this.state.toggleMenu && (
                <StyledOverlay onClick={handleOverlayTouch} />
              )}
              {this.state.toggleMenu && (
                <StyledOverlayMenu>
                  <Location>
                    {({ location }) => {
                      let selectedKey
                      switch (location.pathname) {
                        case '/':
                          selectedKey = '1'
                          break
                        case '/players/':
                          selectedKey = '2'
                          break
                        case '/news/':
                          selectedKey = '3'
                          break
                        default:
                          break
                      }
                      return (
                        <Menu
                          style={{ width: 256, paddingTop: 20 }}
                          theme="dark"
                          selectedKeys={[selectedKey]}
                          mode="inline"
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
                      )
                    }}
                  </Location>
                </StyledOverlayMenu>
              )}

              <Footer style={{ textAlign: 'center', color: '#dae3ee' }}>
                Mustafa Kahraman || Boston ©2019
              </Footer>
            </Layout>
          </>
        )}
      />
    )
  }
}
ThemeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
