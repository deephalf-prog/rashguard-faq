import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Deep Half Rashguard - Premium BJJ Rashguards",
  description: "Premium BJJ rashguards designed for performance and style. Join our waitlist to be the first to know when we launch.",
  openGraph: {
    title: "Deep Half Rashguard - Premium BJJ Rashguards",
    description: "Premium BJJ rashguards designed for performance and style",
    type: "website",
    url: "https://deep-half-rashguard.vercel.app",
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Deep Half Rashguard
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
              Premium BJJ rashguards designed for performance and style
            </p>
            <Link 
              href="/waitlist"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors duration-200"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-400">
                Made with high-performance materials for maximum durability and comfort
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Perfect Fit</h3>
              <p className="text-gray-400">
                Designed specifically for BJJ practitioners with an athletic cut
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Unique Design</h3>
              <p className="text-gray-400">
                Stand out on the mats with our distinctive and stylish patterns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Be the First to Know
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our waitlist to be notified when we launch and get exclusive early access
          </p>
          <Link 
            href="/waitlist"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors duration-200"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>
    </div>
  )
}
