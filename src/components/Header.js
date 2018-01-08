import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = ({ children }) => (
  <header>
    <h1><Link title="My name is actually Mark Hoffmann. Grizzo is a nickname from high school that has stuck with me" to="/">grizzo industries</Link></h1>
    <nav>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/professional">Professional</NavLink>
      <NavLink to="/personal">Personal</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  </header>
)

export default Header
