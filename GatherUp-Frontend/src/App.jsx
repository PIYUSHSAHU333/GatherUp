import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './Components/LandingPage/LandingPage'
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './Components/LandingPage/Footer';

function App() {
  
  return (
    
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* growing main area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* other routes */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
     
    
  )
}

export default App
