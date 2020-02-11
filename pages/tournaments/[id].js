import React from 'react'
import Tabs from '../../components/Tabs'
import Table from '../../components/Table'

const Tournament = (props) => {
    const tournamentId = props.url.query.id;
    return ( 
        <div>
            Tournament {tournamentId} Page

            <Tabs>
                <div tabtitle="Groups">
                    <h2>Groups</h2>
                    <Tabs>
                        <div tabtitle="Group A">
                            <h3>Group A</h3>
                            <Tabs>
                                <Table tabtitle="Table"
                                       players={props.players}
                                       groupfilter="a">

                                </Table>
                                <div tabtitle="Fixtures">
                                    Fixtures
                                </div>
                            </Tabs>
                        </div>
                        <div tabtitle="Group B">
                            <h3>Group B</h3>
                            <Tabs>
                                <div tabtitle="Table">
                                    Table
                                </div>
                                <div tabtitle="Fixtures">
                                    Fixtures
                                </div>
                            </Tabs>
                        </div>
                        <div tabtitle="Group C">
                            <h3>Group C</h3>
                            <Tabs>
                                <div tabtitle="Table">
                                    Table
                                </div>
                                <div tabtitle="Fixtures">
                                    Fixtures
                                </div>
                            </Tabs>
                        </div>
                        <div tabtitle="Group d">
                            <h3>Group D</h3>
                            <Tabs>
                                <div tabtitle="Table">
                                    Table
                                </div>
                                <div tabtitle="Fixtures">
                                    Fixtures
                                </div>
                            </Tabs>
                        </div>
                        
                    </Tabs>
                </div>
                <div tabtitle="Knockout">Knockout</div>
                <div tabtitle="Stats">Stats</div>
            </Tabs>
        </div>
     );
}

Tournament.getInitialProps = () => {
    return {
        players: [
            {
                ID: 1,
                name: 'Matt',
                fplLink: 'http://google.co.uk',
                userId: 1,
                group: 'a',
                played: 8,
                won: 6,
                lost: 2,
                drawn: 0,
                for: 564,
                against: 321,
                gd: 243,
                points: 18
            },
            {
                ID: 2,
                name: 'Tom',
                fplLink: 'http://amazon.co.uk',
                userId: 0,
                group: 'a',
                played: 8,
                won: 2,
                lost: 6,
                drawn: 0,
                for: 321,
                against: 564,
                gd: -243,
                points: 6
            }          
        ],
        groups: {
            a: {
                
            }
        },
        knockout: {

        },
        stats: {

        }
    }
}
 
export default Tournament;