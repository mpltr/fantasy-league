import React from 'react'
import Tabs from '../components/Tabs'
import Table from '../components/Table'
import fetch from 'isomorphic-fetch'
import Fixtures from '../components/Fixtures'
import Message from '../components/Message'

const Tournament = (props) => {
    return ( 
        <div className="container">
            <div className="header">
                <h1>{`FPL Cup ${props.name}`}</h1>
                <Message updates={props.updates}/>
            </div>
            <Tabs color="purple">
                <Tabs tabtitle="Groups" color="red">
                    {props.tables && Object.keys(props.tables).map((key, i) => {
                        return (
                            <div key={i} tabtitle={`Group  ${key}`} >
                                <Tabs color="teal">
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
                    <Tabs tabtitle="Knockouts" test={true} color="red">
                        <Fixtures tabtitle="Last 16"
                                  fixtures={props.fixtures['Last 16']}
                                  players={props.players}>
                        </Fixtures>
                        {/* <div></div> */}
                    </Tabs>
                }
                <Tabs tabtitle="Stats" color="red">
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
                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
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
    const {name, numberOfGroupTeamsToProgress, players, tables, fixtures, knockout, updates} = await fetch(`${process.env.NEXT_PUBLIC_API}/tournament/${uid}`).then(res => res.json());

    return {
        name,
        numberOfGroupTeamsToProgress,
        players,
        tables,
        fixtures,
        knockout,
        updates,
    };
}
 
export default Tournament;