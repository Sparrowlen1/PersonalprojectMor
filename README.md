# Sparrowlen Dropshipping Admin Portal Description
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Space+Grotesk&weight=500&size=24&duration=3500&pause=800&color=6366F1&center=true&vCenter=true&width=750&lines=Sparrowlen+Dropshipping;Connect+Global+Suppliers;Manage+Your+Product+Catalog;Scale+Your+Business)](https://git.io/typing-svg)

## Features

- **Landing Page** - Beautiful hero section with store information and key features
- **Product Management** - Full CRUD operations (Create, Read, Update, Delete)
- **Search Functionality** - Dynamic product search by name or origin
- **Category Filtering** - Filter products by category
- **Responsive Design** - Mobile-friendly layout with Tailwind CSS
- **Toast Notifications** - Beautiful feedback using Sonner
- **Lucide Icons** - Modern icon system without emojis


## Tech Stack

- React 18
- React Router DOM v6
- Tailwind CSS
- Axios
- JSON Server (Mock Backend)
- Lucide React Icons
- Sonner (Toast Notifications)


## Installation

### Prerequisites

- Node.js 
- npm or yarn package manager

## Setup Instructions

1. navigate to folder structure
2. install dependencies(npm install)
3. install additional dep - 
npm install react-router-dom axios lucide-react sonner
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

## running the projext
1. open terminal 1 and run JSON server(backend) use the below code
npx json-server --watch db.json --port 3000

2. open terminal 2 and run
npm run dev

3. or run both using concurrently by install
npm install -D concurrently

then add this in your package.json ""dev:full": "concurrently \"npm run server\" \"npm run dev\"""

then run
npm run dev:full

## API Endpoints

GET - /products (get all products)
GET- /products/:id (get single product)
POST - /products (add new producty)
PATCH- /products/:id(update product)
DELETE-/products/:id(delete product)
GET- /store(get stor information)