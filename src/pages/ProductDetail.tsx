import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import type { Product } from "../types";
import { useAppDispatch } from "../store/hooks";
import { add } from "../store/cartSlice";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    let mounted = true;
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((r) => r.json())
      .then((data: Product) => {
        if (mounted) setProduct(data);
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading)
  return (
    <div className="loading">
      <div className="loader"></div>
      <p>Loading product details...</p>
    </div>
  );

  if (!product)
  return (
    <div className="not-found">
      <p>⚠️ Product not found</p>
      <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );


  return (
    <div className="productDetail container">
      <button className="btn" onClick={() => navigate(-1)} aria-label="Go back">Back</button>
      <div className="detail-grid">
        <img className="detail-img" src={product.image} alt={product.title} />
        <div>
          <h2>{product.title}</h2>
          <p className="muted">{product.category}</p>
          <p>{product.description}</p>
          <h3>${product.price.toFixed(2)}</h3>
          <div className="detail-actions">
            <button className="btn" onClick={() => dispatch(add(product))} aria-label={`Add ${product.title} to cart`}>Add to Cart</button>
            <Link to="/cart" className="btn" aria-label="Open cart">Go to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
