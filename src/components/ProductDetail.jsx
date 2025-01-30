import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/Product";
import { CartContext } from "../context/CartContext";
import "./ProductDetail.css";


const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleNextImage = () => {
    setSelectedImageIndex(
      (prevIndex) =>
        (prevIndex + 1) % (product.images.length + (product.videoUrl ? 1 : 0))
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + (product.images.length + (product.videoUrl ? 1 : 0))) %
        (product.images.length + (product.videoUrl ? 1 : 0))
    );
  };

  return (
    <div className="product-detail">
      <div className="product-images">
        <div className="thumbnail-images">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} ${index + 1}`}
              onClick={() => setSelectedImageIndex(index)}
              className={selectedImageIndex === index ? "selected" : ""}
            />
          ))}
      
        </div>
        <div className="main-image-container">
          {selectedImageIndex === product.images.length ? (
            <video className="main-image" controls>
              <source src={product.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              className="main-image"
              src={product.images[selectedImageIndex]}
              alt={product.name}
            />
          )}
          <button className="prev-arrow" onClick={handlePrevImage}>
            &#10094;
          </button>
          <button className="next-arrow" onClick={handleNextImage}>
            &#10095;
          </button>
        </div>
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">Pris: {product.price},-</p>
        <button className="add-to-cart" onClick={() => addToCart(product)}>
          Legg til i handlekurv
        </button>
        <p>{product.detailedDescription}</p>
        <ul className="specifications">
          {product.specifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
