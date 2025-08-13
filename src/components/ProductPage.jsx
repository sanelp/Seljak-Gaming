import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import products from "../data/Product";
import "./ProductPage.css";

const ProductPage = () => {
  const categories = ["All", "PCs", "Components", "Accessories"];
  const categoryLabels = {
    "All": "All",
    "PCs": "PC",
    "Components": "Komponenter", 
    "Accessories": "Tilbehør"
  };
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
    // Optional: Add visual feedback
    alert(`${product.name} lagt til i handlevogn!`);
  };

  const handleViewDetails = (e, productId) => {
    e.stopPropagation();
    navigate(`/products/${productId}`);
  };

  // Filter products by category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "price-low":
        return parseFloat(a.price.toString().replace(/[^\d.-]/g, '')) - parseFloat(b.price.toString().replace(/[^\d.-]/g, ''));
      case "price-high":
        return parseFloat(b.price.toString().replace(/[^\d.-]/g, '')) - parseFloat(a.price.toString().replace(/[^\d.-]/g, ''));
      case "category":
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  return (
    <div className="product-page">
      <div className="product-page-content">
        <h1 className="product-page-title">Produkter</h1>
        
        <div className="filter-controls">
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-button ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
          
          <div className="sort-dropdown">
            <label htmlFor="sort-select">Sorter etter:</label>
            <select id="sort-select" value={sortBy} onChange={handleSortChange}>
              <option value="name">Navn (A-Z)</option>
              <option value="price-low">Pris (Lav-Høy)</option>
              <option value="price-high">Pris (Høy-Lav)</option>
              <option value="category">Kategori</option>
            </select>
          </div>
        </div>
        
        <div className="product-list">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="product-card-image">
                {product.images.length > 0 ? (
                  <img src={product.images[0]} alt={product.name} />
                ) : (
                  <div className="no-image">No image available</div>
                )}
                <div className="product-card-overlay">
                  {product.category === 'PCs' ? 'PC' : 
                   product.category === 'Components' ? 'Komponenter' :
                   product.category === 'Accessories' ? 'Tilbehør' : 
                   product.category}
                </div>
              </div>
              
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="price">{product.price},-</div>
              
              <ul>
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
              
              <div className="product-actions">
                <button 
                  className="btn-primary"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to Cart
                </button>
                <button 
                  className="btn-secondary"
                  onClick={(e) => handleViewDetails(e, product.id)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
