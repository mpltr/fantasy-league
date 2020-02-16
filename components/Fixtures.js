import React, { Component } from 'react';

class Fixtures extends Component {
 
    state = {  }
    
    render() { 
        return ( 
            <div>
                {this.props.fixtures && Object.keys(this.props.fixtures).map((date, i) => {
                    return (
                        <div key={i}>
                            <h3>{date}</h3>
                            {this.props.fixtures[date].map((fixture, k) => {
                                const homePlayer = this.props.players[fixture.homePlayerId];
                                const awayPlayer = this.props.players[fixture.awayPlayerId];
                                return(
                                    <div className="fixture" key={k}>
                                        <div>{homePlayer.name}</div>
                                        <div>{fixture.homePlayerScore}</div>
                                        <div>-</div>
                                        <div>{fixture.awayPlayerScore}</div>
                                        <div>{awayPlayer.name}</div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
                   <style jsx>{`
                        .fixture {
                            display: flex;
                            justify-content: center;
                        }
                    `}</style>
            </div>
        );
    }
}
 
export default Fixtures;