import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Home({ className, products }) {
  return (
    <div className={className}>
      <h1>Products List</h1>

      {products.length > 0 ? (
        <ul className="Home__products">
          {products.map((item) => (
            <li key={item.id} className="Home__product-item">
              <img
                className="Home__image"
                src={require(`../assets/${item.imageURL}`)}
                alt={item.name}
              />
              <div className="Home__name">{item.name}</div>
              <small className="Home__type">{item.type}</small>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading products....</div>
      )}
    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array.isRequired, 
};

export default styled(Home)`
  .Home__products {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 0 -12px;
  }

  .Home__product-item {
    padding: 12px;
    width: 200px;
  }

  .Home__image {
    width: 100%;
    border-radius: 8px;
  }

  .Home__name {
    font-weight: bold;
    margin-top: 8px;
  }

  .Home__type {
    color: #666;
  }
`;
