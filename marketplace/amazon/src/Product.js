import React from 'react'
import "./Product.css";

function Product() {
    return (
        <div className="product">
            <div className="product__info">         {/*Product info is the info in the container- title, price, rating */}
               <p>The lean startup</p>
            <p className="product__price">         {/*product price listed in product info container */}
            <small>$</small>
            <small>19.99</small>
            </p>
            <div className="product__rating">
                <p>*</p>
            </div>
        </div>

        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dmVnZXRhYmxlfGVufDB8fDB8&auto=format&fit=crop&w=600&q=60" alt=""/>
     
        <button>Add to Basket</button>
     </div>
    );
}

export default Product
