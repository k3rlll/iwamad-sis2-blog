import { posts } from '../data/posts'
import { PostCard } from '../components/PostCard'

export const Posts = () => {
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}