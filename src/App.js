import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Header from "./components/Header"
import Portfolio from './components/Portfolio';

const App = () => {
    return(
        <Router>
            <Header />
            <div className="content">
                <Route exact path="/my-portfolio">
                    <About />
                </Route>
                <Route path="/my-portfolio/portfolio">
                    <Portfolio />
                </Route>
                <Route path="/my-portfolio/contacts">
                    <Contacts />
                </Route>
            </div>
            
            <Footer />
        </Router>
    );
}

export default App;
