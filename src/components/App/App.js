import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import useToken from './useToken';


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div className="wrapper">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
            <Home />
          </Route>
          <Route path="/login" element={<Login />}>
            <Login />
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
