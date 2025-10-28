import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types";

const ProductCard: React.FC<{ product: Product; onAdd?: (p: Product) => void }> = ({ product, onAdd }) => {
  return (
    <article className="card" aria-labelledby={`title-${product.id}`}>
      <Link to={`/product/${product.id}/details`} className="prod-link" aria-label={`Open ${product.title} details`}>
        <img className="prod-img" src={product.image} alt={product.title} />
        <h4 id={`title-${product.id}`}>{product.title}</h4>
      </Link>
      <p className="sr-only">{product.description}</p>
      <div className="card-bottom">
        <strong>${product.price.toFixed(2)}</strong>
        <button className="btn" onClick={() => onAdd?.(product)} aria-label={`Add ${product.title} to cart`}>Add to Cart</button>
      </div>
    </article>
  );
};

export default ProductCard;
