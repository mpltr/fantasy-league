import React, { Component } from 'react';
import NewPlayer from '../../components/NewPlayer';
import Router from 'next/router';

class CreateTournament extends Component {
    state = {
        screen: 0,
        tournamentName: '',
        numberOfPlayers: 2,
        numberOfGroups: 1,
        startDate: '',
        numberOfPvpFixtures: 1,
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
        fetch('http://localhost:8000/createTournament', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({data: this.state})
        }).then(res => res.json()).then((response) => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
    }
    
    renderSettings() {
        
        return (
            <div>
                <h2>Tournament Settings</h2>
                <label for="tournamentName">Tournament Name</label>
                <input name="tournamentName"
                       value={this.state.tournamentName}
                       onChange={(e) => this.setState({tournamentName: e.target.value})}
                       ></input>
                <label for="numberOfPlayers">Number of Players</label>
                <input name="numberOfPlayers" 
                       type="number" 
                       value={this.state.numberOfPlayers}
                       min="2" 
                       max="60"
                       onChange={(e) => this.setState({numberOfPlayers: e.target.value})}
                       ></input>
                <label for="numberOfGroups">Number of Groups</label>
                <input name="numberOfGroups"
                    type="number"
                    value={this.state.numberOfGroups}
                    min="1"
                    max="10"
                    onChange={(e) => this.setState({ numberOfGroups: e.target.value })}
                ></input>
                <label for="numberOfPvpFixtures">Number of Times to play each player in group</label>
                <input name="numberOfPvpFixtures"
                    type="number"
                    value={this.state.numberOfPvpFixtures}
                    min="1"
                    max="4"
                    onChange={(e) => this.setState({ numberOfPvpFixtures: e.target.value })}
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
        for (let i = 0; i < this.state.numberOfPlayers; i++) {
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