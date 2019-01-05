import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Button, Layout } from 'antd'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import 'whatwg-fetch';
import ThemeLayout from '../components/layout'
import SEO from '../components/seo'
import { playersFetchData } from '../actions/players';

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

class PlayersPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoading: false,
      hasErrored: false
    }
  }
  componentDidMount() {
    //this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }
 
  render = () => {
    const { count, increment, simpleAction, fetchData } = this.props
    const { isLoading, items, hasErrored } = this.state

    return (
      <ThemeLayout>
        <SEO title="Players Page" />
        <StyledContent>
          <h1>this is a players page</h1>
          <p>Welcome to players page</p>
          { <ul>
                {this.props.players&&this.props.players.map((player) => (
                    <li key={player.id}>
                        {player.label}
                    </li>
                ))}
            </ul>}
            <p>Count: {count}</p>
            <button onClick={increment} style={{ backgroundColor: 'green' }}>
              Increment
            </button>
            <button onClick={() => this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items')} style={{ backgroundColor: 'blue' }}>
              fetch
            </button>
          <Link to="/">Go back to the homepage</Link>
        </StyledContent>
      </ThemeLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      count: state.simpleReducer.count,
      players: state.players,
      hasErrored: state.playersHasErrored,
      isLoading: state.playersIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }), fetchData: (url) => dispatch(playersFetchData(url))}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersPage)
