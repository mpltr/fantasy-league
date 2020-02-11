import React, { Component } from 'react'

class Table extends Component {
    state = {
        sortBy: 'points',
        sortType: 1
    }

    setSort(e) {
        const newSortBy = e.target.innerText.toLowerCase()
        console.log(newSortBy);
        
        // change sort type if already sorted by new sort by
        if (this.state.sortBy === newSortBy) {
            this.setState({ sortType: !this.state.sortType })    
        } else {
            this.setState({sortBy: newSortBy})
        }

    }

    renderPlayers() {
        return this.props.players.filter(player => {
            if(this.props.groupfilter) return player.group === this.props.groupfilter
        }).sort((playerA, playerB) => {
            return playerA[this.state.sortBy] < playerB[this.state.sortBy] ? this.state.sortType : -this.state.sortType
        }).map(player => {
            return (
                <tr>
                    <td>{player.name}</td>
                    <td>{player.played}</td>
                    <td>{player.won}</td>
                    <td>{player.drawn}</td>
                    <td>{player.lost}</td>
                    <td>{player.for}</td>
                    <td>{player.against}</td>
                    <td>{player.gd}</td>
                    <td>{player.points}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th onClick={(e) => this.setSort(e)}>
                            Player
                        </th>
                        <th onClick={(e) => this.setSort(e)}>
                            Played
                        </th>
                        <th onClick={(e) => this.setSort(e)}>
                            Won
                        </th>
                        <th onClick={(e) => this.setSort(e)}>
                            Drawn
                        </th>
                        <th onClick={(e) => this.setSort(e)}>
                            Lost
                        </th>
                        <th onClick={(e) => this.setSort(e)}>
                            For
                        </th>
                        <th onClick={(e) => this.setSort(e)}>
                            Against
                        </th>
                        <th onClick={(e) => this.setSort(e)}>
                            GD
                        </th>
                        <th onClick={(e) => this.setSort(e)}>
                            Points
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderPlayers()}
                </tbody>
            </table>
        );
    }
}

export default Table