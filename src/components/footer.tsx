import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Deep Half</h3>
            <p className="text-gray-400 text-sm">
              Premium BJJ rashguards designed for performance and style.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/waitlist" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">
              Have questions? Reach out to us at{' '}
              <a 
                href="mailto:contact@deephalf.com" 
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                contact@deephalf.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Deep Half. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 