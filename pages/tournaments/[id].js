import React from 'react'
import Tabs from '../../components/Tabs'
import Table from '../../components/Table'
import fetch from 'isomorphic-fetch'
import Fixtures from '../../components/Fixtures'

const Tournament = (props) => {
    return ( 
        <div className="container">
            <h1>{`FPL Cup ${props.name}`}</h1>
            <Tabs>
                <Tabs tabtitle="Groups">
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
                { props.fixtures['Last 16'] &&
                    <Tabs tabtitle="Knockouts" test={true} >
                        <Fixtures tabtitle="Last 16"
                                  fixtures={props.fixtures['Last 16']}
                                  players={props.players}>
                        </Fixtures>
                        {/* <div></div> */}
                    </Tabs>
                }
                <Tabs tabtitle="Stats">
                    <Table tabtitle="Overall Table"
                            players={props.players}
                            tablePlayerIds={Object.keys(props.players).map(playerId => playerId)}
                    ></Table>
                </Tabs>
                
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
    const data = await fetch(`${process.env.NEXT_PUBLIC_API}/get-tournament/${uid}`).then(res => res.json());

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