import { Metadata } from "next"
import { WaitlistForm } from "@/components/waitlist-form"

export const metadata: Metadata = {
  title: "Join the Waitlist - Deep Half Rashguard",
  description: "Be the first to know when our premium rashguards are available. Join our exclusive waitlist today.",
}

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Join the Waitlist
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Be the first to know when our premium rashguards are available. Join our exclusive waitlist today.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </div>
  )
} 