'use client'

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
        <p className="text-xl text-gray-300 mb-8">
          We apologize for the inconvenience. Please try again.
        </p>
        <div className="space-x-4">
          <Button
            variant="default"
            className="bg-red-600 hover:bg-red-700"
            onClick={() => reset()}
          >
            Try again
          </Button>
          <Link href="/">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 