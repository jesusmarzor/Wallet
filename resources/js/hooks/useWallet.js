import { useState, useEffect } from "react";
import getWallet from "../services/getWallet";

export function useWallet({api}){
    const [wallet, setWallet] = useState({});

    useEffect( () => {
        getWallet({api})
        .then( wallet =>{
            setWallet(wallet)
        });
    },[]);
    
    return wallet;
}