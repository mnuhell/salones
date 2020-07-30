import React from 'react';
import Header from './Header';
import Footer from '../Footer/Footer';
import AppRouters from '../routers/AppRouters';


const AppContainer = () => {
    return ( 

        <>
            <Header />
            
                <AppRouters />

            <Footer />
        </>
     );
}
 
export default AppContainer;