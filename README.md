# 🛍️ Ecommerce-Web

A modern, responsive **E-commerce Web Application** built using **ReactJS + TypeScript + Redux**.  
It allows users to explore products, view detailed product information, apply category filters, sort items, and manage their shopping cart — all with smooth navigation and state persistence.

---

## 🚀 Live Demo
🔗 **[Visit the Live App on Netlify](https://papaya-stardust-6b9a90.netlify.app/)**

---

## 🧠 Features

✅ **Product Grid Display**  
- Displays all products in a clean, responsive grid.  
- Each card includes product image, title, and price.  

✅ **Product Detail Page**  
- Uses dynamic routing `/product/:id/details`.  
- Displays full product information (image, description, price).  
- “Add to Cart” and “Go to Cart” buttons included.  

✅ **Filtering & Sorting**  
- Filter products by multiple categories.  
- Sort by price (low → high / high → low).  
- State persists on refresh and works with back navigation (URL-based filters).  

✅ **Cart Management**  
- Add/remove products easily.  
- “Clear Cart” button to empty all items.  
- Shows total items and total cart value dynamically.  

✅ **Responsive Design**  
- Fully optimized for mobile, tablet, and desktop.  
- Smooth animations and consistent UI.  

✅ **Navigation**  
- Navigate between Home, Product Details, and Cart.  
- Back button from details page returns you to previous view.  

---

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | ReactJS, TypeScript |
| **State Management** | Redux Toolkit |
| **Styling** | CSS3 (Modular, Responsive, Animated) |
| **Routing** | React Router DOM |
| **API** | [FakeStoreAPI](https://fakestoreapi.com/) |
| **Build Tool** | Vite / Create React App |

---

## ⚙️ Setup & Installation

Follow these steps to run the app locally:

# 1️⃣ Clone the repository
git clone https://github.com/your-username/ecommerce-web.git

# 2️⃣ Navigate to the project folder
cd ecommerce-web

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev 
Then open 👉 http://localhost:5173

---

## 📂 Folder Structure
📦 ecommerce-web
 ┣ 📂 src
 ┃ ┣ 📂 components     # Reusable UI components (Navbar, Filters, ProductCard, etc.)
 ┃ ┣ 📂 pages          # Main pages (Home, Cart, ProductDetail)
 ┃ ┣ 📂 store          # Redux slices & hooks
 ┃ ┣ 📜 App.tsx        # Root component
 ┃ ┣ 📜 main.tsx       # Entry point
 ┃ ┣ 📜 styles.css     # Global styling
 ┗ 📜 package.json

 ---

## 🌟 Additional Features Implemented

- Modern animated logo and navbar.
- Animated empty cart state with vector illustration.
- Polished responsive UI with hover effects and transitions.
- Centralized global state with Redux Toolkit.
- Smooth UX with subtle micro-interactions.

---

## 💬 Contributing

- Feel free to fork this repository and enhance it further.
- Suggestions and pull requests are welcome! 🤝

---

🧑‍💻 Author

Aman Mishra
💼 Frontend Developer | React | TypeScript | Redux
📧 [amanmishra80045@gmail.com]
