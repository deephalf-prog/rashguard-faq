import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { WaitlistForm } from '@/components/waitlist-form'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-red-900 to-black">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Deep Half Rashguard
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Premium rashguards for Brazilian Jiu-Jitsu
          </p>
          <Link href="/shop">
            <Button variant="default" size="lg" className="bg-white text-red-900 hover:bg-gray-100">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Deep Half?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">Made with high-quality materials for maximum durability and comfort.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Perfect Fit</h3>
              <p className="text-gray-600">Designed specifically for BJJ practitioners with an optimal fit.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Stylish Design</h3>
              <p className="text-gray-600">Modern and sleek designs that stand out on the mat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Join the Waitlist</h2>
            <p className="text-gray-600 mb-8">
              Be the first to know when new products are available and get exclusive offers.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>
    </div>
  )
}
