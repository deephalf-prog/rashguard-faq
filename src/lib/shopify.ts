import { GraphQLClient } from 'graphql-request'

// Initialize Shopify Storefront API client
const shopifyClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL + '/api/2024-01/graphql.json',
  {
    headers: {
      'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,
      'Content-Type': 'application/json',
    },
  }
)

// GraphQL queries
export const GET_PRODUCTS = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          description
          handle
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
        }
      }
    }
  }
`

export const GET_PRODUCT = `
  query GetProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      handle
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
            availableForSale
          }
        }
      }
    }
  }
`

export const CREATE_CHECKOUT = `
  mutation CreateCheckout($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        webUrl
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
`

// Helper functions
export async function getProducts(first: number = 10) {
  try {
    const response = await shopifyClient.request(GET_PRODUCTS, { first })
    return response.products.edges.map((edge: any) => edge.node)
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export async function getProduct(handle: string) {
  try {
    const response = await shopifyClient.request(GET_PRODUCT, { handle })
    return response.productByHandle
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export async function createCheckout(variantId: string) {
  try {
    const response = await shopifyClient.request(CREATE_CHECKOUT, {
      input: {
        lineItems: [{ variantId, quantity: 1 }],
      },
    })
    return response.checkoutCreate.checkout
  } catch (error) {
    console.error('Error creating checkout:', error)
    return null
  }
} 