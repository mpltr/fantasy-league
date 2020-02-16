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
        return this.props.tablePlayerIds.map((playerId, i) => {
            return (
                <tr>
                    <td>{this.props.players[playerId].name}</td>
                    <td>{this.props.players[playerId].played || 0}</td>
                    <td>{this.props.players[playerId].win || 0}</td>
                    <td>{this.props.players[playerId].draw || 0}</td>
                    <td>{this.props.players[playerId].loss || 0}</td>
                    <td>{this.props.players[playerId].for || 0}</td>
                    <td>{this.props.players[playerId].against || 0}</td>
                    <td>{this.props.players[playerId].gd || 0}</td>
                    <td>{this.props.players[playerId].points || 0}</td>
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