import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Contents';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello</p>
                I graduated in 2019 with a Bachelor's in Cognitive Science from UC Berkeley. Throughout my college career, I've dabbled in teaching a lot of different subjects (reading, math, science, music, and computer science!).

                I've taken courses in computer science in undergrad and worked on Python based research projects in psychology and in education. I also taught computer science for The Coder School, which has a very open-ended learning curriculum. Teaching computer science is where I learned to debug and have fun with coding. 
                
                In the classroom, the teachers I worked with began to make use of new ed-tech tools that made monitoring reading progress so much easier. This was so different from the long-term research I was used to. These tools inspired me to pursue a different path in software, and led me to enrolling in the full-time software engineering bootcamp at Hackbright Academy.
                
                I am currently interested in full-stack software engineering roles after my graduation from Hackbright!

                
            </Content>
        </div>
    );

}

export default AboutPage;