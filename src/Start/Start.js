import React from "react";
import './Start.scss';

class Start extends React.Component {
            state = {
            info1: 'none',
            info2: 'none',
            info3: 'none',
            info4: 'none',
            info5: 'none'
        }



    showSozial = () => {
        if (this.state.info1 === 'block') {
            this.setState({info1: 'none'})
        } else {
            this.setState({info1: 'block'})
        }
    }
    showId = () => {
        if (this.state.info2 === 'block') {
            this.setState({info2: 'none'})
        } else {
            this.setState({info2: 'block'})
        }
    }
    showSteuer = () => {
        if (this.state.info3 === 'block') {
            this.setState({info3: 'none'})
        } else {
            this.setState({info3: 'block'})
        }
    }
    showGroesse = () => {
        if (this.state.info4 === 'block') {
            this.setState({info4: 'none'})
        } else {
            this.setState({info4: 'block'})
        }
    }
    showGewicht = () => {
        if (this.state.info5 === 'block') {
            this.setState({info5: 'none'})
        } else {
            this.setState({info5: 'block'})
        }
    }

    render() {

        return (
            <div className="start">
                <h1 className="start__title">Haushaltsinterview</h1>
                <form action="">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="angaben">
                                <h5 className="angaben__title">Ihre persönlichen Angaben</h5>
                                <div className="angaben__anrede">
                                    <span className="angaben__anrede-title">Anrede: </span>
                                    <input className="angaben__anrede-int" type="radio" id="herr" name="anrede"
                                           defaultValue="herr" />
                                    <label htmlFor="herr">Herr</label>
                                    <input className="angaben__anrede-int" type="radio" id="frau" name="anrede"
                                           defaultValue="frau" />
                                    <label htmlFor="herr">Herr</label>
                                    <input className="angaben__anrede-int" type="radio" id="divers" name="anrede"
                                           defaultValue="divers" />
                                    <label htmlFor="divers">Divers</label>
                                </div>
                                <input className="angaben__int" name="title" type="text" placeholder="Titel"/>
                                <input className="angaben__int" name="vorname" type="text" placeholder="Vorname"/>
                                <input className="angaben__int" name="nachname" type="text" placeholder="Nachname"/>
                                <label htmlFor="geburt">Geburtsdatum: </label>
                                <input className="angaben__int-geburt" name="geburt" id="geburt" type="date"
                                       placeholder="Geburtsdatum"/>
                                <input className="angaben__int" name="familienstand" type="text" placeholder="Familienstand"/>
                                <input className="angaben__int" name="national" type="text" placeholder="Nationalität"/>
                                <input className="angaben__int" name="anzahl-kinder" type="number" placeholder="Anzahl Kinder"/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="angaben">
                                <h5 className="angaben__title">Wie können wir Sie erreichen?</h5>
                                <input className="angaben__int" name="mobil" type="tel" placeholder="Mobil"/>
                                <input className="angaben__int" name="telefon" type="tel" placeholder="Telefon"/>
                                <input className="angaben__int" name="email" type="email" placeholder="Email"/>
                                <input className="angaben__int" name="strasse" type="text" placeholder="Straße"/>
                                <input className="angaben__int" name="hausnummer" type="number" placeholder="Hausnummer"/>
                                <input className="angaben__int" name="plz" type="number" placeholder="PLZ"/>
                                <input className="angaben__int" name="ort" type="text" placeholder="Ort"/>
                                <input className="angaben__int" name="bundesland" type="text" placeholder="Bundesland"/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="angaben">
                                <h5 className="angaben__title">Ihre Bankverbindung</h5>
                                <input className="angaben__int" name="iban" type="text" placeholder="IBAN"/>
                                <input className="angaben__int" name="bic" type="text" placeholder="BIC"/>
                                <h5 className="angaben__title angaben__title-mt">Ihr Personalausweis</h5>
                                <input className="angaben__int-ausweis" name="personalausweis" type="file"/>
                                <h5 className="angaben__title angaben__title-mt">Ihre Sozialversicherung und Steuerinformationen</h5>

                                <span className="angaben__info">Sozialversicherungsnummer
                                    <span className="angaben__info-i" onMouseOver={this.showSozial}>i
                                    <span className="angaben__info-text" style={{display: this.state.info1}}>Wofür brauchen wir Ihre Sozialversicherungsnummer?
                                        Z.B. für die Riester-Rente gilt Ihre Sozialversicherungsnummer. Sie wird als Riester-Zulagennummer verwendet.
                                        Diese dient ebenfalls dafür, Ihre gezahlten Beiträge eindeutig Ihnen zuzuordnen. Die Sozialversicherungsnummer
                                        finden Sie auch auf Bescheiden der Rentenversicherung. Haben Sie Ihren Sozialversicherungsausweis verlegt,
                                        können Sie einen neuen Ausweis bei der Rentenversicherung oder bei Ihrer Krankenkasse beantragen.</span>
                                </span>
                                </span>
                                <input className="angaben__int" name="sozialversicherung" type="text" placeholder="Sozialversicherungsnummer"/>

                                <span className="angaben__info angaben__info-mt">Steuer-ID
                                    <span className="angaben__info-i" onMouseOver={this.showId}>i
                                    <span className="angaben__info-text" style={{display: this.state.info2}}>Wofür brauchen wir Ihre Steuer-ID?
                                        Die Steuer-ID wird z.B. für einen Freistellungsauftrag im Depot benötigt. Sie können die Steuer-Identifikationsnummer
                                        an folgenden Stellen finden: Einkommensteuerbescheid. Lohnsteuerbescheinigung. Schreiben des Bundeszentralamt für
                                        Steuern bei der erstmaligen Erteilung der Steuer-Identifikationsnummer.</span>
                                </span>
                                </span>
                                <input className="angaben__int" name="steuer-id" type="number" placeholder="Steuer-ID"/>

                                <div className="angaben__steuer">
                                    <label htmlFor="steuerklasse">Steuerklasse</label>
                                    <select className="angaben__steuer-select" name="steuerklasse" id="steuerklasse">
                                        <option value="">--Auswahl--</option>
                                        <option value="steuerklasse1">Steuerklasse 1</option>
                                        <option value="steuerklasse2">Steuerklasse 2</option>
                                        <option value="steuerklasse3">Steuerklasse 3</option>
                                        <option value="steuerklasse4">Steuerklasse 4</option>
                                        <option value="steuerklasse5">Steuerklasse 5</option>
                                        <option value="steuerklasse6">Steuerklasse 6</option>
                                    </select>
                                    <span className="angaben__info-i" onMouseOver={this.showSteuer}>i
                                        <span className="angaben__info-text" style={{display: this.state.info3}}>Welche Steuerklasse sollten Sie wählen?<br/>
                                            Steuerklassen<br/>
                                            Steuerklasse 1: Ledige, verwitwete (ab dem übernächsten Jahr nach dem Tod des Ehepartners) oder geschiedene Personen ohne Kinder<br/>
                                            Steuerklasse 2: Alleinerziehende, ledige, verwitwete oder geschiedene Personen ohne Kinder<br/>
                                            Steuerklasse 3: Verheirateter Alleinverdiener oder Doppelverdiener bei dem der andere Ehegatte auf Antrag beider die Steuerklasse 5 hat.<br/>
                                            Steuerklasse 4: Verheirateter Doppelverdiener.<br/>
                                            Steuerklasse 5: Das Pendant zu Steuerklasse 3.<br/>
                                            Steuerklasse 6: Wenn eine weitere Lohnsteuerkarte für ein weiteres Dienstverhältnis vorliegt.</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="angaben">
                                <h5 className="angaben__title">Größe und Gewicht (Optional)</h5>

                                <span className="angaben__info">Größe
                                    <span className="angaben__info-i" onMouseOver={this.showGroesse}>i
                                    <span className="angaben__info-text" style={{display: this.state.info4}}>Wofür brauchen wir Ihre Größe?
                                        Versicherer prüfen vor Abschluss der Versicherung den Gesundheitszustand. Für die Kalkulation
                                        von bestimmten Risiken ist die Angabe von Ihrer Größe notwendig.</span>
                                </span>
                                </span>
                                <input className="angaben__int" name="groesse" type="number" placeholder="Größe"/>

                                <span className="angaben__info angaben__info-mt">Gewicht
                                    <span className="angaben__info-i" onMouseOver={this.showGewicht}>i
                                    <span className="angaben__info-text" style={{display: this.state.info5}}>Wofür brauchen wir Ihr
                                        Gewicht? Versicherer prüfen vor Abschluss der Versicherung den Gesundheitszustand.
                                        Für die Kalkulation von bestimmten Risiken ist die Angabe von Ihrem Gewicht notwendig.</span>
                                </span>
                                </span>
                                <input className="angaben__int" name="gewicht" type="number" placeholder="Gewicht"/>

                                <h5 className="angaben__title angaben__title-mt">Ihr Beruf</h5>
                                <div className="angaben__beruf">
                                    <label className="angaben__beruf-label" htmlFor="beruf">Tätigkeit/Berufsgruppe</label>
                                    <select className="angaben__beruf-select" name="beruf" id="beruf">
                                        <option value="">--Auswahl:--</option>
                                        <option value="arbeitnehmer*inArbeitnehmer*in">Arbeitnehmer*inArbeitnehmer*in</option>
                                        <option value="im-oed">im ÖD</option>
                                        <option value="arbeitslos">Arbeitslos</option>
                                        <option value="beamte*r">Beamte*r</option>
                                        <option value="beamte*r-auf-widerruf">Beamte*r auf Widerruf</option>
                                        <option value="beamte*r-auf-probe">Beamte*r auf Probe</option>
                                        <option value="berufssoldat*">Berufssoldat*</option>
                                        <option value="in-haushaltend">in Haushaltend</option>
                                        <option value="rentner*in">Rentner*in</option>
                                        <option value="schueler*in">Schüler*in</option>
                                        <option value="student*in">Student*in</option>
                                        <option value="selbststaendig">Selbstständig</option>
                                        <option value="soldat*in-auf-zeit">Soldat*in auf Zeit</option>
                                        <option value="kind">Kind</option>
                                        <option value="anderes">anderes</option>
                                    </select>
                                </div>
                                <div className="angaben__bildung">
                                    <label className="angaben__beruf-label" htmlFor="bildung">Höchster Bildungsabschluss</label>
                                    <select className="angaben__beruf-select" name="bildung" id="bildung">
                                        <option value="" disabled>--Auswahl:--</option>
                                        <option value="abitur">Abitur</option>
                                        <option value="realschule">Realschule</option>
                                        <option value="hauptschule">Hauptschule</option>
                                        <option value="bachelor">Bachelor</option>
                                        <option value="master">Master</option>
                                        <option value="diplom">Diplom</option>
                                        <option value="promotion">Promotion Dr. Prof</option>
                                        <option value="dr">Dr</option>
                                        <option value="prof">Prof</option>
                                        <option value="1-staatsexamen">1. Staatsexamen</option>
                                        <option value="2-staatsexamen">2. Staatsexamen</option>
                                        <option value="meister-gewerbliche">Meister/Gewerbliche</option>
                                        <option value="kaufmaennische-ausbildung">Kaufmännische Ausbildung</option>
                                        <option value="betriebs-fachwirt-ba">Betriebs / Fachwirt / BA</option>
                                        <option value="techniker">Techniker</option>
                                        <option value="ausbildung-im-handwerk">Ausbildung im Handwerk</option>
                                        <option value="keiner">Keiner</option>
                                    </select>
                                </div>
                                <input className="angaben__int angaben__int-mt" type="email" placeholder="Ausgeübte Tätigkeit / Beruf"/>
                                <div className="angaben__anrede angaben__int-mt">
                                    <span className="angaben__anrede-title">Ich bezahle Kirchensteuer: </span>
                                    <input className="angaben__anrede-int" name="kirche" type="radio" id="ja"
                                           defaultValue="ja"/>
                                    <label htmlFor="ja">Ja</label>
                                    <input className="angaben__anrede-int" name="kirche" type="radio" id="nein"
                                           defaultValue="nein"/>
                                    <label htmlFor="nein">Nein</label>
                                </div>
                                <input className="angaben__int" name="anzahl-gehalt" type="number" placeholder="Anzahl der Gehälter pro Jahr?"/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6" >
                            <div className="angaben">
                                <h5 className="angaben__title">Monatliche Einkünfte</h5>

                                <div className="einnahmen d-flex align-items-center justify-content-between">
                                    <span className="angaben__info">Einkommen Brutto (nicht selbstst.)</span>
                                    <input className="angaben__int einnahmen__int" name="einkommen-brutto" type="number" placeholder="€"/>
                                </div>

                                <div className="einnahmen d-flex align-items-center justify-content-between">
                                    <span className="angaben__info">Einkommen Netto (nicht selbstst.)</span>
                                    <input className="angaben__int einnahmen__int" name="einkommen-netto" type="number" placeholder="€"/>
                                </div>

                                <div className="einnahmen d-flex align-items-center justify-content-between">
                                    <span className="angaben__info">Kindergeld</span>
                                    <input className="angaben__int einnahmen__int" name="kindergeld" type="number" placeholder="€"/>
                                </div>

                                <div className="einnahmen d-flex align-items-center justify-content-between">
                                    <span className="angaben__info">Elterngeld</span>
                                    <input className="angaben__int einnahmen__int" name="elterngeld" type="number" placeholder="€"/>
                                </div>

                                <div className="einnahmen d-flex align-items-center justify-content-between">
                                    <span className="angaben__info">EK aus Kapitalvermögen</span>
                                    <input className="angaben__int einnahmen__int" name="ek-kapital" type="number" placeholder="€"/>
                                </div>

                                <div className="einnahmen d-flex align-items-center justify-content-between">
                                    <span className="angaben__info">Land- und Forstwirtschaft</span>
                                    <input className="angaben__int einnahmen__int" name="land-forst" type="number" placeholder="€"/>
                                </div>


                                <div className="einnahmen d-flex align-items-center justify-content-between">
                                    <span className="angaben__info">Gewerbebetrieb</span>
                                    <input className="angaben__int einnahmen__int" name="gewerbebetrieb" type="number" placeholder="€"/>
                                </div>

                                <div className="einnahmen d-flex align-items-center justify-content-between">
                                    <span className="angaben__info">Selbstständige Arbeit</span>
                                    <input className="angaben__int einnahmen__int" name="selbst-arbeit" onInput={this.selbstArbeit} type="number" placeholder="€"/>
                                </div>

                                <div className="einnahmen d-flex align-items-center justify-content-between">
                                    <span className="angaben__info">Vermietung und Verpachtung</span>
                                    <input className="angaben__int einnahmen__int" name="vermietung-verpachtung" type="number" placeholder="€"/>
                                </div>

                                <div className="einnahmen d-flex align-items-center justify-content-between">
                                    <span className="angaben__info">450€ Job</span>
                                    <input className="angaben__int einnahmen__int" name="basis-job" type="number" placeholder="€"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6" >
                            <div className="angaben">
                                <h5 className="angaben__title">Monatliche Ausgaben</h5>

                                <div className="ausgaben d-flex align-items-center justify-content-between">
                                    <span className="angaben__info">Warmmiete</span>
                                    <input className="angaben__int ausgaben__int" name="warmmiete" type="number" placeholder="€"/>
                                </div>

                                <div className="ausgaben d-flex justify-content-between align-items-center">
                                    <span className="angaben__info">Benzin</span>
                                    <input className="angaben__int ausgaben__int" name="benzin" type="number" placeholder="€"/>
                                </div>

                                <div className="ausgaben d-flex justify-content-between align-items-center">
                                    <span className="angaben__info">Essen</span>
                                    <input className="angaben__int ausgaben__int" name="essen" type="number" placeholder="€"/>
                                </div>

                                <div className="ausgaben d-flex justify-content-between align-items-center">
                                    <span className="angaben__info">Kleidung</span>
                                    <input className="angaben__int ausgaben__int" name="kleidung" type="number" placeholder="€"/>
                                </div>

                                <div className="ausgaben d-flex justify-content-between align-items-center">
                                    <span className="angaben__info">Friseur</span>
                                    <input className="angaben__int ausgaben__int" name="friseur" type="number" placeholder="€"/>
                                </div>

                                <div className="ausgaben d-flex justify-content-between align-items-center">
                                    <span className="angaben__info">Sport</span>
                                    <input className="angaben__int ausgaben__int" name="sport" type="number" placeholder="€"/>
                                </div>

                                <div className="ausgaben d-flex justify-content-between align-items-center">
                                    <span className="angaben__info">Spenden</span>
                                    <input className="angaben__int ausgaben__int" name="spenden" type="number" placeholder="€"/>
                                </div>

                                <div className="ausgaben d-flex justify-content-between align-items-center">
                                    <span className="angaben__info">Vereinsbeiträge</span>
                                    <input className="angaben__int ausgaben__int" name="vereinsbeiträge" type="number" placeholder="€"/>
                                </div>

                                <div className="ausgaben d-flex justify-content-between align-items-center">
                                    <span className="angaben__info">Kind</span>
                                    <input className="angaben__int ausgaben__int" name="kind" type="number" placeholder="€"/>
                                </div>

                                <div className="ausgaben d-flex justify-content-between align-items-center">
                                    <span className="angaben__info">Abos/Streamingdienste</span>
                                    <input className="angaben__int ausgaben__int" name="abos" type="number" placeholder="€"/>
                                </div>

                                <div className="ausgaben d-flex justify-content-between align-items-center">
                                    <span className="angaben__info">Urlaub</span>
                                    <input className="angaben__int ausgaben__int" name="urlaub" type="number" placeholder="€"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn__wrap">
                        <a className="start-btn btn" href="/beraten">Weiter</a>
                    </div>

                </form>
            </div>
        );
    }
}

export default Start;
