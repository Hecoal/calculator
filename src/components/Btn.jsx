import React from "react";
import '../stylesheets/btn.css'

function Btn(props){
    const isOperator = valor =>{
        //If the variable is not a number and is not a dot and is not '=':
        return isNaN(valor) && (valor!=='.') && (valor !== '=');
    };
    return(
        //This will apply a class depending type of data
        <div className={`btn-container ${isOperator(props.children) ?  'operator' : null}`}
        onClick={()=>props.clickHandler(props.children)}>
            {props.children}
        </div>
    );
}
export default Btn;