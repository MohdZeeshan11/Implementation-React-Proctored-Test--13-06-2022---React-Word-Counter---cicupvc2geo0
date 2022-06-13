import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {

const[text,setText] = useState();
const[word,setWord] = useState();
const[limit,setLimit] = useState(50);
const[size,setSize] = useState(16);
console.log(size);
// console.log(text);
// let s = size;
// let txt = text.length;
  return (
    <>
    <div className='container'>
       <h3>Font size Picker</h3>
      <input type="range" id="vol" name="vol" min="0" max="50"
      onChange={function(e){
        // console.log(e.target.value);
        setSize(e.target.value)
      }}></input>
    </div>
    <div className='container'>
       <h3>Word limit input</h3>
      <input type="number" value={limit} onChange={function(){
        setLimit(limit+1);
      }}/>
    </div>
    <div className='container'>
      <textarea maxLength={limit} placeholder="enter your words" style={{fontSize:(Number)(size)}}
      onChange={function(e){
        setText(e.target.value.length);
        setWord(e.target.value.split(" ").length)
        }}></textarea>
    </div>

    <div id="word-counter" className='container'>Total number of words written {word}</div>
    <div id="char-counter" className='container'>Total number of characters used {text}</div>
    </>
  )
}


export default App;
