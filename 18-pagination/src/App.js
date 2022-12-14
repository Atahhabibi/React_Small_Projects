import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {


 const{data,loading}=useFetch();
 const[page,setPage]=useState(0);
 const[followers,setFollowers]=useState([]);


 useEffect(()=>{
   if(loading) return;
   setFollowers(data[page])
 },[loading,page])


 const handlePage=(index)=>{

  setPage(index);

 }


 const handleNext=()=>{

   const newPage=page+1;

  if(data.length-1<newPage){
    setPage(0)
  }else{
    setPage(newPage)
  }

 }

 const handlePrev=()=>{

  const newPage=page-1;

  if(newPage<1){

    setPage(data.length-1);
    
  }else{
    setPage(newPage)
  }

  
 }









  return <main>

    <div className="section-title">
      <h1>{loading?'loading...':'pagination'}</h1>
      <div className="underline"></div>
    </div>


    <section className='followers'>

      <div className="container">
        {followers.map((follower)=>{
          return <Follower key={follower.id} {...follower}/>
        })}
      </div>

      

      {loading||<div className='btn-container'>

        <button className='prev-btn' onClick={handlePrev}>prev</button>
        
        { data.map((follow,index)=>{
          return <button className={`page-btn ${index===page? 'active-btn':null}`} key={index} onClick={()=>handlePage(index)}>{index+1}</button>
        })}
       
        <button className='next-btn' onClick={handleNext}>next</button>
       
       </div>}

      
      
      
      
      


    </section>





  </main>
}

export default App
