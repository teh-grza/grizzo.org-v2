import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ children }) => (
  <header>
    <h1>grizzo industries</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/professional">Professional</Link>
      <Link to="/personal">Personal</Link>
    </nav>
  </header>
)

export default Header
