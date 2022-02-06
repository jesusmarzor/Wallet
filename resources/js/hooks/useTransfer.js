import { useState, useEffect } from "react";
import postTransfer from "../services/postTransfer";

export function useTransfer(){
    const [newTransfer, setNewTransfer] = useState({});

    const execute = ({api, data}) => {
        postTransfer({api, data})
        .then( transfer =>{
            setNewTransfer(transfer);
        });
    };
    
    return {newTransfer, execute};
}