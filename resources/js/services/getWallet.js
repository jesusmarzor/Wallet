import {API_URL} from './settings'

export default async function getWallet({api}){
    const res = await fetch(API_URL + api);
    const response = await res.json();
    return response;
}