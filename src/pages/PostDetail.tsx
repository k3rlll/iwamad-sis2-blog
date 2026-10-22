import { useParams } from 'react-router-dom'
import { posts } from '../data/posts'
import { useState } from 'react'

export const PostDetail = () => {
  const { id } = useParams<{ id: string }>()
  const post = posts.find((p) => p.id === id)
  const [likes, setLikes] = useState<number>(0)

  if (!post) {
    return <h1>Error: Post with ID "{id}" does not exist.</h1>
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <small>{post.date}</small>
      <p>{post.content}</p>
      <button onClick={() => setLikes(likes + 1)}>Like {likes}</button>
    </div>
  )
}