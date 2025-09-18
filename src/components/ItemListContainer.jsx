import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <section style={styles.container}>
      <h1>{greeting}</h1>
      <p>Muy pronto encontrarás aquí nuestro catálogo de productos 🚀</p>
    </section>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center"
  }
};

export default ItemListContainer;
