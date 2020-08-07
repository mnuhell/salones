import React, { useState } from 'react';
import { ContentStyled } from '../components/styled/component/ContentStyled';
import styled from 'styled-components';

const Input = styled.input`

        outline:none !important;
        outline-width: 2px !important;
        box-shadow: #F6CC94;
        -moz-box-shadow: #F6CC94;
        -webkit-box-shadow: #F6CC94;
        height: 2.3rem;
        border: none;
        border-radius: 0;
        background-color: #283A55;
        padding: 10px;
        font-weight: 900;
        font-size: 1.1rem;
        width: 100%;
    `;

const Contact = styled.div`
    
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 100%100%;
    
    @media( min-width: 320px) {
        display: grid;
        grid-template-columns: 100%;
        grid-gap: 20px;
        width: 100%100%;
    }

    @media( min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr ;
        grid-gap: 20px;
        width: 100%100%;
    }
    

    h3{

        font-size: 2.5rem;

        small{

            display: block;
        }
    }


`;    

const ContactForm = () => {

    const [ FormValue, setFormValue ] = useState("");

    return (
        
        <ContentStyled>
        <div className="container">
        <h1>Contácto</h1>
        <div className="row">
        <Contact>
            <div className="contact_form">
                <h3>Formulario de contácto 
                    <small>¿Te apatece que te llamémos?</small>
                    </h3>
                <form>
                    <div className="form-group">
                    <label>Email</label>
                        <Input className="inputext" type="email" name="email" placeholder="Email">
                        
                        </Input>
                    </div>
                </form>
            </div>
                
            <div className="contact_data">
                <h3>Información de contácto
                <small>Te apetece hablar con nosotros</small>
                </h3>
            </div>
        </Contact>
            </div>
        
        </div>
            
        </ContentStyled>
        

    )
}

export default ContactForm;