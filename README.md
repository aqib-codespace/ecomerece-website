<div align="center">

# 🛒 TrioCart

**A modern e-commerce storefront built with Next.js, Redux Toolkit and Supabase.**

[![Live demo](https://img.shields.io/badge/Live_demo-trio--cart.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://trio-cart.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-181818?style=flat-square&logo=supabase&logoColor=3ECF8E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white)

</div>

## Overview

TrioCart is a full shopping experience: browse and filter products, save favourites, check out, and manage orders from a customer dashboard. Accounts are handled with Supabase Auth, and cart and wishlist state lives in Redux Toolkit so it survives page reloads.

## Features

**Storefront**
- Home page with hero, featured products, categories and testimonials
- Shop page with category filters and sorting
- Product detail pages with related products

**Cart, wishlist and checkout**
- Cart and wishlist managed with Redux Toolkit and saved to localStorage
- Multi-step checkout flow
- Order confirmation page

**Accounts (Supabase Auth)**
- Sign up with email verification code
- Log in, log out, forgot and reset password
- Forms validated with React Hook Form and Zod
- Protected routes for signed-in customers

**Customer dashboard**
- Order history, wishlist and profile
- Profile photo upload with drag and drop

**UI**
- Responsive design with Tailwind CSS and Radix UI components
- Page and component animations with Framer Motion
- Toast notifications

> Product data comes from a built-in demo catalog, and the checkout is a demo flow that doesn't take real payments.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js (App Router), React |
| State | Redux Toolkit |
| Auth | Supabase Auth |
| Forms | React Hook Form, Zod |
| UI | Tailwind CSS, Radix UI, Framer Motion, Lucide icons, Sonner |
| Hosting | Vercel |

## Project structure

```
src/
├── app/                 # Next.js App Router routes (shop, product, cart, checkout, dashboard, auth)
├── components/          # Layout, home sections, product cards, shared UI
├── page-components/     # Page-level components used by the routes
├── store/               # Redux store, cart / wishlist / user slices, localStorage middleware
├── contexts/            # Auth and cart contexts
├── hooks/               # Cart, wishlist and UI hooks
└── lib/                 # Supabase client, auth helpers, demo product data
```

## Getting started

**Requirements:** Node.js 18+ and a free [Supabase](https://supabase.com) project.

```bash
git clone https://github.com/aqib-codespace/triocart-ecommerce.git
cd triocart-ecommerce
npm install
```

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Then start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Author

Built by **Muhammad Aqib**, full-stack and automation engineer.

[Portfolio](https://aqib-portfolio-mern.vercel.app) · [LinkedIn](https://www.linkedin.com/in/aqib-engineer2/) · [GitHub](https://github.com/aqib-codespace)
