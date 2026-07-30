# 🚀 Gadget Heaven - E-Commerce Product Showcase

Welcome to **Gadget Heaven**, a modern e-commerce web application designed to help users explore, filter, and manage their favorite tech gadgets seamlessly.

---
## 🚀 Live Demo -> https://gadget-g-galaxy.netlify.app/

---
## 🔗 Requirement Document Link

* **React Router:** [https://reactrouter.com/start/data/installation]
* **React Icons:** [https://react-icons.github.io/react-icons/]
* **React-Hot-Toast:** [https://react-hot-toast.com/]
* **Recharts:**  [https://recharts.github.io/]

---

## 💡 React Fundamental Concepts Used

* **JSX & Component-Based Architecture:** Modular and reusable UI components (e.g., `Card`, `Navbar`, `Footer`, `Dashboard`).
* **Props & Prop Destructuring:** Passing dynamic data between parent and child components safely.
* **State Management (`useState`):** Managing local component states like item counts, active category tabs, and modal visibilities.
* **Side Effects (`useEffect`):** Fetching local dynamic JSON data and synchronizing data with browser storage.
* **React Router (`react-router-dom`):** Client-side single-page application (SPA) routing using `Routes`, `Route`, `Link`, `NavLink`, and dynamic URL parameters (`useParams`).
* **Conditional Rendering:** Displaying fallbacks, stock status badges, disabled states, and active navigation styles based on dynamic conditions.
* **Event Handling:** Capturing user actions such as adding items to cart, switching tabs, and sorting items.

---

## 📦 Data Handling & State Management

This project uses a combination of **Context API** and **Local Storage** to ensure smooth data management and persistence across page refreshes:

1. **Context API:** Used as a central global state manager to handle real-time changes across the application, such as updating cart item counts in the navbar badge and calculating the total cart cost dynamically.
2. **Local Storage:** Used to store the cart items and wishlist data persistently in the browser, ensuring user selections are saved even if the page is reloaded or closed.

---

## ✨ 5 Key Features

1. **Dynamic Category Filtering & Sorting:** Users can seamlessly filter gadgets by categories (Laptops, Phones, Smartwatches, Accessories) or sort cart items by price in descending order.
2. **Detailed Product View Page:** Each product card routes dynamically (`/product/:id`) to its dedicated detail view showcasing ratings, stock availability, specifications, and action buttons.
3. **Interactive Cart & Wishlist System:** Add items directly to a shopping cart or wishlist from product detail pages, with instant updates to total price counters and badges.
4. **Persistent Local Storage Integration:** Cart and wishlist items are saved directly to `localStorage`, so user data remains saved across browser sessions.
5. **Dashboard & Checkout Modal:** A clean dashboard allows users to manage, view, and remove cart/wishlist items. Clicking "Purchase" triggers a confirmation modal and clears the cart.