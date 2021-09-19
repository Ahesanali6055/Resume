import React from 'react';
import "./App.css"
import About from './Components/About'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Project from './Components/Project'
import Resume from './Components/Resume'
import Skill from './Components/Skill'

const App = () => {
  return (
    <div className="App">
     <Header/>
     <About/>
     <Skill/>
     <Resume/>
     <Project/>
     <Footer/>
    </div>
  )
}
export default App
