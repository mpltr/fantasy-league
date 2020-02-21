import React from 'react'
import Tabs from '../../components/Tabs'
import Table from '../../components/Table'
import fetch from 'isomorphic-fetch'
import Fixtures from '../../components/Fixtures'

const Tournament = (props) => {
    const tournamentId = props.url.query.id;

    return ( 
        <div className="container">
            <h1>{props.name}</h1>
            <Tabs>
                <div tabtitle="Groups">
                    
                    <Tabs>
                            {props.tables && Object.keys(props.tables).map((key, i) => {
                                return (
                                    <div tabtitle={`Group  ${key}`} >
                            
                                        <Tabs>
                                            <Table tabtitle="Table"
                                                    players={props.players}
                                                    tablePlayerIds={props.tables[key]}>
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
                <div tabtitle="Knockout">Knockout</div>
                <div tabtitle="Stats">Stats</div>
            </Tabs>
            <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: auto;
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
        players: data.players,
        tables: data.tables,
        fixtures: data.fixtures
    };
}
 
export default Tournament;