import React, { Component } from 'react';
import Counter from '../components/Counter';
import NewPlayer from '../components/NewPlayer';

class RegisterTournament extends Component {
    state = {
        screen: 0,
        counterValue: 1,
        newPlayers: []
    }

    updatePlayerValue = (index, key, value) => {
        const newPlayersState = this.state.newPlayers
        if (!newPlayersState[index]) newPlayersState[index] = {}
        newPlayersState[index][key] = value
        this.setState({
            newPlayers: newPlayersState
        })
    }
    
    renderConfig() {
        return <div>Config</div>
    }
    
    renderPlayers = () => {
        const players = [];
        for (let i = 0; i < this.state.counterValue; i++) {
            players.push(
                <NewPlayer index={i} player={this.state.newPlayers[i] ?? null} update={this.updatePlayerValue} />
            )
        }
        return (
            <div >
                <Counter callback={(newValue) => this.setState({ counterValue: newValue })} />
                {players}
            </div>
        );
    }
    render() {
        return (
            <div style={{display: 'flex'}}>
                {this.state.screen > 0 && <button onClick={() => this.setState({screen: this.state.screen - 1 })}>Prev</button>}
                {this.state.screen === 0 && this.renderConfig()}
                {this.state.screen === 1 && this.renderPlayers()}
                {this.state.screen < 1 && <button onClick={() => this.setState({ screen: this.state.screen + 1 })}>Next</button>}
            </ div>
        )
    }
}

export default RegisterTournament;