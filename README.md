# 🎧 Gadget Heaven

A modern, responsive e-commerce web application for browsing gadgets, viewing detailed product specifications, and analyzing product pricing and ratings visually.

---

## 🚀 Live Demo

> [Live Website Link]( https://gadget-g-galaxy.netlify.app/ )

---

## ✨ Features

- **Dynamic Product Browsing:** Filter gadgets seamlessly by categories (Laptops, Phones, Accessories, Smartwatches, etc.).
- **Detailed Product View:** Dedicated product pages displaying specifications, ratings, prices, and availability.
- **Interactive Statistics Page:** Visualizes gadget pricing and customer ratings on a dual-axis `Recharts` graph (`Area` + `Bar` for price, `Scatter` for ratings).
- **Fast Data Loading:** Built with React Router v6 `loader` functions for optimized data fetching across routes.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens using Tailwind CSS.

---

## 🛠️ Tech Stack

- **Frontend Library:** [React](https://react.dev/)
- **Routing:** [React Router v6](https://reactrouter.com/) (using `createBrowserRouter` and `useLoaderData`)
- **Data Visualization:** [Recharts](https://recharts.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

---

## 📂 Project Structure

```text
gadget-heaven/
├── public/
│   ├── category-data.json
│   ├── gadget-galaxy-data.json
│   └── statistics-data.json
├── src/
│   ├── components/
│   │   ├── Cards.jsx
│   │   ├── Heading.jsx
│   │   └── Navbar.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── ErrorPage.jsx
│   │   ├── Home.jsx
│   │   ├── Statistics.jsx
│   │   └── ViewDetails.jsx
│   ├── routes/
│   │   └── routes.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md