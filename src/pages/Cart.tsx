import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { remove, clear } from "../store/cartSlice";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((s) => s.cart);

  const handleRemove = (id: number) => dispatch(remove(id));

  return (
    <div className="Cart container">
      <h3>Cart</h3>
      {products.length === 0 ? (
        <div className="emptyCart">
          <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty cart illustration"  className="emptyCart-img"/>
          <p>Your cart is empty</p>
        </div>
        ) : (
        <>
          <div className="cartWrapper">
            {products.map((product) => (
              <div className="cartCard" key={product.id}>
                <img className="prod-img" src={product.image} alt={product.title} />
                <div style={{ flex: 1, padding: "0 12px" }}>
                  <h4>{product.title}</h4>
                  <h5>${product.price.toFixed(2)}</h5>
                </div>
                <div>
                  <button className="btn" onClick={() => handleRemove(product.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12 }}>
            <button className="btn" onClick={() => dispatch(clear())}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
