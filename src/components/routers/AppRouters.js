import React from 'react';
import { Switch, Route, BrowserRouter as Router, useParams } from 'react-router-dom';
import Home from '../Home';
import Bodas from '../Bodas';
import ContactForm from '../ContactForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Separators from '../Separators';
import '../../App.css';


const AppRouters = () => {

    return ( 
        <Router>
            <Header />
            <Separators />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/bodas" component={ Bodas } />
                <Route exact path="/comuniones" component={ Bodas } />
                <Route exact path="/eventos" component={ Bodas } />
                <Route exact path="/contacto" component={ ContactForm } />
                <Route exact path="/catering" />
            </Switch>
            
            <Footer />
        </Router>

     );
}
 
export default AppRouters;