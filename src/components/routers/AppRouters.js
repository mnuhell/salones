import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../Home';
import Bodas from '../Bodas';



const AppRouters = () => {
    return ( 
        <Router>
            
            <Switch>
                <Route path="/" component={ Home }>
                    
                </Route>
                <Route exact path="/bodas" component={ Bodas }>
                    
                </Route>
                <Route exact path="/catering">
                    
                </Route>
            </Switch>
        </Router>
     );
}
 
export default AppRouters;