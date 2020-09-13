import React from 'react'
import CustomLink from '../components/CustomLink';
import fetch from 'isomorphic-fetch'

const Index = ({data}) => {
    return (
        <div>
            {data.map(tournament => {
                return <CustomLink url={`/${tournament.uid}`} label={tournament.uid} key={tournament.uid}/>
            })}
        </div>
    )
}

Index.getInitialProps = async (context) => {

    const data = await fetch(`${process.env.NEXT_PUBLIC_API}/tournament`).then(res => res.json())

    return {
        ...context.intialState, 
        data
    }

}
export default Index
