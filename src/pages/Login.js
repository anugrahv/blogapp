import React from 'react'
import { auth, provider } from '../Firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


function Login({setIsAuth}) {

let navigate = useNavigate()

    const signInWithGoogle = () => {
signInWithPopup(auth,provider).then((result)=> {
    localStorage.setItem("isAuth",true)
setIsAuth(true)
navigate('/home')
})
    }
  return (
    <div className='loginPage'>
        
        <p> <b>Sign In With Google to Continue</b></p>
<button onClick={signInWithGoogle} className='login-with-google-btn'>
   <b> Sign in with google</b>
</button>
    </div>
  )
}

export default Login