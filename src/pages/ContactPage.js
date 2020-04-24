import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Contents';

// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <FontAwesomeIcon icon={faHome} />
            <a href="https://www.linkedin.com/in/thuyvi-nguyen/">LinkedIn</a>

            <p>email : vivipnguyen@gmail.com</p>
            </Content>
        </div>
    );

}

export default ContactPage;