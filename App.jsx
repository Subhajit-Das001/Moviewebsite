import NavBar from "./Navbar"
import Sidebar from "./sidebar"
import Feature from "./FeaturedMovie"
import MovieCards from "./MovieCard"
import MovieDetail from './Moviedetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react"

function App() {
  

  return (
    <>
      <Sidebar></Sidebar>
      <NavBar></NavBar>
     
    
      <Router>
      <Routes>
        <Route path="/" element={<MovieCards />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
      
    

      
    </>
  )
}

export default App
