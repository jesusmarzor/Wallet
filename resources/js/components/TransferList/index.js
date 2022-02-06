import React from "react";
import "./styles.scss";

export function TransferList({transfers}){
    return(
        <table className="table">
            <thead className="table__head">
                <tr>
                    <td>Descripción</td>
                    <td>Cantidad</td>
                </tr>
            </thead>
            <tbody className="table__body">
                
                {
                    transfers.map(transfer => {
                        return (
                            <tr key={transfer.id}>
                                <td>{transfer.description}</td>
                                <td className={(transfer.amount > 0) ? "win" : "lose"}>{Math.abs(transfer.amount)}</td>
                            </tr>
                        )
                    })
                }
                    
                
            </tbody>
        </table>
    )
}