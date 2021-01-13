import React, {useState, useCallback} from 'react'
import Fixtures from '../../../components/Fixtures'
import CustomLink from '../../../components/CustomLink';
import { get, post, put } from '../../../lib/api'
import { getClosestDate } from '../../../lib/date'

const UpdateScores = (props) => {
    // create state from props
    const [fixtures, updateFixtures] = useState(props.mergedFixtures)
    const dates = Object.keys(fixtures);
    const closestDate = getClosestDate(dates);
    const [selectedDate, setSelectedDate] = useState(closestDate)
    const selectedFixtures = {}
    selectedFixtures[selectedDate] = fixtures[selectedDate]

    const submitToApi = useCallback(() => {

        // console.log(JSON.stringify(
        //     {
        //         fixtures: fixtures, 
        //         id: props.id
        //     }
        // ));
        // return;
        post({
            endpoint: 'fixtures',
            params: {
                fixtures: fixtures, 
                id: props.id
            }
        }).then(res => res.json()).then(response => {
            const message = response.status ? response.message : response.error
            alert(message)
            location.reload()
        }).catch(err => {
            console.error(err)
        })

    })

    const revertStage = useCallback(() => {
        const proceed = confirm(`WARNING: This will delete all fixtures and results for the ${props.stage}! Do you want to continue?`);

        if(proceed) {
            put({
                endpoint: `tournament/revert/${props.uid}`
            }).then(res => res.json()).then(response => {
                const message = response.status ? response.message : response.error
                alert(message)
                location.reload()
            }).catch(err => {
                console.error(err)
            })
        }
    })
    
    return ( 
        <div className="container">
            <div className="header">
                <h1>{props.name} ({props.stage})</h1>
                <CustomLink url={`/tournaments/${props.uid}`} label="Tournament Home" target="_blank"/> 
                {props.stage !== 'Group' && 
                    <button onClick={revertStage}>Revert to last stage</button>
                }
                <button onClick={submitToApi}>Update Scores</button>
            </div>
            <Fixtures fixtures={fixtures} 
                      players={props.players} 
                      editmode={true}
                      updateFixtures={updateFixtures}/>
           
            <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: auto;
                }
                .header {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    height: 39px;
                }
                button {
                    margin-right: 16px;
                }
                h1 {
                    margin: 0;
                    margin-right: auto;
                }
            `}</style>
        </div>
    )
}

UpdateScores.getInitialProps = async (context) => {

    const uid = context.query.id
    const data = await get({endpoint: `/tournament/${uid}`})

    // merge fixtures
    const mergedFixtures =  {}
    Object.keys(data.fixtures).forEach(groupLetter => {
        Object.keys(data.fixtures[groupLetter]).forEach(date => {
            if(!mergedFixtures[date]) {
                mergedFixtures[date] = data.fixtures[groupLetter][date]
            } else {
                mergedFixtures[date] = mergedFixtures[date].concat(data.fixtures[groupLetter][date])
            }
        })
    })

    return {
        id: data.id,
        uid: uid, 
        name: data.name, 
        players: data.players,
        tables: data.tables,
        fixtures: data.fixtures,
        mergedFixtures: mergedFixtures,
        stage: data.stage
    }
    return {}
}
 
 
export default UpdateScores