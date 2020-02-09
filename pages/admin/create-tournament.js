import React, { Component } from 'react';
import NewPlayer from '../../components/NewPlayer';
import Router from 'next/router';

class CreateTournament extends Component {
    state = {
        screen: 0,
        noPlayers: 2,
        noGroups: 1,
        startDate: '',
        noPvp: 1,
        weeksBetweenFixtures: 3,
        playersToProgress: 1,
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

    createTournament = () => {
        alert('Tournament Created');
        Router.push('/tournaments/1234');
    }
    
    renderSettings() {
        return (
            <div>
                <h2>Tournament Settings</h2>
                <label for="noPlayers">Number of Players</label>
                <input name="noPlayers" 
                       type="number" 
                       value={this.state.noPlayers}
                       min="2" 
                       max="60"
                       onChange={(e) => this.setState({noPlayers: e.target.value})}
                       ></input>
                <label for="noGroups">Number of Groups</label>
                <input name="noGroups"
                    type="number"
                    value={this.state.noGroups}
                    min="1"
                    max="10"
                    onChange={(e) => this.setState({ noGroups: e.target.value })}
                ></input>
                <label for="noPvp">Number of Times to play each player in group</label>
                <input name="noPvp"
                    type="number"
                    value={this.state.noPvp}
                    min="1"
                    max="4"
                    onChange={(e) => this.setState({ noPvp: e.target.value })}
                ></input>
                <label for="weeksBetweenFixtures">Weeks between fixtures</label>
                <input name="weeksBetweenFixtures"
                    type="number"
                    value={this.state.weeksBetweenFixtures}
                    min="1"
                    max="10"
                    onChange={(e) => this.setState({ weeksBetweenFixtures: e.target.value })}
                ></input>
                <label for="playersToProgress">Number of Players to progress from each group</label>
                <input name="playersToProgress"
                    type="number"
                    value={this.state.playersToProgress}
                    min="1"
                    max="4"
                    onChange={(e) => this.setState({ playersToProgress: e.target.value })}
                ></input>
                <label for="startDate">Start Date</label>
                <input name="startDate"
                    type="date"
                    value={this.state.startDate}
                    onChange={(e) => this.setState({ startDate: e.target.value })}
                ></input>
            </div>
        )
    }
    
    renderPlayers = () => {
        const players = [];
        for (let i = 0; i < this.state.noPlayers; i++) {
            players.push(
                <NewPlayer index={i} player={this.state.newPlayers[i] ?? null} update={this.updatePlayerValue} />
            )
        }
        return (
            <div >
                {players}
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.state.screen > 0 && <button onClick={() => this.setState({screen: this.state.screen - 1 })}>Prev</button>}
                {this.state.screen < 1 && <button onClick={() => this.setState({ screen: this.state.screen + 1 })}>Next</button>}
                {this.state.screen === 1 && <button onClick={() => this.createTournament()}>Create Tournament</button>}
                {this.state.screen === 0 && this.renderSettings()}
                {this.state.screen === 1 && this.renderPlayers()}
            </ div>
        )
    }
}

export default CreateTournament;