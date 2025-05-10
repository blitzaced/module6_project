# 🛍️ E-commerce Product App

A simple React-based product showcase application to practice components, props, and state. This project avoids external frameworks like Bootstrap to emphasize custom CSS styling.

## 🚀 Features

- Functional components with `useState` for managing product data.
- Props used to pass data between components.
- Custom styling for each product using unique CSS classes.
- Clear, responsive layout using CSS Grid.

## 🧠 Learning Objectives

- Understand React component structure.
- Practice using `useState` for state management.
- Learn to pass and use props in child components.
- Style components with custom CSS.

## 📁 Project Structure

ecom-product-app/
├── src/
│ ├── components/
│ │ ├── ProductList.jsx
│ │ └── ProductItem.jsx
│ ├── App.jsx
│ ├── App.css
│ └── main.jsx
├── index.html
└── package.json

sql
Copy
Edit

## 📦 Setup Instructions

1. **Create the React App using Vite**  
   ```bash
   npx create-vite ecom-product-app --template react
   cd ecom-product-app
   npm install
Add the provided code to the src folder (e.g., App.jsx, components/ProductList.jsx, etc.).

Run the app

bash
Copy
Edit
npm run dev
Open http://localhost:5173 in your browser.

## 🎨 Styling
Each product has its own custom class for visual differentiation. Example:

css
Copy
Edit
.product-style-a .product-name {
  color: #e63946;
}

## ✅ Checklist
 Products displayed with name, price, and description.

 State and props used correctly.

 Custom CSS applied to differentiate product visuals.

 (Optional) Add filtering or images.

## 🧪 Bonus Ideas
Add product categories and filtering.

Include images for each product.

Expand to include cart functionality (next step).
