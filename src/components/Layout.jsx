import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header className="header">
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">À propos</Link>
          {/* <Link to="/contact">Contact</Link> */}
        </nav>
      </header>
      
      <main>
        <Outlet />  {/* Contenu des pages */}
      </main>

      <footer className="footer">
        <p>© 2024 Le React Gourmand. Tous droits reservés.</p>
      </footer>
    </>
  )
}

export default Layout