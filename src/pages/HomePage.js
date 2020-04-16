import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomePage(props) {

    return(
        <div>
            <div className="justify-content-center">
                <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            </div>
            <Carousel />
        </div>
    );

}

export default HomePage;