import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <h2 style={styles.logo}>MiTienda</h2>

      {/* Links */}
      <ul style={styles.links}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      {/* Carrito */}
      <CartWidget />
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#0d6efd",
    padding: "12px 24px",
    color: "white"
  },
  logo: { margin: 0 },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "18px"
  }
};

export default NavBar;
