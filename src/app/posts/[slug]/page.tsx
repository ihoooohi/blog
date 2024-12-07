import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    notFound()
  }

  const Content = getMDXComponent(post.body.code)

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="prose dark:prose-invert lg:prose-lg mx-auto">
        <div className="mb-8 text-center">
          <time dateTime={post.date} className="text-gray-500 dark:text-gray-400">
            {format(new Date(post.date), 'MMMM dd, yyyy')}
          </time>
          <h1 className="mt-4 text-4xl font-bold">{post.title}</h1>
          {post.description && (
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              {post.description}
            </p>
          )}
        </div>
        <Content />
      </div>
    </article>
  )
}
