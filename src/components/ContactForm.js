import React, { useState } from 'react';
import { ContentStyled } from '../components/styled/component/ContentStyled';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import ContactMaps from './ContactMaps';


const ContactForm = () => {

    const defaultProps  = {
        center: {
            lat: 38.121049,
            lang: -0.905077
        },
        zoom: 11
    }
    
    return (
        
        <ContentStyled>
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyABPb4bfDaVkPuZ8nHSDEOKibyaZwqXv2Y", language: 'es' }}  
            defaultCenter={defaultProps.center}
            center={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            yesIWantToUseGoogleMapApiInternals
            >

                <ContactMaps 
                    text="Salones Thamesis"
                />

            </GoogleMapReact>
        </div>  
        </ContentStyled>
        

    )
}

export default ContactForm;