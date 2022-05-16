import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function Navbar () {
  return (
    <div className='mySideNav'>
      <Link className='child1' to='/'>
        Home
      </Link>
      <Link className='child2' to='/recipe'>
        Recipes
      </Link>
      <Link className='child3' to='/ContactMe'>
        Contact Me
      </Link>
   
    </div>
  )
}