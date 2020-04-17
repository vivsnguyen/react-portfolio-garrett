import React from 'react';

import Card from '../components/Card';

import devgrub from '../assets/images/devgrub.png';
import playlistify from '../assets/images/Playlistify.png';
import github from '../assets/images/GitHub.png';
// image dimensions 1000 px by 1600 px tall

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Playlistify',
                    subTitle: 'Create a Spotify playlist of setlist songs.',
                    imgSrc: playlistify,
                    link: 'https://github.com/vivsnguyen/playlistify',
                    selected: false
                },
                {
                    id: 1,
                    title: "Vivi's GitHub",
                    subTitle: 'More projects here',
                    imgSrc: github,
                    link: 'https://github.com/vivsnguyen/',
                    selected: false   
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: devgrub,
                    link: 'https://github.com',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;