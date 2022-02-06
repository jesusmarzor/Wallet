import React, { useEffect, useState } from "react";
import { useTransfer } from "../../hooks/useTransfer";

import "./styles.scss";

export function TransferForm({setMoney, setTransfers}){
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const {newTransfer, execute} = useTransfer();

    useEffect( () => {
        setMoney( prevMoney => {
            return prevMoney + parseInt(newTransfer.amount);
        })
        setTransfers( prevTransfers => {
            return prevTransfers.concat(newTransfer);
        })
    },[newTransfer])

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleAmount = (e) => {
        setAmount(e.target.value);
    }

    const addNewTransfer = (e) => {
        e.preventDefault();
        if(amount != "" && parseInt(amount) != 0 && description != "")
            execute({api:"transfer", data: {description,amount,'wallet_id':1}});
    }    

    return (
        <form className="form" onSubmit={e => addNewTransfer(e)} >
            <input onChange={e => handleDescription(e)} className="form__description" type="text" placeholder="Descripción" name="description"/>
            <label className="form__dolar" htmlFor="amount">$</label>
            <input onChange={e => handleAmount(e)} className="form__amount" id="amount" type="text" placeholder="Cantidad" name="amount"/>
            <button className="form__button" type="submit">Añadir</button>
        </form>
    )
}