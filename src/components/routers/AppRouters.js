import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../Home';
import Bodas from '../Bodas';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';



const AppRouters = () => {
    return ( 
        <Router>
            <Header />
            <div className="container">
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/bodas" component={ Bodas } />
                <Route exact path="/catering" />
            </Switch>
            </div>
            <Footer />
        </Router>

     );
}
 
export default AppRouters;