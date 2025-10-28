import React from "react";
import Products from "../components/Products";

const Home: React.FC = () => {
  return (
    <div className="container">
      <h2 className="heading">Welcome to my Ecommerce-Web</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
