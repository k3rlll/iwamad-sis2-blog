import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const SignIn = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    login()
    navigate('/protected')
  }

  return (
    <div>
      <h1>Sign In Required</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  )
}