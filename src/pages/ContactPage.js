import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Contents';

function ContactPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <a href="https://www.linkedin.com/in/thuyvi-nguyen/">LinkedIn</a>

            <p>email : vivipnguyen@gmail.com</p>
            </Content>
        </div>
    );

}

export default ContactPage;