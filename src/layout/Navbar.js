import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className='container-fluid'>
          <a className="navbar-brand" id='projectName' href="#">Full Stack Application</a>
          {/* <button 
          className="navbar-toggler d-none" 
          type="button" data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <Link className='btn btn-danger' id='addUser' to='/adduser'>Add User</Link>
        </div>
      </nav>
    </div>
  )
}
