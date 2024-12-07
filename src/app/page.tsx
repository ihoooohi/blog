import Link from 'next/link'
import PostCard from '@/components/PostCard'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  const posts = [
    {
      title: "Delightful as be it acceptance on solitude",
      description: "Discover the beauty of solitude and how it can enhance your creative process and personal growth.",
      date: "2024-12-07",
      slug: "solitude-acceptance",
      image: "/images/post1.jpg"
    },
    {
      title: "The Art of Modern Web Development",
      description: "Exploring the latest trends and best practices in modern web development.",
      date: "2024-12-06",
      slug: "modern-web-development",
      image: "/images/post2.jpg"
    },
    {
      title: "Building with Next.js and TypeScript",
      description: "A comprehensive guide to creating robust applications with Next.js and TypeScript.",
      date: "2024-12-05",
      slug: "nextjs-typescript-guide",
      image: "/images/post3.jpg"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col lg:flex-row gap-8">
        <main className="w-full lg:w-2/3">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </main>
        <Sidebar />
      </div>
    </div>
  )
}
