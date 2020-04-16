import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Contents';

function ContactPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello</p>
            </Content>
        </div>
    );

}

export default ContactPage;