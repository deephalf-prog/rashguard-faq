import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-white font-bold text-xl">
            Deep Half
          </Link>
          <div className="flex space-x-4">
            <Link 
              href="/waitlist" 
              className="text-white hover:text-red-500 transition-colors px-3 py-2 rounded-md text-sm font-medium"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 