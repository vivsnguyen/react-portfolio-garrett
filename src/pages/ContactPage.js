import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Contents';

// get our fontawesome imports
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>

                <FontAwesomeIcon icon={faLinkedin} size="2x"/>        
                <a href="https://www.linkedin.com/in/thuyvi-nguyen/">LinkedIn</a>
                <br></br>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                    email : <a href="mailto:vivipnguyen@gmail.com">vivipnguyen@gmail.com</a>
                </p>
            </Content>
        </div>
    );

}

export default ContactPage;