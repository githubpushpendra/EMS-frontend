import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ViewUser() {
  const {id} = useParams();
  const [user, setuser] = useState([]);
  
  useEffect(()=>{
    loadUser();
  }, [])

  const loadUser = async()=>{
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setuser(result.data);
  }
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>User Details</h2>
            <div className='card'>
              <div className='card-header'>
                Details of User with ID: {user.id}
                <ul className='list-group list-group-flush list-unstyled'>
                  <li className='list-gourp-item'>
                    <b>Name: </b>
                    {user.name}
                  </li>
                  <li className='list-gourp-item'>
                    <b>Name: </b>
                    {user.username}
                  </li>
                  <li className='list-gourp-item'>
                    <b>Name: </b>
                    {user.email}
                  </li>
                  <li className='list-gourp-item'>
                    <Link className="btn btn-outline-primary mx-2"
                      to={`/edituser/${user.id}`}
                    >
                    Edit</Link>
                    <Link className='btn btn-outline-primary mx-2' to={'/'}>Back</Link>
                  </li>
                </ul>
              </div>
            </div>          
        </div>
      </div>
    </div>
  )
}
