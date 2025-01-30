import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/Product";
import "./ProductPage.css";

const ProductPage = () => {
  const categories = ["Alt", "PCs", "Komponenter", "Tilbehør"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="product-page">
      <h1>Produkter</h1>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.id)}
          >
            {product.images.length > 0 ? (
              <img src={product.images[0]} alt={product.name} />
            ) : (
              <p>No image available</p>
            )}
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">{product.price},-</p>
            <ul>
              {product.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
