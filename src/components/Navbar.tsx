import Link from 'next/link'
import { Search, Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-teal-500">BLOG</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-teal-500">Home</Link>
            <Link href="/posts" className="text-gray-700 dark:text-gray-300 hover:text-teal-500">Posts</Link>
            <Link href="/categories" className="text-gray-700 dark:text-gray-300 hover:text-teal-500">Categories</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-teal-500">About</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 dark:text-gray-300 hover:text-teal-500">
              <Search className="h-5 w-5" />
            </button>
            <button className="md:hidden text-gray-700 dark:text-gray-300 hover:text-teal-500">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
