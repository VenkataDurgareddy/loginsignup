import React, { useContext, useState, useEffect } from 'react'
import { store } from '../App';
import axios from 'axios';
import Login from './login';
import { Navigate } from 'react-router-dom';
const Myprofile = () => {
  const [token, settoken] = useContext(store)
  const [data, setdata] = useState(null)
  useEffect(() => {
    axios.get('http://localhost:1234/myprofile', {
      headers: {
        'x-token': token
      }

    }).then(res => setdata(res.data)).catch((err) => console.log(err))
  }, [])
  if (!token) {
    return <Navigate to='/Login'/>
      
  }
  return (
    <div>
      {
        data &&
        <center>
          <h5 class="card-title" style={{margin:"30px"}}>Welcome : {data.username}</h5>
          <button class="btn btn-primary" onClick={() => settoken(null)} style={{margin:"30px"}}>Logout</button>
        </center>
      }
    </div>
  )
}
export default Myprofile;
