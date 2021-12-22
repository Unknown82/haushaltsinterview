import React from "react";
import './Header.css';
import Nav from "./Nav/Nav";
import logo from './logo.svg';

class Header extends React.Component {
   // constructor(props) {
   //     super(props);
   // }

    render() {

        return (
            <header>
                <div className="top-bar animate-dropdown"></div>
                <div className="main-header">
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex align-items-center">
                                <img className="main__img" src={logo} width="80" alt="Logo"/>
                                <h1 className="site-title">vertragsengel</h1>
                            </div>
                        </div>

                    </div>
                </div>
                <Nav />
            </header>
        );
    }
}

export default Header;
