import React from "react";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Start from "../Start/Start";
import Beraten from "../Beraten/Beraten";
import About from "../About/About";
import Kontakt from "../Kontakt/Kontakt";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


class App extends React.Component {


    render() {

        return (
            <div className="site">
                <Header />
                <div className="container">
                    <main>
                        <Router>
                            <Routes>
                                <Route exact path="/" element={<Start/>}/>
                                <Route exact path="/beraten" element={<Beraten/>}/>
                                <Route exact path="/about" element={<About/>}/>
                                <Route exact path="/kontakt" element={<Kontakt/>}/>
                            </Routes>
                        </Router>
                    </main>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
