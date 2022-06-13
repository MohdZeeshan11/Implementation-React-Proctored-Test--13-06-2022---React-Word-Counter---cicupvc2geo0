import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {

const[text,setText] = useState();
const[limit,setLimit] = useState(50);
console.log(text);
// let txt = text.length;
  return (
    <>
    <div className='container'>
       <h3>Font size Picker</h3>
      <input type="range" id="vol" name="vol" min="0" max="50"></input>
    </div>
    <div className='container'>
       <h3>Word limit input</h3>
      <input type="number" value={limit} onChange={function(){
        setLimit(limit+1);
      }}/>
    </div>
    <div className='container'>
      <textarea maxLength={50} onChange={function(e){setText(e.target.value)}}></textarea>
    </div>

    <div id="word-counter" className='container'>Total number of words written </div>
    <div id="char-counter" className='container'>Total number of characters used </div>
    </>
  )
}


export default App;
