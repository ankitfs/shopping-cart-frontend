import React from "react";

const HeaderComponent = () => {
    let userLoggedIn = false;
    let navigation;

    if(userLoggedIn) {
        navigation = (<nav>
                        <div className="container">
                            <h1 className="logo">AD</h1>
                            <ul className="navbar">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </nav>)
    }
    return (        
        <header>
            {navigation}
            <div className="showcase">
                <center><h2>Shopping Cart Management Portal</h2></center>
            </div>
        </header>
    );
}

export default HeaderComponent;