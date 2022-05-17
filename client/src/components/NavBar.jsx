import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function Navbar () {
  return (
    <div className='mySideNav'>
      <Link className='child1' to='/'>
        Landing Page
      </Link>
      <Link className='child2' to='/recipe'>
        Create Recipes
      </Link>
      
   
    </div>
  )
}