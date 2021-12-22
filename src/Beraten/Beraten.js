import React from "react";
import './Beraten.scss';

class Beraten extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: 'none',
            menu2: ''

        }

    }

    showText = () => {
        if (this.state.menu === 'none') {
            this.setState({menu: 'block'})
            this.setState({menu2: 'column'})
        }
    }

    render() {

        return (
            <div className="beraten">
                <h1 className="beraten__title">Was möchten Sie beraten?</h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="beraten__btn" style={{ flexDirection: this.state.menu2}} onClick={this.showText}>
                            <h5 className="beraten__btn-title">Einkommenssicherung</h5>
                            <ul className="beraten__liste" style={{ display: this.state.menu}}>
                                <li className="beraten__item">
                                    <input type="checkbox" id="gesundheit"/>
                                    <label htmlFor="gesundheit">Gesundheit</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="ktg"/>
                                    <label htmlFor="ktg">KTG, BU und EU</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="s-krankheit"/>
                                    <label htmlFor="s-krankheit">Schwere Krankheit</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="unfall"/>
                                    <label htmlFor="unfall">Unfall</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="pflegefall"/>
                                    <label htmlFor="pflegefall">Pflegefall</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="todesfall"/>
                                    <label htmlFor="todesfall">Todesfall</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="beraten__btn" style={{ flexDirection: this.state.menu2}} onClick={this.showText}>
                            <h5 className="beraten__btn-title">Vermögensabsicherung</h5>
                            <ul className="beraten__liste" style={{ display: this.state.menu}}>
                                <li className="beraten__item">
                                    <input type="checkbox" id="gesundheit"/>
                                    <label htmlFor="gesundheit">Gesundheit</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="ktg"/>
                                    <label htmlFor="ktg">KTG, BU und EU</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="s-krankheit"/>
                                    <label htmlFor="s-krankheit">Schwere Krankheit</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="unfall"/>
                                    <label htmlFor="unfall">Unfall</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="pflegefall"/>
                                    <label htmlFor="pflegefall">Pflegefall</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="todesfall"/>
                                    <label htmlFor="todesfall">Todesfall</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="beraten__btn" style={{ flexDirection: this.state.menu2}} onClick={this.showText}>
                            <h5 className="beraten__btn-title">Vermögensaufbau</h5>
                            <ul className="beraten__liste" style={{ display: this.state.menu}}>
                                <li className="beraten__item">
                                    <input type="checkbox" id="gesundheit"/>
                                    <label htmlFor="gesundheit">Gesundheit</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="ktg"/>
                                    <label htmlFor="ktg">KTG, BU und EU</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="s-krankheit"/>
                                    <label htmlFor="s-krankheit">Schwere Krankheit</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="unfall"/>
                                    <label htmlFor="unfall">Unfall</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="pflegefall"/>
                                    <label htmlFor="pflegefall">Pflegefall</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="todesfall"/>
                                    <label htmlFor="todesfall">Todesfall</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="beraten__btn" style={{ flexDirection: this.state.menu2}} onClick={this.showText}>
                            <h5 className="beraten__btn-title">Altersvorsorge</h5>
                            <ul className="beraten__liste" style={{ display: this.state.menu}}>
                                <li className="beraten__item">
                                    <input type="checkbox" id="gesundheit"/>
                                    <label htmlFor="gesundheit">Gesundheit</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="ktg"/>
                                    <label htmlFor="ktg">KTG, BU und EU</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="s-krankheit"/>
                                    <label htmlFor="s-krankheit">Schwere Krankheit</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="unfall"/>
                                    <label htmlFor="unfall">Unfall</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="pflegefall"/>
                                    <label htmlFor="pflegefall">Pflegefall</label>
                                </li>
                                <li className="beraten__item">
                                    <input type="checkbox" id="todesfall"/>
                                    <label htmlFor="todesfall">Todesfall</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="btn__wrap">
                    <a className="start-btn btn" href="/">Zurück</a>
                    <a className="start-btn btn" href="/about">Weiter</a>
                </div>
            </div>
        );
    }
}

export default Beraten;
