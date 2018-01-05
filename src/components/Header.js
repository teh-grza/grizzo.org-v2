import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ children }) => (
  <header>
    <h1><a href="/" title="My name is actually Mark. Grizzo is a nickname from high school that has stuck with me">grizzo industries</a></h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/professional">Professional</Link>
      <Link to="/personal">Personal</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
)

export default Header
