import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id="8"
                        title='Salad Meal Kit'
                        price={14.99}
                        rating={3}
                        image='https://images.unsplash.com/photo-1568158918251-8eb4601f0c5f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHNhbGFkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
                    />
                    <Product
                        id="9"
                        title='Salad Meal Kit'
                        price={13.99}
                        rating={3}
                        image='https://images.unsplash.com/photo-1571047399553-603e2138b646?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c2FsYWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
                    />
                    <Product
                        id="10"
                        title='Salad Meal Kit'
                        price={14.99}
                        rating={3}
                        image='https://images.unsplash.com/photo-1568158879083-c42860933ed7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fHNhbGFkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="1"
                        title='Broccoli'
                        price={4.99}
                        rating={3}
                        image='https://www.crunchycreamysweet.com/wp-content/uploads/2020/01/steamed-broccoli-B-500x500.jpg'
                    />
                    < Product
                        id="2"
                        title='Carrots'
                        price={1.35}
                        rating={4}
                        image='https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    />
                    < Product
                        id="3"
                        title='Bell Peppers'
                        price={1.99}
                        rating={4}
                        image='https://images.unsplash.com/photo-1577098093907-93abb87b29be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
                    />
                    <Product
                        id="4"
                        title='Tomatoes'
                        price={2.35}
                        rating={4}
                        image='https://images.unsplash.com/photo-1513791053024-3b50799fdd7b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80'
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="5"
                        title='Blueberries'
                        price={4.55}
                        rating={5}
                        image='https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                    />
                    <Product
                        id="6"
                        title='Green Apples'
                        price={4.99}
                        rating={5}
                        image='https://images.unsplash.com/photo-1512578659172-63a4634c05ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                    />
                    <Product
                        id="7"
                        title='Strawberries'
                        price={3.99}
                        rating={4}
                        image='https://images.unsplash.com/photo-1543158181-e6f9f6712055?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
