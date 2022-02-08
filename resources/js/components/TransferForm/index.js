import React, { useEffect, useState } from "react";
import { useTransfer } from "../../hooks/useTransfer";
import { ErrorMessage } from "../ErrorMessage";
import { validateForm } from "./validateForm";

import "./styles.scss";

export function TransferForm({setMoney, setTransfers}){
    const [description, setDescription] = useState(null);
    const [amount, setAmount] = useState(null);
    const [errors, setErrors] = useState({});
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
        setAmount(parseInt(e.target.value));
    }

    const addNewTransfer = (e) => {
        e.preventDefault();
        if(validateForm(description, amount, setErrors)){
            execute({api:"transfer", data: {description,amount,'wallet_id':1}});
        }
    }    

    return (
        <form className="form" onSubmit={e => addNewTransfer(e)} >
            <div className="form__description description">
                <input onChange={e => handleDescription(e)} className="description__input" type="text" placeholder="Descripción" name="description"/>
                <p className="description__error"><ErrorMessage>{errors.description}</ErrorMessage></p>
            </div>
            <label className="form__dolar" htmlFor="amount">$</label>
            <div className="form__amount amount">
                <input onChange={e => handleAmount(e)} className="amount__input" id="amount" type="number" placeholder="Cantidad" name="amount"/>
                <p className="amount__error"><ErrorMessage>{errors.amount}</ErrorMessage></p>
            </div>
            <button className="form__button" type="submit">Añadir</button>
        </form>
    )
}