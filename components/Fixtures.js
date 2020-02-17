import React, { Component } from 'react';

class Fixtures extends Component {
 
    state = {  }
    
    render() { 
        return ( 
            <div>
                {this.props.fixtures && Object.keys(this.props.fixtures).map((date, i) => {
                    return (
                        <div key={i}>
                            <h3 className="date">{date}</h3>
                            <div className="week-fixtures">
                                {this.props.fixtures[date].map((fixture, k) => {
                                    const homePlayer = this.props.players[fixture.homePlayerId];
                                    const awayPlayer = this.props.players[fixture.awayPlayerId];
                                    return(
                                        <div className="fixture" key={k}>
                                            <div className="name home">{homePlayer.name}</div>
                                            <div className="score">{fixture.homePlayerScore}-</div>
                                            <div className="score">{fixture.awayPlayerScore}-</div>
                                            <div className="name">{awayPlayer.name}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
                   <style jsx>{`
                        .week-fixtures {
                            padding: 2px 0 16px 0;
                        }
                        .fixture {
                            display: flex;
                            justify-content: center;
                            margin-bottom: 4px;
                        }
                        .date {
                            display: block;
                            font-size: 12px;
                            text-align: center;
                            color: dark-grey;
                            font-weight: 100;
                            margin-bottom: 8px;
                        }
                        .name {
                            width: calc(50% - 42px);
                            padding: 4px 8px;
                            color: grey;
                        }

                        .home {
                            text-align: right;
                            padding: 4px 8px;
                        }

                        .score {
                            width: 40px;
                            background-color: #f0f0f0;
                            margin: 0 1px;
                            padding: 4px;
                            text-align: center;
                        }
                    `}</style>
            </div>
        );
    }
}
 
export default Fixtures;