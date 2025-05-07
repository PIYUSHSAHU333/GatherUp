import Auth from './Components/Auth.jsx';
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import BrowseEventPage from './Components/BrowseEventPage/BrowseEventPage.jsx'
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './Components/LandingPage/Footer.jsx';
import SubmitEvent from './Components/SubmitEvent/SubmitEvent.jsx';
function App() {
  
  return (
    
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/browseEvents" element={<BrowseEventPage />} />
            <Route path='/user' element={<Auth/>}/>
            <Route path='/submitevent' element={<SubmitEvent/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
     
    
  )
}

export default App
