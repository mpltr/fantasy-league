import React from 'react';
import CustomLink from '../components/CustomLink';

const Tournaments = ({data}) => {
    return (
        <div>
            {data.map(tournament => {
                return <CustomLink url={`/tournaments/${tournament.uid}`} label={tournament.uid} key={tournament.uid}/>
            })}
        </div>
    )
}

Tournaments.getInitialProps = async (context) => {

    const data = await fetch(`${process.env.NEXT_PUBLIC_API}/tournament`).then(res => res.json())

    return {
        data
    }

}

export default Tournaments;