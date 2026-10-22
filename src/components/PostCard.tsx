import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Post } from '../types'

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const [likes, setLikes] = useState<number>(0)

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <Link to={`/posts/${post.id}`}>Read more</Link>
      <br /><br />
      <button onClick={() => setLikes(likes + 1)}>Like {likes}</button>
    </div>
  )
}