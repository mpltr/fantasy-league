import fetch from 'isomorphic-unfetch'

const isClient = process.browser
const uri = isClient ? process.env.NEXT_PUBLIC_CLIENT_API : process.env.NEXT_PUBLIC_SERVER_API

export const get = ({endpoint, params}) => {
    return fetch(`${uri}/${endpoint}`).then(res => res.json());

}

export const post = ({endpoint, params}) => {
    let formData = new URLSearchParams()
    formData.append('data', JSON.stringify(params));

    return fetch(`${uri}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData
    })
}

export default get