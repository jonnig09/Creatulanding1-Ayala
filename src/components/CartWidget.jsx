import React from "react";

const CartWidget = () => {
  return (
    <div style={styles.cart}>
      🛒 <span style={styles.count}>3</span>
    </div>
  );
};

const styles = {
  cart: {
    cursor: "pointer",
    fontSize: "1.2rem",
    background: "rgba(255,255,255,0.2)",
    padding: "4px 10px",
    borderRadius: "8px"
  },
  count: {
    fontWeight: "bold",
    marginLeft: "4px"
  }
};

export default CartWidget;
