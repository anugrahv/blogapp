
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Landing from './pages/Landing';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase-config';
import FirstPage from './pages/FirstPage';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      setIsAuth(false);
      // Use Navigate component to navigate programmatically
      return <Navigate to='/login' />;
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div className="App">
      <Landing setIsAuth={setIsAuth} isAuth={isAuth} onSignOut={handleSignOut} />
     
        <Routes>
          {/* Use render props to pass additional props to components */}
          <Route
            path="/"
            element={<FirstPage/>}
          />
          <Route path="/home" element={<Home isAuth={isAuth}/>} />
          <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
          {/* Use render props for passing setIsAuth to Login */}
          <Route
            path="/login"
            element={<Login setIsAuth={setIsAuth} onSignOut={handleSignOut} />}
          />
        </Routes>
      
    </div>
  );
}

export default App;