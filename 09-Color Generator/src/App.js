import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setcolor] = useState('');
  const [error, seterror] = useState(false);
  const [list, setlist] = useState(new Values('#f15025').all(10));


  const handleSubmit=(e)=>{
   e.preventDefault();
   try {
     let colors=new Values(color).all(10);
     setlist(colors);
     seterror(false);
     
    
   } catch (error) {
    seterror(true);
    console.log(error);
   }
  }

  return<>
  
  <section className="container">
    <h3>color generator</h3>

    <form onSubmit={handleSubmit}>
      <input type="text" value={color} onChange={(e)=>{setcolor(e.target.value)}} placeholder="#f15025" className={`${error?'error':null}`}/>
      <button className='btn' type='submit'>submit</button>


    </form>

  </section>

  <section className="colors">

    {list.map((color,index)=>{
    
      return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/> 
    })}
  </section>
  
  </>
  
  
}

export default App
