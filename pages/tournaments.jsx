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

    console.log(`${process.env.NEXT_PUBLIC_API}/get-tournaments`);

    const data = await fetch(`${process.env.NEXT_PUBLIC_API}/get-tournaments`).then(res => res.json())

    return {
        data
    }

}

export default Tournaments;