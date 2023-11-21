import React, { useEffect, useState } from 'react'
import Landing from './Landing'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../Firebase-config'
import { useNavigate } from 'react-router-dom'

// import './CreatePost.css'

function CreatePost({isAuth}) {
  
  const [title, setTitle]=useState("")
  const [postText, setPostText]=useState("")

  const postsCollectionRef=collection(db,"posts")
  let navigate=useNavigate()

  const createPost= async()=>{
await addDoc(postsCollectionRef,{title,
  postText,
  author: {name: auth.currentUser.displayName,id:auth.currentUser.uid}})
  navigate("/home");
  }
  useEffect(()=>{
if(!isAuth){
  navigate('/login')
}
  },[])

  return (
  <div>
    {/* <Landing></Landing> */}
    <div className='createPostPages'>
<div className='cpContainer'>
  <h1>create a post</h1>
<div className='inputGp'>
  <label>Title</label>
  <input onChange={(event)=>{
    setTitle(event.target.value)
  }}
 placeholder='Title...' />
</div>
<div className='inputGp'>
<label>Post</label>
<textarea    onChange={(event)=>{
    setPostText(event.target.value)
  }}
 placeholder="Post..."></textarea>
{/* <input placeholder='Post...' /> */}

</div>
<button onClick={createPost}> Submit Post</button>

  </div>      
      </div>
      </div>
  )
}

export default CreatePost