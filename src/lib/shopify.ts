import { GraphQLClient } from 'graphql-request'

// Types
type ShopifyProduct = {
  id: string
  title: string
  handle: string
  description: string
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
        altText: string | null
      }
    }>
  }
  variants: {
    edges: Array<{
      node: {
        id: string
        title: string
        price: {
          amount: string
          currencyCode: string
        }
      }
    }>
  }
}

// Initialize client only if credentials exist
const client = (() => {
  const url = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL
  const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN
  
  if (!url || !token) return null
  
  return new GraphQLClient(`${url}/api/2024-01/graphql.json`, {
    headers: {
      'X-Shopify-Storefront-Access-Token': token,
    },
  })
})()

// GraphQL Queries
const PRODUCTS_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`

const PRODUCT_QUERY = `
  query GetProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
`

// Helper function to safely extract products from response
function extractProducts(data: any): ShopifyProduct[] {
  try {
    if (!data?.products?.edges) return []
    return data.products.edges.map((edge: any) => edge.node)
  } catch {
    return []
  }
}

// Helper function to safely extract a single product from response
function extractProduct(data: any): ShopifyProduct | null {
  try {
    if (!data?.productByHandle) return null
    return data.productByHandle
  } catch {
    return null
  }
}

// Public API
export async function getProducts(first: number = 10): Promise<ShopifyProduct[]> {
  if (!client) return []
  
  try {
    const data = await client.request(PRODUCTS_QUERY, { first })
    return extractProducts(data)
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export async function getProduct(handle: string): Promise<ShopifyProduct | null> {
  if (!client) return null
  
  try {
    const data = await client.request(PRODUCT_QUERY, { handle })
    return extractProduct(data)
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
} 