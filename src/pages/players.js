import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, List, Avatar, Input, Dropdown, Menu, Icon } from 'antd'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import ThemeLayout from '../components/layout'
import SEO from '../components/seo'
import { playersFetchData, searchTerm, filterTerm } from '../actions/players'
import { filteredPlayers, filteredByName } from '../reducers/players'

const { Content } = Layout
const Search = Input.Search

const StyledContent = styled(Content)`
  margin-top: 48px;
  background: #dae3ee;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
const playerDetailWrapper = css`
  display: flex;
  flex-direction: column;
`
const playerPositionStyle = css`
  color: #db4d4d;
`
const listStyle = css`
  background: white;
  min-width: 420px;
  min-height: 480px;
`
const searchStyle = css`
  max-width: 420px;
  @media (max-width: 576px) {
    max-width: 380px;
  }
`

class PlayersPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterOn: false,
    }
  }
  componentDidMount() {
    this.props.fetchData(
      'https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&format=json'
    )
  }
  handleFilter = ({ key }) => {
    this.setState({ filterOn: true })
    switch (key) {
      case '0':
        this.props.filterTerm('position')
        break
      case '1':
        this.props.filterTerm('teamAbbr')
        break
      default:
        break
    }
  }
  handleSearchInput = e => {
    this.setState({ filterOn: false })
    this.props.searchTerm(e.target.value)
  }
  render = () => {
    const { isLoading, filteredByName, players } = this.props
    const { filterOn } = this.state
    const data = filterOn ? players : filteredByName || players

    return (
      <ThemeLayout>
        <SEO title="NFL Players Search" />
        <StyledContent>
          {this.props.players && (
            <List
              loading={isLoading}
              header={
                <React.Fragment>
                  <Dropdown
                    overlay={
                      <Menu onClick={this.handleFilter}>
                        <Menu.Item key="0">Position</Menu.Item>
                        <Menu.Item key="1">Team</Menu.Item>
                      </Menu>
                    }
                    trigger={['click']}
                  >
                    <a className="ant-dropdown-link" href="#">
                      Sort Players <Icon type="down" />
                    </a>
                  </Dropdown>
                  <div style={{ marginBottom: `20px` }} />

                  <Search
                    placeholder="search players"
                    onSearch={value => console.log(value)}
                    onChange={this.handleSearchInput}
                    css={searchStyle}
                    size="large"
                  />
                </React.Fragment>
              }
              css={listStyle}
              size="large"
              pagination={{
                onChange: page => {
                  console.log(page)
                },
                pageSize: 5,
              }}
              bordered
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={item.name}
                  />
                  <div css={playerDetailWrapper}>
                    <h5>{item.teamAbbr}</h5>
                    <h5 css={playerPositionStyle}>{item.position}</h5>
                  </div>
                </List.Item>
              )}
            />
          )}
        </StyledContent>
      </ThemeLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    hasErrored: state.playersHasErrored,
    isLoading: state.playersIsLoading,
    players: filteredPlayers(state),
    filteredByName: filteredByName(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(playersFetchData(url)),
    searchTerm: val => dispatch(searchTerm(val)),
    filterTerm: val => dispatch(filterTerm(val)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersPage)

PlayersPage.propTypes = {
  children: PropTypes.node.isRequired,
  players: PropTypes.array.isRequired,
  filteredByName: PropTypes.array,
  hasErrored: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
}
