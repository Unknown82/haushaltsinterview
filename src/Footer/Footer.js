import React from "react";
import './Footer.css';

class Footer extends React.Component {


    render() {

        return (
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="footer__text">
                                © {new Date().getFullYear()} Copyright vertragsengel
                            </p>

                        </div>
                    </div>

                </div>

            </footer>
        );

    }
}

export default Footer;
