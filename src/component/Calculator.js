import React, { useState } from 'react';
import './Calculator.css'
const Calculator = () => {

    // add the number to the screen
    let [number, setNumber] = useState('')
    let getNumber = (e) => {
        if(e.target.id !== 'number' )
        setNumber( number += e.target.innerHTML)
    }
    
    // the value of th process of account
    let [equal, setEqual] = useState('')
    let equalNumber = () => setEqual(eval(number))
    
    // reset all the values
    let reset = () => {
        setNumber('')
        setEqual('')
    }

    // remove one number
    let removeNumber = () => {
        setNumber(number.slice(length, length -1))
        if(number.length == 1) setEqual('')
    }


    return (
        <div className='calc'>
            <div className='screen'>
                <input id='getValue' type='text' value={number} placeholder='0'/>
                <h3 id='newValue'>{equal} </h3>
            </div>

            <div id='number' className='container number' onClick={getNumber}>
                <h2>0</h2>
                <h2>.</h2>
                <h2 style={{zIndex:'-1'}}>.</h2>
                <h2 style={{zIndex:'-1'}}>.</h2>
                <h2>1</h2>
                <h2>2</h2>
                <h2>3</h2>
                <h2 style={{color:'#c27cff'}}>+</h2>
                <h2>4</h2>
                <h2>5</h2>
                <h2>6</h2>
                <h2 style={{color:'#c27cff'}}>-</h2>
                <h2>7</h2>
                <h2>8</h2>
                <h2>9</h2>
                <h2 style={{color:'#c27cff'}}>*</h2>
                <h2 style={{zIndex:'-1'}}>c</h2>
                <h2 style={{color:'#c27cff'}}>/</h2>
                <h2 style={{color:'#c27cff'}}>**</h2>
                <h2 style={{zIndex:'-1'}}>x</h2>
            </div>

            <h2 id='equal' onClick={equalNumber}>=</h2>
            <img id='removeNumber' onClick={removeNumber}/>
            <h2 id='removeAll' onClick={reset}>c</h2>
        </div>
    );
}

export default Calculator;

