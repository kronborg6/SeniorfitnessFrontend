import './App.css';
import Login from './Login';
import Footer from './Footer'
import Header from './Header';
import Landing from './Landing';
import React,{useState} from 'react'
import useToken from './Hooks/useToken.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const { token, setToken } = useToken();

  if(!token){
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<Login />} />
          <Route
        path="*"
        element={
            <main style={{padding: "1rem"}}>
                <p>Fitness Senior – 404 Sorry, the requested page could not be found. If you believe this is an error, please contact support@sensiorfitness.com.</p>
            </main>
        }

        />
        </Routes>
        < Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
