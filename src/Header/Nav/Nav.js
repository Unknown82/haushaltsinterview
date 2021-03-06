import React from "react";
import './Nav.css';

class Nav extends React.Component {


    render() {

        return (
            <div className="header-nav">
                <div className="container">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/beraten">Beraten</a></li>
                            <li><a href="/about">Austausch</a></li>
                            <li><a href="/kontakt">Kontakt</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Nav;
