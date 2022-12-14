import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
  FaTruckLoading,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'


function App() {

  const[loading,setLoading]=useState(true);
  const[person,setPerson]=useState(null);
  const[title,setTitle]=useState('name');
  const[value,setValue]=useState(['random person']);

  





  
  const handleValue=(e)=>{

  if(e.target.classList.contains('icon')){
    const newTitle=e.target.dataset.label;
    setTitle(newTitle);
    setValue(person[newTitle])
    
  }



  }


  const getPerson=async()=>{

    try {
      
      setLoading(true);
  
      const response=await fetch(url);
  
      const data=await response.json();
  
       const result=data.results[0];
  
       const{phone,email}=result;
  
       const{large:image}=result.picture;
  
       const{login:{password}}=result;
  
       const{name:{first,last}}=result;
  
       const{location:{street:{number,name}}}=result;
  
       const {dob:{age}}=result;
  
       const newPerson={image,phone,email,password,age,street:`${number} ${name}`, name:`${first} ${last}`};
  
       setPerson(newPerson);
       setLoading(false);
       setTitle('name');
       setValue(newPerson.name)


    } catch (error) {

      setLoading(false)
      setTitle('name');
      setPerson(null);

      
    }


      
  }




 useEffect(()=>{
   
  getPerson(url);

 },[])






  return <main>

    <div className="block bcg-black"></div>
    <div className="block">

      <div className="container">
        <img src={(person && person.image)||defaultImage} alt="random user" className='user-img'/>
        <p className='user-title'>my {title} is</p>
        <p className="user-value">{value}</p>

        <div className="values-list">

          <button className="icon" data-label="name" onMouseOver={handleValue}><FaUser/></button>
          <button className="icon" data-label="email" onMouseOver={handleValue}><FaEnvelopeOpen/></button>
          <button className="icon" data-label="age" onMouseOver={handleValue}><FaCalendarTimes/></button>
          <button className="icon" data-label="street" onMouseOver={handleValue}><FaMap/></button>
          <button className="icon" data-label="phone" onMouseOver={handleValue}><FaPhone/></button>
          <button className="icon" data-label="password" onMouseOver={handleValue}><FaLock/></button>

        </div>

        <button className='btn' type='button' onClick={getPerson}>{loading?'loading....':'random User'}</button>

      </div>


    </div>



  </main>
}

export default App
