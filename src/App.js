import './App.css';
import logo from './assets/logo.png';
import Btn from './components/Btn';
import Screen from './components/Screen';
import BtnClear from './components/BtnClear';
import { evaluate } from 'mathjs';

import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const addInput = val =>{
    setInput(input + val);
  };

  const result=()=>{
    if(input){
      setInput(evaluate(input));
    }else{
      alert('Choose some numbers!');
    }
    
  }
  return (
    <div className="App">
      <div className='logo-container'>
        <img src={logo} className='main-logo' alt='hecoal-logo' />
      </div>
      <div className='main-container'>
        <Screen input={input} />
        <div className='row'>
          <Btn clickHandler={addInput}>1</Btn>
          <Btn clickHandler={addInput}>2</Btn>
          <Btn clickHandler={addInput}>3</Btn>
          <Btn clickHandler={addInput}>+</Btn>
        </div>
        <div className='row'>
          <Btn clickHandler={addInput}>4</Btn>
          <Btn clickHandler={addInput}>5</Btn>
          <Btn clickHandler={addInput}>6</Btn>
          <Btn clickHandler={addInput}>-</Btn>
        </div>
        <div className='row'>
          <Btn clickHandler={addInput}>7</Btn>
          <Btn clickHandler={addInput}>8</Btn>
          <Btn clickHandler={addInput}>9</Btn>
          <Btn clickHandler={addInput}>*</Btn>
        </div>
        <div className='row'>
          <Btn clickHandler={result
          }>=</Btn>
          <Btn clickHandler={addInput}>0</Btn>
          <Btn clickHandler={addInput}>.</Btn>
          <Btn clickHandler={addInput}>/</Btn>
        </div>
        <div className='row'>
          <BtnClear clearHandler={()=> setInput('')}>AC</BtnClear>
        </div>
      </div>
    </div>
  );
}

export default App;
