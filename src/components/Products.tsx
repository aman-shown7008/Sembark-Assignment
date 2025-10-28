import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { add } from "../store/cartSlice";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import type { Product } from "../types";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCats = searchParams.getAll("category");
  const sort = searchParams.get("sort") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await res.json();
      setProducts(data);
      setCategories([...new Set(data.map((p) => p.category))]);
    };
    fetchProducts();
  }, []);

  const handleFilterChange = (newCats: string[], sortVal: string) => {
    const params = new URLSearchParams();
    newCats.forEach((c) => params.append("category", c));
    if (sortVal) params.set("sort", sortVal);
    setSearchParams(params, { replace: true });
  };

  const visibleProducts = useMemo(() => {
    let list = [...products];
    if (selectedCats.length) list = list.filter((p) => selectedCats.includes(p.category));
    if (sort === "price_asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price_desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [products, selectedCats.join("|"), sort]);

  return (
    <motion.div className="productsPage" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <Filters categories={categories} selected={selectedCats} sort={sort} onChange={handleFilterChange}/>
      <main className="productsApp" aria-live="polite">
        <AnimatePresence>
          {visibleProducts.map((p) => (
            <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
              <ProductCard product={p} onAdd={() => dispatch(add(p))} />
            </motion.div>
          ))}
        </AnimatePresence>
      </main>
    </motion.div>
  );
};

export default Products;
