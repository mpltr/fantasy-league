import React, { Component } from 'react';

class Fixtures extends Component {
 
    state = {  }
    
    render() { 
        return ( 
            <div className="container">
                {this.props.fixtures && Object.keys(this.props.fixtures).map((date, i) => {
                    return (
                        <div className="wrapper" key={i}>
                            <h3 className="date">{date}</h3>
                            <div className="week-fixtures">
                                {this.props.fixtures[date].map((fixture, k) => {
                                    const homePlayer = this.props.players[fixture.homePlayerId];
                                    const awayPlayer = this.props.players[fixture.awayPlayerId];
                                    return(
                                        <div className="fixture" key={k}>
                                            <div className="name home">{homePlayer.name}</div>
                                            <div className="score">{fixture.homePlayerScore || '-'}</div>
                                            <div className="score">{fixture.awayPlayerScore || '-'}</div>
                                            <div className="name">{awayPlayer.name}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
                   <style jsx>{`
                        .container {
                            padding-top: 32px;
                        }
                        .week-fixtures {
                            padding: 8px 0 32px 0;
                        }
                        .fixture {
                            display: flex;
                            justify-content: center;
                            margin-bottom: 4px;
                        }
                        .date {
                            display: block;
                            font-size: 13px;
                            text-align: center;
                            color: var(--darkGrey);
                            font-weight: bold;
                            margin-bottom: 8px;
                        }
                        .name {
                            width: calc(50% - 42px);
                            padding: 4px 8px;
                            color: var(--darkGrey);
                        }

                        .home {
                            text-align: right;
                            padding: 4px 8px;
                        }

                        .score {
                            width: 40px;
                            color: var(--darkGrey);
                            background-color: var(--lightGrey);
                            margin: 0 1px;
                            padding: 4px;
                            text-align: center;
                        }
                        @media (max-width: 567px) {
                            .container {
                                padding-top: 8px;
                            }                           
                        }
                    `}</style>
            </div>
        );
    }
}
 
export default Fixtures;