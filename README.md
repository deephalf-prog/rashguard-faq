# Deep Half Rashguard Website

A modern Next.js website for Deep Half Rashguard, featuring a shop, product pages, and Shopify integration.

## Project Structure

```
rashguard-faq/
├── src/
│   ├── app/
│   │   ├── page.tsx (Home page)
│   │   ├── layout.tsx (Root layout)
│   │   ├── globals.css (Global styles)
│   │   ├── shop/
│   │   │   ├── page.tsx (Shop page)
│   │   │   └── [handle]/
│   │   │       └── page.tsx (Product detail page)
│   │   ├── about/
│   │   │   └── page.tsx (About page)
│   │   ├── specs/
│   │   │   └── page.tsx (Specs page)
│   │   ├── contact/
│   │   │   └── page.tsx (Contact page)
│   │   └── faq/
│   │       └── page.tsx (FAQ page)
│   ├── components/
│   │   ├── navigation.tsx
│   │   ├── footer.tsx
│   │   ├── waitlist-form.tsx
│   │   └── ui/
│   │       └── button.tsx
│   └── lib/
│       ├── utils.ts
│       └── shopify.ts
└── public/
    └── (images and static files)
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env.local` file with:
   ```
   NEXT_PUBLIC_SHOPIFY_STORE_URL=https://your-store.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=your_storefront_access_token
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

## Key Features

1. **Home Page**
   - Hero section with gradient background
   - Features section
   - Waitlist form

2. **Shop Page**
   - Product grid
   - Shopify integration
   - Product filtering

3. **Product Pages**
   - Product images
   - Variant selection
   - Add to cart functionality

4. **Other Pages**
   - About Us
   - Product Specs
   - Contact Form
   - FAQ

## Components

### Navigation
- Responsive menu
- Mobile-friendly design
- Links to all pages

### Footer
- Contact information
- Social media links
- Newsletter signup

### Waitlist Form
- Email collection
- Form validation
- Success/error states

## Shopify Integration

The website uses Shopify's Storefront API for:
- Product data
- Inventory management
- Shopping cart
- Checkout process

## Styling

- Tailwind CSS for styling
- Custom color scheme (red and black)
- Responsive design
- Modern UI elements

## Deployment

1. Create a GitHub repository
2. Push code to GitHub
3. Deploy to Vercel
4. Connect custom domain

## Required Dependencies

```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "graphql": "latest",
    "graphql-request": "latest",
    "lucide-react": "latest",
    "tailwindcss": "latest",
    "@tailwindcss/forms": "latest",
    "@tailwindcss/typography": "latest"
  }
}
```

## Development Notes

- Built with Next.js 13+ (App Router)
- Uses TypeScript for type safety
- Implements responsive design
- Follows modern web development practices

## Contact

For support or questions, contact:
- Email: support@deephalf.com
- Website: https://deephalf.com
