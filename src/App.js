import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Block from './components/Block.js';
import Contact from './components/Contact.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Dashboard from './components/Dashboard.js';
import UserAccounts from './components/UserAccounts.js';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Block />
            <Contact />
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-account" element={<UserAccounts />} />
      </Routes>
    </Router> 
  )
}

export default App
