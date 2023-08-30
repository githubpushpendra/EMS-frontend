import { eventWrapper } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

  let navigate = useNavigate();

  const {id} = useParams();

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: ''
  });

  const {name, username, email} = user;

  const onInputChange=(eventname)=>{
    setUser({...user, [eventname.target.name]: eventname.target.value});
  };

  useEffect(()=>{
    loadUser();
  }, []);

  const onSubmit = async(eventname)=>{
    eventname.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate('/');
  };

  const loadUser = async()=>{
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Edit User</h2>
          <form onSubmit={(eventname)=>onSubmit(eventname)}>
          <div className='mb-3'>
            <label htmlFor='Name' className='form-label'> Name </label>
            <input 
              type={'text'} 
              className='form-control'     
              placeholder='Enter your name'    
              name='name'
              value={name}  
              onChange={(eventname)=>onInputChange(eventname)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='UserName' className='form-label'> UserName </label>
            <input 
              type={'text'} 
              className='form-control'     
              placeholder='Enter your username'    
              name='username'  
              value={username}
              onChange={(eventname)=>onInputChange(eventname)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'> Email </label>
            <input 
              type={'text'} 
              className='form-control'     
              placeholder='Enter your email-Id'    
              name='email'  
              value={email}
              onChange={(eventname)=>onInputChange(eventname)}
            />
          </div>
          <button type='submit' className='btn btn-outline-primary'>Submit</button>
          <Link className='btn btn-outline-primary mx-2' to={'/'}>Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
