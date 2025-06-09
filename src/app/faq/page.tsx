"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  Package,
  Truck,
  RefreshCw,
  Ruler,
  CreditCard,
  Users,
  MessageSquare,
} from "lucide-react"

const faqCategories = [
  {
    id: "shipping",
    title: "Shipping & Delivery",
    icon: Truck,
    questions: [
      {
        question: "When will my order ship?",
        answer:
          "Average Est. Shipping Time\nUS: 4-7 business days\nEU/ROW: 10-15 business days\nGB/UK: 7-9 business days\nCA (Canada): 7-12 business days\n2-6 additional days due to external factors beyond our control\nTikTok Shop US (to US only): 4-7 business days",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes! We plan to ship to Canada, UK, Australia, and select EU countries at launch. More countries will be added based on demand.",
      },
      {
        question: "How much does shipping cost?",
        answer:
          "Shipping costs will be calculated at checkout based on your location and selected shipping method. Free shipping will be available on orders over $75.",
      },
    ],
  },
  {
    id: "sizing",
    title: "Sizing & Fit",
    icon: Ruler,
    questions: [
      {
        question: "How do I choose the right size?",
        answer:
          "Our rashguards are designed with a compression fit. Refer to our detailed size chart on the Specs page. When in doubt, we recommend sizing up for a more comfortable fit.",
      },
      {
        question: "What if the size doesn't fit?",
        answer:
          "We offer free exchanges within 30 days of purchase. The item must be unworn with tags attached. We'll send you a prepaid return label.",
      },
      {
        question: "Do rashguards shrink after washing?",
        answer:
          "Our rashguards are pre-shrunk and made with high-quality materials that maintain their size and shape. Follow our care instructions for best results.",
      },
      {
        question: "Can I get a custom fit?",
        answer:
          "Currently, we offer standard sizes XS-XXL. Custom sizing may be available for team orders of 10+ pieces. Contact us for more information.",
      },
    ],
  },
  {
    id: "product",
    title: "Product Information",
    icon: Package,
    questions: [
      {
        question: "What materials are used in your rashguards?",
        answer:
          "92% Polyester, 8% Spandex blend with four-way stretch technology. The fabric is quick-dry, antimicrobial, and designed specifically for grappling sports.",
      },
      {
        question: "Are your rashguards competition legal?",
        answer:
          "Yes! Our rashguards meet IBJJF and most major competition requirements. They feature appropriate coverage and approved materials for both gi and no-gi competition.",
      },
      {
        question: "How do I care for my rashguard?",
        answer:
          "Machine wash cold with like colors, hang dry or tumble dry low. Avoid fabric softeners and bleach. Turn inside out before washing to protect graphics.",
      },
      {
        question: "Will the graphics fade or crack?",
        answer:
          "Our sublimation printing process integrates the design directly into the fabric fibers, making it permanent. Graphics won't crack, peel, or fade with proper care.",
      },
    ],
  },
  {
    id: "orders",
    title: "Orders & Payment",
    icon: CreditCard,
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "Credit and Debit Cards: Visa, Mastercard, American Express, Discover\n\nDigital Wallets: Apple Pay, Google Pay, Shop Pay\n\nLocal Payment Methods: iDEAL (Netherlands), Sofort (Germany), Bancontact (Belgium)\n\nManual Payment Methods: Cash on Delivery (COD), Bank Transfers\n\nWe also accept PayPal for secure online payments.",
      },
      {
        question: "Can I modify or cancel my order?",
        answer:
          "Orders can be modified or cancelled within 24 hours of placement. After that, we may have already begun processing your order for shipment.",
      },
      {
        question: "Do you offer preorders?",
        answer:
          "Yes! Join our waitlist to be notified when preorders open. Preorder customers will receive a 15% early bird discount and priority shipping.",
      },
      {
        question: "Is my payment information secure?",
        answer:
          "Absolutely. We use industry-standard SSL encryption and never store your payment information on our servers. All transactions are processed securely.",
      },
    ],
  },
  {
    id: "returns",
    title: "Returns & Exchanges",
    icon: RefreshCw,
    questions: [
      {
        question: "What is your return policy?",
        answer:
          "30-day returns on unworn items with original tags. Items must be in original condition. We provide prepaid return labels for US customers.",
      },
      {
        question: "How do I return an item?",
        answer:
          "Contact our customer service team at deephalf.contact@gmail.com with your order number. We'll send you a prepaid return label and instructions within 24 hours.",
      },
      {
        question: "How long do refunds take?",
        answer:
          "Refunds are processed within 3-5 business days after we receive your returned item. You'll receive an email confirmation when the refund is issued.",
      },
      {
        question: "Can I exchange for a different size?",
        answer:
          "Yes! Size exchanges are free within 30 days. We'll send you the new size as soon as we receive your return, so you're not without your gear for long.",
      },
    ],
  },
  {
    id: "wholesale",
    title: "Wholesale & Teams",
    icon: Users,
    questions: [
      {
        question: "Do you offer team discounts?",
        answer:
          "Yes! Teams and gyms ordering 10+ pieces receive volume pricing. Contact us for a custom quote and to discuss design options.",
      },
      {
        question: "Can you create custom designs for our team?",
        answer:
          "We offer custom sublimation printing for team orders. Minimum order quantities apply. Reach out to discuss your vision.",
      },
      {
        question: "What's the minimum order for wholesale?",
        answer:
          "Wholesale accounts have a minimum initial order of $500. Subsequent orders have a $250 minimum. Contact us to set up a wholesale account.",
      },
      {
        question: "How long does custom production take?",
        answer:
          "Custom orders typically take 3-4 weeks from design approval to shipping. Rush orders may be available for an additional fee.",
      },
    ],
  },
  {
    id: "feedback",
    title: "Feedback & Reviews",
    icon: MessageSquare,
    questions: [
      {
        question: "How can I leave feedback about my order?",
        answer:
          "We value your feedback! Please email us at deephalf.contact@gmail.com with your order details and experience. Your input helps us improve our products and service.",
      },
      {
        question: "Can I write a product review?",
        answer:
          "Yes! We encourage customers to share their experiences. You can email your review to deephalf.contact@gmail.com or leave feedback on our social media channels.",
      },
      {
        question: "How do you handle complaints or issues?",
        answer:
          "We take all feedback seriously. Contact us at deephalf.contact@gmail.com with any concerns, and we'll work to resolve them promptly and fairly.",
      },
      {
        question: "Do you have a review system on your website?",
        answer:
          "Currently, we handle reviews via email at deephalf.contact@gmail.com. We're working on implementing an on-site review system for future updates.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (categoryId: string, questionIndex: number) => {
    const itemId = `${categoryId}-${questionIndex}`
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const faqs = [
    {
      question: "What sizes are available?",
      answer: "Our rashguards are available in sizes XS through 3XL. We recommend checking our size chart for the most accurate fit. If you're between sizes, we suggest sizing up for a more comfortable fit."
    },
    {
      question: "How do I care for my rashguard?",
      answer: "Machine wash cold with like colors, do not bleach, tumble dry low, and do not iron. This will help maintain the quality and longevity of your rashguard."
    },
    {
      question: "Is the rashguard competition legal?",
      answer: "Yes, our rashguards meet all major competition requirements for BJJ, including IBJJF standards. They feature the appropriate sleeve length and material composition."
    },
    {
      question: "What is the return policy?",
      answer: "We offer a 30-day return policy for unworn items in their original packaging. Custom or personalized items are not eligible for returns. Please contact our customer service team to initiate a return."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days within the continental US. International shipping may take 7-14 business days depending on the destination."
    },
    {
      question: "Are the rashguards suitable for both gi and no-gi training?",
      answer: "Yes, our rashguards are designed to perform excellently in both gi and no-gi training. The material is durable enough to withstand gi friction while maintaining comfort and flexibility."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can view shipping options and rates during checkout."
    },
    {
      question: "What is the compression level of the rashguards?",
      answer: "Our rashguards feature a medium compression fit that provides muscle support without restricting movement. They're designed to be comfortable for extended training sessions."
    }
  ]

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <span className="ml-6 flex-shrink-0">
                    <svg
                      className="h-6 w-6 transform group-open:rotate-180 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-8">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
