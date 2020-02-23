import React from 'react'
import Tabs from '../../components/Tabs'
import Table from '../../components/Table'
import fetch from 'isomorphic-fetch'
import Fixtures from '../../components/Fixtures'

const Tournament = (props) => {
    return ( 
        <div className="container">
            <h1>{props.name}</h1>
            <Tabs>
                <div tabtitle="Groups">
                    <Tabs>
                        {props.tables && Object.keys(props.tables).map((key, i) => {
                            return (
                                <div key={i} tabtitle={`Group  ${key}`} >
                                    <Tabs>
                                        <Table tabtitle="Table"
                                                players={props.players}
                                                tablePlayerIds={props.tables[key]}
                                                numberOfGroupTeamsToProgress={props.numberOfGroupTeamsToProgress}>
                                        </Table>
                                        <Fixtures tabtitle="Fixtures"
                                                    fixtures={props.fixtures[key]}
                                                    players={props.players}>
                                            Fixtures
                                        </Fixtures>
                                    </Tabs>
                                </div>
                            );
                        })}
                    </Tabs>
                </div>
                { props.fixtures['Last 16'] &&
                    <Tabs tabtitle="Knockouts" test={true} >
                        <Fixtures tabtitle="Last 16"
                                  fixtures={props.fixtures['Last 16']}
                                  players={props.players}>
                        </Fixtures>
                        {/* <div></div> */}
                    </Tabs>
                }
                <div tabtitle="Stats">
                    <Tabs>
                        <Table tabtitle="Overall Table"
                               players={props.players}
                               tablePlayerIds={Object.keys(props.players).map(playerId => playerId)}
                        ></Table>
                    </Tabs>
                </div>
            </Tabs>
            <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: auto;
                }
                h1 {
                    color: var(--darkGrey);
                }
            `}</style>
        </div>
    )
}

Tournament.getInitialProps = async (context) => {

    const uid = context.query.id;
    const data = await fetch(`http://localhost/fantasy-league-api/public/get-tournament/${uid}`).then(res => res.json());

    return {
        name: data.name, 
        numberOfGroupTeamsToProgress: data.numberOfGroupTeamsToProgress, 
        players: data.players,
        tables: data.tables,
        fixtures: data.fixtures,
        knockout: data.knockout
    };
}
 
export default Tournament;