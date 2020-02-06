import React, {Component, useState} from 'react'
import { withRedux } from '../lib/redux'
import Input from '../components/Input'
import Counter from '../components/Counter'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counterValue: 1,
      players: []
    }
  }
  
  renderPlayers = () => {
    const players = [];
    for (let i = 0; i < counterValue; i++) {
      players.push(<Input index={i} />)
    }
    return players;
  }

  render() {
    return (
      <>
        <Counter callback={(newValue) => setState({counterValue: newValue})}/>
        {this.renderPlayers()}
      </>
    )
  }
}

// IndexPage.getInitialProps = ({ reduxStore }) => {
//   // Tick the time once, so we'll have a
//   // valid time before first render
//   return {}
// }

export default withRedux(IndexPage)
