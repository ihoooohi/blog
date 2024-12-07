import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-1/3 space-y-8">
      {/* Author Profile */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
            <Image
              src="/images/avatar.jpg"
              alt="Author"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            John Doe
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
            Web developer & blogger passionate about modern technologies
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-teal-500 hover:text-teal-600">
              Twitter
            </a>
            <a href="#" className="text-teal-500 hover:text-teal-600">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Recent Posts
        </h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Link
              key={i}
              href="#"
              className="block hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-3"
            >
              <h4 className="text-gray-900 dark:text-white font-medium mb-1">
                Sample Blog Post {i}
              </h4>
              <span className="text-sm text-teal-500">Dec {i}, 2024</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Technology', 'Web Dev', 'Design', 'Tutorial'].map((category) => (
            <Link
              key={category}
              href="#"
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-teal-900"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
