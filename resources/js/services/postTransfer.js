import {API_URL,CONFIG} from './settings'

export default async function postTransfer({ api, data}){
    let config = {
        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }
    const res = await fetch(API_URL + api, config);
    const response = await res.json();
    return response;
}