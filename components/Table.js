import React, { Component } from 'react'

class Table extends Component {
    state = {
        sortBy: 'points',
        descending: true
    }

    setSort(e) {
        const newSortBy = e.target.innerText.toLowerCase()
        const sortLookup = {
            p: 'played',
            w: 'win',
            d: 'draw',
            l: 'loss',
            pf: 'for',
            pa: 'against',
            pd: 'gd',
            pts: 'points'
        }
        
        // change sort type if already sorted by new sort by
        if (this.state.sortBy === sortLookup[newSortBy]) {
            this.setState({ descending: !this.state.descending })    
        } else {
            this.setState({sortBy: sortLookup[newSortBy]})
        }

    }

    renderPlayers() {
        return this.props.tablePlayerIds.sort((a,b) => {
            const aPrimary = this.props.players[a][this.state.sortBy] || 0;
            const bPrimary = this.props.players[b][this.state.sortBy] || 0;
            const aSecondary = this.props.players[a].gd || 0
            const bSecondary = this.props.players[b].gd || 0
            if(aPrimary == bPrimary) return this.state.descending ? bSecondary - aSecondary : aSecondary - bSecondary;
            return this.state.descending ? bPrimary - aPrimary : aPrimary - bPrimary;
        }).map((playerId, i) => {
            return (
                <tr>
                    <td className="cell">{this.props.players[playerId].name}</td>
                    <td className="cell">{this.props.players[playerId].played || 0}</td>
                    <td className="cell no-mobile">{this.props.players[playerId].win || 0}</td>
                    <td className="cell no-mobile">{this.props.players[playerId].draw || 0}</td>
                    <td className="cell no-mobile">{this.props.players[playerId].loss || 0}</td>
                    <td className="cell no-mobile">{this.props.players[playerId].for || 0}</td>
                    <td className="cell no-mobile">{this.props.players[playerId].against || 0}</td>
                    <td className="cell">{this.props.players[playerId].gd || 0}</td>
                    <td className="cell">{this.props.players[playerId].points || 0}</td>
                    <style jsx>{`
                        .cell {
                            text-align: center;
                            color: var(--darkGrey);
                            padding: 6px 0 6px 8px;
                            font-size: 13px;
                        }
                        .cell:first-child {
                            text-align: left;
                        }

                        @media (max-width: 567px) {
                            .no-mobile {
                                display: none;
                            }
                        }
                    `}
                    </style>
                </tr>
            )
        })
    }

    render() {
        return (
            <>
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
                                className="header-cell no-mobile">
                                W
                            </th>
                            <th onClick={(e) => this.setSort(e)}
                                className="header-cell no-mobile">
                                D
                            </th>
                            <th onClick={(e) => this.setSort(e)}
                                className="header-cell no-mobile">
                                L
                            </th>
                            <th onClick={(e) => this.setSort(e)}
                                className="header-cell no-mobile">
                                PF
                            </th>
                            <th onClick={(e) => this.setSort(e)}
                                className="header-cell no-mobile">
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
                </table>
                <div className="rotate">Rotate for more info</div>
                <style jsx>{`
                        * {
                            // border: 1px solid grey;
                        }
                        .table {
                            width: 100%;
                            margin-top: 52px;
                        }
                        .header-cell {
                            font-weight: bold;
                            margin: 0;
                            width: 10%;
                            text-align: center;
                            color: var(--darkGrey);
                            padding: 8px 0 8px 8px;
                            cursor: pointer;
                        }
                        .header-cell:first-child {
                            width: 20%;
                            text-align: left;
                        }
                        .test {
                            text-align: center;
                            background-color: red;
                        }
                        .rotate {
                            display: none;
                        }
                        @media (max-width: 567px) {
                            .table {
                                margin-top: 16px;
                            }
                            .no-mobile {
                                display: none;
                            }
                            .rotate {
                                display: block;
                                text-align: center;
                                margin-top: 32px;
                            }
                        }
                    `}
                </style>
            </>
        );
    }
}

export default Table