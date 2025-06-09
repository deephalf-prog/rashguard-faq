"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus("success")
      setEmail("")
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md"
        >
          {status === "loading" ? "Joining..." : "Join Waitlist"}
        </Button>
      </div>
      {status === "success" && (
        <p className="mt-2 text-green-600">Thanks for joining! We'll be in touch soon.</p>
      )}
      {status === "error" && (
        <p className="mt-2 text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
