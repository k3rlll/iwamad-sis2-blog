import { Outlet, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const Layout = () => {
  const { isAuthenticated, logout } = useAuth()

  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/protected">Protected</NavLink>
          {isAuthenticated ? (
            <button onClick={logout}>Sign Out</button>
          ) : (
            <NavLink to="/signin">Sign In</NavLink>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Ramazan Abdyashim 2026.</p>
      </footer>
    </div>
  )
}