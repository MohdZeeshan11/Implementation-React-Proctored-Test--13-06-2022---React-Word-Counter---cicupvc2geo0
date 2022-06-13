import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {

const[text,setText] = useState();
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
      <input type="number" />
    </div>
    <div className='container'>
      <textarea onChange={function(e){
      // console.log(e.target.value)
      setText(e.target.value);
    }}></textarea>
    </div>

    <div id="word-counter" className='container'>Total number of words written </div>
    <div id="char-counter" className='container'>Total number of characters used </div>
    </>
  )
}


export default App;
