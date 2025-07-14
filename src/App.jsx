
import { useState } from 'react'
import './App.css'
import UserTable from './compenents/UserTable';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [users,setUsers] = useState([]);
  const [showTable,setShowtable] =useState(false);
  const [digit,setDigit] = useState(0);
  const increament = () =>{setDigit(prev => prev+1)}
  const decreament = () =>{setDigit(prev => prev-1)}
  const reset = () =>{setDigit(0)}
  const api_url = import.meta.env.VITE_API_URL; 
  


  useEffect(()=>{
    axios.get(`${api_url}/users`)
      .then(res => {
        
        setUsers(res.data)
      })
      .catch(err => console.log(`Veri tabanına Bağlanılamadı ! - ${err}`))
  },[])
  
  return (
   <div>
    <h1>Frontend Home Page !</h1>
    <h2>Value = {digit}</h2>
    <button onClick={increament}>Increase</button>
    <button onClick={decreament}>Decrease</button>
    <button onClick={reset}>Reset</button>
    <button onClick={()=>setShowtable(!showTable)}>
      {
        showTable ? 'Gizle' : 'Kullanıcıları Göster'
      }
    </button>
    {showTable && <UserTable users={users} onClose={() => setShowtable(false)} />}
   </div>
  )
}

export default App
