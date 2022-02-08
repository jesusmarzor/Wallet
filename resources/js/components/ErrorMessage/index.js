import React from "react";
import "./styles.scss";

export function ErrorMessage({children}){
    return <small className="errormessage">{children}</small>
}