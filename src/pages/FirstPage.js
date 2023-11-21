import React from 'react'
import './FirstPage.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FirstPage() {
  return (
    <div className='fp'>
   <div className=''> 
    <Link to='/login'>
      <Button className='text-white mt-5 px-4' variant='dark'> <b>Get Started</b></Button>
      </Link>
      </div>
    </div>
  )
}

export default FirstPage