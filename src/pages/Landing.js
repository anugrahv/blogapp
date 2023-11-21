
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Change here
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase-config';
import { Button } from 'react-bootstrap';

// import './Landing.css'
// import { auth } from './Firebase-config';


const Landing = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();  // Change here

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      setIsAuth(false);
      navigate('/');  // Change here
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div className='a1'>
      <div>
        
        <div className='c1 mt-3'>

          <Link   className='text-dark text-end mx-3' style={{textDecoration:'none'}} to='/home'> <b>Home</b></Link>
          {/* <Link to='/createpost'>Createpost</Link> */}
          {!isAuth ? (
            <Link className='text-dark text-end' style={{textDecoration:'none'}} to='/login'> <b> Login</b></Link>
          ) : (
<>
            <Link className='text-dark' style={{textDecoration:'none'}} to='/createpost'> <b>Createpost</b></Link>

            <Button className='text-white px-2 mx-3' variant='danger' style={{textDecoration:'none'}} onClick={handleSignOut}> <b> Log Out </b></Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;