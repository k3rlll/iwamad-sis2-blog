/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { App } from './App'
import { PostCard } from './components/PostCard'
import { posts } from './data/posts'
import { describe, it, expect } from 'vitest'

describe('Blog Application Tests', () => {
  it('renders all posts dynamically in the list', () => {
    render(
      <MemoryRouter initialEntries={['/posts']}>
        <App />
      </MemoryRouter>
    )
    const postElements = screen.getAllByText(/Read more/i)
    expect(postElements.length).toBe(posts.length)
  })

  it('changes the local like state on a post when clicked', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <PostCard post={posts[0]} />
      </MemoryRouter>
    )
    
    const likeButton = screen.getByRole('button', { name: /Like 0/i })
    expect(likeButton).toBeInTheDocument()
    
    await user.click(likeButton)
    
    expect(screen.getByRole('button', { name: /Like 1/i })).toBeInTheDocument()
  })

  it('redirects to sign in page when accessing protected route while signed out', () => {
    render(
      <MemoryRouter initialEntries={['/protected']}>
        <App />
      </MemoryRouter>
    )
    
    expect(screen.getByText(/Sign In Required/i)).toBeInTheDocument()
    expect(screen.queryByText(/classified protected content/i)).not.toBeInTheDocument()
  })
})