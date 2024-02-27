import React from "react";
import '../stylesheets/btn_clear.css'

const BtnClear =(props)=>(
    <div className="btn-clear"
    onClick={props.clearHandler}>
        {props.children}
    </div>
);

export default BtnClear;