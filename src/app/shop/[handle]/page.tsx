"use client"

import { useEffect, useState } from "react"
import { getProduct, createCheckout } from "@/lib/shopify"
import { Button } from "@/components/ui/button"

interface ProductVariant {
  id: string
  title: string
  price: {
    amount: string
    currencyCode: string
  }
  availableForSale: boolean
}

interface Product {
  id: string
  title: string
  description: string
  handle: string
  priceRange: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
  images: {
    edges: Array<{
      node: {
        url: string
        altText: string
      }
    }>
  }
  variants: {
    edges: Array<{
      node: ProductVariant
    }>
  }
}

export default function ProductPage({ params }: { params: { handle: string } }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null)
  const [loading, setLoading] = useState(true)
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(params.handle)
        setProduct(data)
        if (data?.variants.edges[0]) {
          setSelectedVariant(data.variants.edges[0].node)
        }
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.handle])

  const handleAddToCart = async () => {
    if (!selectedVariant) return

    setCheckoutLoading(true)
    try {
      const checkout = await createCheckout(selectedVariant.id)
      if (checkout?.webUrl) {
        window.location.href = checkout.webUrl
      }
    } catch (error) {
      console.error("Error creating checkout:", error)
    } finally {
      setCheckoutLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Loading product...</h2>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Product not found</h2>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {product.images.edges.map((image, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src={image.node.url}
                  alt={image.node.altText || product.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <p className="text-2xl font-semibold text-red-600">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: product.priceRange.minVariantPrice.currencyCode,
                }).format(parseFloat(product.priceRange.minVariantPrice.amount))}
              </p>
            </div>

            <div className="prose max-w-none">
              <p>{product.description}</p>
            </div>

            {/* Variant Selection */}
            {product.variants.edges.length > 1 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Select Variant</h3>
                <div className="grid grid-cols-3 gap-2">
                  {product.variants.edges.map(({ node: variant }) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`p-2 border rounded-md text-center ${
                        selectedVariant?.id === variant.id
                          ? "border-red-600 bg-red-50"
                          : "border-gray-300 hover:border-red-600"
                      } ${!variant.availableForSale ? "opacity-50 cursor-not-allowed" : ""}`}
                      disabled={!variant.availableForSale}
                    >
                      {variant.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              disabled={!selectedVariant?.availableForSale || checkoutLoading}
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              {checkoutLoading
                ? "Processing..."
                : selectedVariant?.availableForSale
                ? "Add to Cart"
                : "Out of Stock"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 