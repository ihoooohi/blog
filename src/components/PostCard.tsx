import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'

interface PostCardProps {
  title: string
  description: string
  date: string
  slug: string
  image?: string
}

const PostCard = ({ title, description, date, slug, image }: PostCardProps) => {
  return (
    <article className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1">
      <Link href={`/posts/${slug}`}>
        <div className="relative h-64 w-full">
          <Image
            src={image || '/images/default-post.jpg'}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="text-sm text-teal-500 mb-2">
            {format(new Date(date), 'MMMM dd, yyyy')}
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-500">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
            {description}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default PostCard
