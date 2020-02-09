import React from 'react'
import Tabs from '../../components/Tabs'

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
                                <div tabtitle="Table">
                                    Table
                                </div>
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
        players: {
            1: {
                group: 'a',
                played: 8,
                won: 6,
                lost: 2,
                drawn: 0,
                for: 564,
                against: 321,
                gd: 243,
                points: 18
            }           
        },
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