import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__constainer">
                <img
                    className="home__image"
                    src="https://images.unsplash.com/photo-1526438281712-35d96b8586e5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                />

                <div className="home__row">
                    <Product />
                </div>

                <div className="home__row">
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div>

                <div className="home__row">
                    {/* Product */}
                    {/* Product */}
                </div>
            </div>
        </div>
    );
}

export default Home;
