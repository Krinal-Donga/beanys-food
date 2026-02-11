import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartPage.css";
import { fetchCart, deleteCartItem, updateCartQty } from "../Redux/CartSlice";
import { useNavigate } from "react-router-dom";

function CartPage({ closeCart }) {
  const [confirmId, setConfirmId] = useState(null);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items) || [];
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const NavigateProduct = (id) => {
    navigate(`../productdtl/${id}`);
    closeCart(); // optional: product open kare to cart close ho
  };

  const Total = items.reduce((total, item) => {
    return total + (item.price || 0) * (item.qty || 0);
  }, 0);

  const handleDeleteClick = (id) => {
    setConfirmId(id);
  };

  const handleConfirmDelete = (id) => {
    dispatch(deleteCartItem(id));
    setConfirmId(null);
  };

  const handleCancelDelete = () => {
    setConfirmId(null);
  };

  return (
    <>
      {/* OVERLAY */}
      <div className="cart-overlay" onClick={closeCart}></div>

      {/* CART DRAWER */}
      <div
        className="cart-page-wrapper open"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="cart-header">
          <h4>Your Cart</h4>
          <button className="btn-close" onClick={closeCart}>
          </button>
        </div>

        {/* BODY */}
        <div className="cart-body">
          {items.length === 0 ? (
            <p className="empty-cart">Cart is empty</p>
          ) : (
            items.map((item) => (
              <div className="cart-item" key={item.docId}>
                <div
                  className="cart-img"
                  onClick={() => NavigateProduct(item.id)}
                >
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="cart-details">
                  {confirmId === item.docId ? (
                    <>
                      <p className="confirm-text">
                        Are you sure you want to remove?
                      </p>
                      <div className="confirm-btns">
                        <button
                          className="yes-btn"
                          onClick={() => handleConfirmDelete(item.docId)}
                        >
                          Yes
                        </button>
                        <button
                          className="no-btn"
                          onClick={handleCancelDelete}
                        >
                          No
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="cart-title">{item.title}</p>
                      <div className="current-price">
                        ₹{item.price}
                      </div>

                      <div className="qty-box">
                        <button
                          onClick={() =>
                            item.qty > 1 &&
                            dispatch(
                              updateCartQty({
                                docId: item.docId,
                                qty: item.qty - 1,
                              })
                            )
                          }
                        >
                          −
                        </button>

                        <span>{item.qty}</span>

                        <button
                          onClick={() =>
                            dispatch(
                              updateCartQty({
                                docId: item.docId,
                                qty: item.qty + 1,
                              })
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </>
                  )}
                </div>

                <button
                  className="delete-btn"
                  onClick={() => handleDeleteClick(item.docId)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        <div className="cart-footer">
          <h5>Grand Total: ₹{Total}</h5>
        </div>
      </div>
    </>
  );
}

export default CartPage;
