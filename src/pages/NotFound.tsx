import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go back to Home</Link>
    </div>
  )
}