import React, { useEffect, useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import SignUpForm from './SignUpForm';
import PaisTable from './components/PaisTable';
import PaisFilter from './components/PaisFilter';


function App() {
  function handleError(res) {
      if (!res.ok) throw Error(res.status)
      return res.json()
    }
  
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [filter, SetFilter] = useState([])
  
  useEffect(()=> {
      fetch('http://localhost:3030/users')
      .then(res => handleError(res))
      .then(data => setData(data))
      .catch(error => setError(true))
  }, [error]) 

  if(error) return (
    <>
      <h3> Error while fetching...</h3>
      <Button variant="contained" onClick={()=> setError(false)}>Home</Button>
    </>
  )
  

    return(
 <> 
        <h1> ⚽~Ingrese sus datos~⚽ </h1>
        <SignUpForm/> 
        
        
         
        
  </>
  
 )}
 

 export default App;