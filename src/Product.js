import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>

      <h4>Customer Reviews:</h4>
      <ul>
        {product.reviews.map((review) => (
          <li key={review.id}>
            <p><strong>{review.user}</strong>: {review.comment} (Rating: {review.rating}/5)</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
