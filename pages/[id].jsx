import React from 'react'
import Tabs from '../components/Tabs'
import Table from '../components/Table'
import fetch from 'isomorphic-unfetch'
import Fixtures from '../components/Fixtures'
import Message from '../components/Message'
import FormTable from '../components/FormTable'
import TournamentGraph from '../components/TournamentGraph'
import Head from 'next/head'
import get from '../lib/api'

const Tournament = (props) => {
    const title = `FPL Cup ${props.name}`
    return ( 
        <div className="container">
            <Head>
                <title>{title}</title>
            </Head>
            <div className="header">
                <h1>{title}</h1>
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
                <Tabs tabtitle="Group Stats" color="red">
                    <Table tabtitle="Overall Table"
                            players={props.players}
                            tablePlayerIds={Object.keys(props.players).map(playerId => playerId)}
                    ></Table>
                    <FormTable tabtitle="Form" players={props.players}>

                    </FormTable>
                </Tabs>
                { props.fixtures['Last 32'] &&
                    <Tabs tabtitle="Knockouts" test={true} color="red">
                        <div tabtitle="Graph">
                            <TournamentGraph fixtures={props.fixtures}
                                             players={props.players}/>
                        </div>
                        <Tabs tabtitle="Fixtures" color="teal">
                            <Fixtures tabtitle="Last 32"
                                    fixtures={props.fixtures['Last 32']}
                                    players={props.players}>
                            </Fixtures>
                            { 
                                props.fixtures['Last 16'] &&
                                    <Fixtures tabtitle="Last 16"
                                        fixtures={props.fixtures['Last 16']}
                                        players={props.players}>
                                    </Fixtures>
                            }
                            {
                                props.fixtures['Quarter Finals'] &&
                                    <Fixtures tabtitle="Quarter Finals"
                                        fixtures={props.fixtures['Quarter Finals']}
                                        players={props.players}>
                                    </Fixtures>
                            }
                            {
                                props.fixtures['Semi Finals'] &&
                                    <Fixtures tabtitle="Semi Finals"
                                        fixtures={props.fixtures['Semi Finals']}
                                        players={props.players}>
                                    </Fixtures>
                            }
                            {
                                props.fixtures['Final'] &&
                                    <Fixtures tabtitle="Final"
                                        fixtures={props.fixtures['Final']}
                                        players={props.players}>
                                    </Fixtures>
                            }
                        </Tabs>
                    </Tabs>
                }
            </Tabs>
            <style jsx>{`
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
    const {name, numberOfGroupTeamsToProgress, players, tables, fixtures, knockout, updates} = await get({endpoint: `/tournament/${uid}`})

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