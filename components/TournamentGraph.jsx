import React from 'react';

const TournamentGraph = ({fixtures, players}) => {
    const stages = ['Last 32', 'Last 16', 'Quarter Finals', 'Semi Finals', 'Final']

    const leftHalf = {};
    const rightHalf = {};
    const final = {};

    const fixtureComponents = (fixtures, reverse = false) => fixtures.map(fixture => {
        return (
            <div className="fixture">
                <div className={`player ${reverse ? 'reverse' : ''}`}>{players[fixture.homePlayerId].name}{fixture.homePlayerScore && <span>{fixture.homePlayerScore}</span>}</div>
                <div className={`player ${reverse ? 'reverse' : ''}`}>{players[fixture.awayPlayerId].name}{fixture.awayPlayerScore && <span>{fixture.awayPlayerScore}</span>}</div>
                <style jsx>{`
                    .fixture {
                        width: 196px;
                        margin: 4px 0;
                    }
                    .player {
                        border: 1px solid var(--darkGrey);
                        font-size: 12px;
                        margin: 2px 0;
                        text-align: center;
                        border-radius: 3px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding-left: 8px;
                        height: 31px;
                    }

                    .player > span {
                        background-color: var(--teal);
                        color: var(--white);
                        width: 50px;
                        padding: 4px 8px;
                        font-size: 14px;
                        display: block;
                        padding: 6px 0;
                        height: 100%;
                    }

                    .reverse {
                        flex-direction: row-reverse;
                        padding-left: 0;
                        padding-right: 8px;
                    }
                `}</style>
            </div>
        )
    })

    const fixturePlaceholderComponents = (count) => {
        const placeholders = [];
        for(let i = 0; i < count; i++) {
            placeholders.push(
                <div className="placeholder">
                    <div className="player"></div>
                    <div className="player"></div>
                    <style jsx>{`
                        .placeholder {
                            width: 150px;
                            margin: 2px 0;
                        }
                        .player {
                            border: 1px solid grey;
                            font-size: 16px;
                            margin: 4px 0;
                            text-align: center;
                            border-radius: 3px;
                            display: flex;
                            justify-content: space-between;
                            padding: 4px 8px;
                            background-color: var(--lightGrey);
                            height: 31px;
                        }
                    `}</style>
                </div>
            )
        }
        return placeholders;
    }

    let divide = 1;
    stages.forEach((stage, i) => {
        const fixturesForStage = fixtures[stage] ? [...fixtures[stage][Object.keys(fixtures[stage])[0]]] : null
        
        if(fixturesForStage) {
            if(stage === 'Final') {
                final[stage] = fixtureComponents(fixturesForStage)
            } else {
                const halfLength = Math.ceil(fixturesForStage.length / 2)
                const leftHalfFixtures = fixturesForStage.splice(0, halfLength)
                const rightHalfFixtures = fixturesForStage
                leftHalf[stage] = fixtureComponents(leftHalfFixtures)
                rightHalf[stage] = fixtureComponents(rightHalfFixtures, true)
            }
        } else {
            if(stage === 'Final') {
                final[stage] = fixturePlaceholderComponents(1)
            } else {
                // create placeholders
                const nummberOfPlaceholders = 8 / divide
                leftHalf[stage] = fixturePlaceholderComponents(nummberOfPlaceholders)
                rightHalf[stage] = fixturePlaceholderComponents(nummberOfPlaceholders)
            }
        }
        divide = divide *2
    })

    const renderHalf = (half) => {
        return (<div className="half">
            {Object.keys(half).map(stage => {
                return (<div className="stage">
                    <h3>{stage}</h3>
                    <div className="fixtures">
                        {half[stage]}
                    </div>
                </div>)
            })}
            <style jsx>{`
               .half {
                   display: flex;
               }
               .half:nth-of-type(3) {
                   flex-direction: row-reverse;
               }
               .fixtures {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    height: 100%;
               }
               .stage {
                   min-width: 150px;
                   display: flex;
                   flex-direction: column;
                   margin-right: 16px;
               }
               h3 {
                   text-align: center;
               }
            `}</style>
        </div>)
    }

    return (
        <div className="wrapper">
            {renderHalf(leftHalf)}
            {renderHalf(final)}
            {renderHalf(rightHalf)}
            <style jsx>{`
                .wrapper {
                    display: flex;
                    overflow: auto;
                    margin-top: 30px;
                }
            `}</style>
        </div>
    )

}

export default TournamentGraph