import React from "react";

const HeaderComponent = () => {
    return (
        <header>
            <nav>
                <div className="container">
                    <h1 className="logo">SC</h1>
                    <ul className="navbar">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
            <div className="showcase">
                <h2>Shopping Cart Application</h2>
            </div>
        </header>
    );
}

export default HeaderComponent;