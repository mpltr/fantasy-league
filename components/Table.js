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
                    <td className="cell">{this.props.players[playerId].name}</td>
                    <td className="cell">{this.props.players[playerId].played || 0}</td>
                    <td className="cell">{this.props.players[playerId].win || 0}</td>
                    <td className="cell">{this.props.players[playerId].draw || 0}</td>
                    <td className="cell">{this.props.players[playerId].loss || 0}</td>
                    <td className="cell">{this.props.players[playerId].for || 0}</td>
                    <td className="cell">{this.props.players[playerId].against || 0}</td>
                    <td className="cell">{this.props.players[playerId].gd || 0}</td>
                    <td className="cell">{this.props.players[playerId].points || 0}</td>
                    <style jsx>{`
                        .cell {
                            text-align: center;
                            color: var(--dark-grey);
                            padding: 6px 0 6px 8px;
                            font-size: 13px;
                        }
                        .cell:first-child {
                            text-align: left;
                        }
                    `}
                    </style>
                </tr>
            )
        })
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={(e) => this.setSort(e)}
                            className="header-cell">
                            
                        </th>
                        <th onClick={(e) => this.setSort(e)}
                            className="header-cell">
                            P
                        </th>
                        <th onClick={(e) => this.setSort(e)}
                            className="header-cell">
                            W
                        </th>
                        <th onClick={(e) => this.setSort(e)}
                            className="header-cell">
                            D
                        </th>
                        <th onClick={(e) => this.setSort(e)}
                            className="header-cell">
                            L
                        </th>
                        <th onClick={(e) => this.setSort(e)}
                            className="header-cell">
                            PF
                        </th>
                        <th onClick={(e) => this.setSort(e)}
                            className="header-cell">
                            PA
                        </th>
                        <th onClick={(e) => this.setSort(e)}
                            className="header-cell">
                            PD
                        </th>
                        <th onClick={(e) => this.setSort(e)}
                            className="header-cell">
                            PTS
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderPlayers()}
                </tbody>

                <style jsx>{`
                        * {
                            // border: 1px solid grey;
                        }
                        .table {
                            width: 100%;
                        }
                        .header-cell {
                            font-weight: bold;
                            margin: 0;
                            width: 10%;
                            text-align: center;
                            color: var(--dark-grey);
                            padding: 8px 0 8px 8px;
                        }
                        .header-cell:first-child {
                            width: 20%;
                            text-align: left;
                        }
                        .test {
                            text-align: center;
                            background-color: red;
                        }
                    `}
                </style>
            </table>
        );
    }
}

export default Table