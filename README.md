# Vue3-rabbit

🛒 Vue E-Commerce Platform
A modern e-commerce platform built with Vue 3 + Vite + Pinia + Axios, featuring core functionalities like shopping cart, category browsing, order checkout, and payment. Perfect for learning component-based architecture and modern frontend development practices.

🚀 Highlights
🧩 Modular structure with clear separation of concerns

📦 State management using Pinia

🔗 Centralized and reusable API requests

📱 Responsive design for mobile and desktop

⚙️ Support for lazy loading, custom directives, and global styling

🧪 Dev-friendly configuration with VS Code, Prettier, and more

📁 Project Structure
```bash
.
├── .vscode/                  # VS Code settings and extensions
├── public/                   # Static public assets
├── src/                      # Main source code
│   ├── apis/                 # Encapsulated API modules
│   │   ├── cart/             # 🛒 Shopping cart APIs
│   │   ├── category/         # 📚 Product category APIs
│   │   ├── checkout/         # ✅ Checkout APIs
│   │   ├── details/          # 📦 Product details APIs
│   │   ├── home/             # 🏠 Homepage APIs (carousel, recommendations)
│   │   ├── layout/           # 🎨 Layout-related APIs
│   │   ├── order/            # 📦 Order APIs
│   │   ├── pay/              # 💰 Payment APIs
│   │   └── user/             # 👤 User-related APIs
│   ├── assets/               # Local static assets (images, fonts)
│   ├── components/           # Global reusable components
│   ├── composables/          # Composition API functions
│   ├── directives/           # Custom Vue directives (e.g., lazy load)
│   ├── router/               # Page-level routing configuration
│   ├── stores/               # State management (Pinia)
│   │   ├── cartStore/        # 🛒 Cart state and logic
│   │   ├── categoryStore/    # 📚 Category navigation state
│   │   └── userStore/        # 👤 Login/logout and user info
│   ├── styles/               # Global SCSS styles and variables
│   ├── utils/                # Axios instance and shared utilities
│   ├── views/                # Page views
│   │   ├── Cartlist/         # 🛒 Cart page
│   │   ├── Category/         # 📚 Category listing page
│   │   ├── Checkout/         # ✅ Checkout/payment page
│   │   ├── Detail/           # 📦 Product detail view
│   │   ├── Home/             # 🏠 Homepage layout
│   │   ├── Layout/           # 🎨 Shared layout components
│   │   ├── Login/            # 🔐 Login view
│   │   ├── Member/           # 👤 Member dashboard
│   │   ├── Pay/              # 💰 Payment page
│   │   └── Subcategory/      # 📂 Subcategory product list
│   ├── App.vue               # Root component
│   └── main.js               # Project entry point
├── index.html                # HTML entry point
├── package.json              # Project dependencies
├── .gitignore                # Git ignored files
├── .prettierrc.json          # Prettier formatting config
└── vite.config.ts            # Vite project config

```
📦 Getting Started



# Install dependencies
npm install

# Start development server
npm run dev




## 🧪 Features Overview

| Module       | Description                              |
|--------------|------------------------------------------|
| 🏠 Homepage   | Carousel, new arrivals, popular picks     |
| 📚 Category   | Browse products by categories/subcategories |
| 📦 Product    | View detailed product info               |
| 🛒 Cart       | Add/remove items, proceed to checkout    |
| ✅ Orders     | Order summary and status                 |
| 💰 Payments   | Simulated payment interface              |
| 👤 User Area  | Login/logout and personal dashboard      |

## 🚀 Features Overview

| Module        | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| 🏠 **Homepage** (`views/home`) | Carousel for promotions, product categories, new arrivals, bestseller list, fixed sidebar recommendations |
| 📚 **Category Page** (`views/Category`) | Multi-level product categories, breadcrumb navigation, subcategory product display |
| 📦 **Product Detail** (`views/detail`) | Image carousel, SKU selection, quantity input, add to cart, promotions and services |
| 🛒 **Shopping Cart** (`views/Cartlist`) | Item list with quantity adjustments, select all/single item, delete, total amount calc |
| ✅ **Checkout** (`views/checkout`) | Address management, delivery time and payment method selection, cost summary, order submission |
| 💰 **Payment** (`views/Pay`) | 30-min countdown, Alipay/WeChat/Bank options, payment callback processing |
| 👤 **User Area** (`views/Member`) | Login/logout, user info display, personal dashboard |
| 📱 **Responsive Design** | Mobile-first layout, adapts gracefully to desktop/tablet/mobile screens |


## 🛠 Tech Stack

- **Frontend Framework**: Vue 3  
- **UI Component Library**: Element Plus  
- **State Management**: Pinia  
- **HTTP Client**: Axios  
- **Build Tool**: Vite  
- **Routing**: Vue Router 4  
- **Code Formatter**: Prettier  
- **Development Environment**: VS Code  

