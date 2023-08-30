import React from 'react'
// import { Link } from 'react-router-dom'
import Header from './Header'
import Eventslider from './Eventslider'
import Premiere from './Premier'
import "./Home.css"
import Example from '../Example'

function Home() {
  return (
    <div>
        <Header></Header>
        <Eventslider></Eventslider>
        <Premiere></Premiere> 
        <Example></Example>
        
    </div>
  )
}

export default Home;
