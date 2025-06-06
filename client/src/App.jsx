import React from 'react'
import Agent from './components/Agent'
import Navbar from './components/Navbar'
import AuthForm from './components/AuthForm'
import Home from './Pages/Home'
import Footer from './components/Footer'
import { Routes, Route} from "react-router-dom"
import HowItWorks from './Pages/HowItWorks'
import { useSelector } from 'react-redux'
import Profile from './Pages/Profile'
import Setup from './Pages/Setup'

const App = () => {
  const showSetup = useSelector((state) => state.user.showSetup)
  const showLogin = useSelector((state) => state.user.showLogin)
  // console.log(showLogin);
  
  return (
    <div>
      <Navbar />
      {/* <AuthForm /> */}
       {showLogin && <AuthForm />}
       {showSetup && <Setup />}

       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/howitworks' element={<HowItWorks/>}/>
       </Routes>
      <Footer />
    </div>
  )
}

export default App