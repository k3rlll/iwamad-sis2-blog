import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Posts } from './pages/Posts'
import { Contact } from './pages/Contact'
import { PostDetail } from './pages/PostDetail'
import { SignIn } from './pages/SignIn'
import { Protected } from './pages/Protected'
import { NotFound } from './pages/NotFound'
import { ProtectedRoute } from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<SignIn />} />
          <Route
            path="protected"
            element={
              <ProtectedRoute>
                <Protected />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}