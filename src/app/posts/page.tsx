import { allPosts } from 'contentlayer/generated'
import PostCard from '@/components/PostCard'
import { compareDesc } from 'date-fns'

export default function PostsPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">All Posts</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            description={post.description}
            date={post.date}
            slug={post._raw.flattenedPath}
          />
        ))}
      </div>
    </div>
  )
}
