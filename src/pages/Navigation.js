import React, { Component } from 'react';
import {
    CardDeck, Col, Container,Row
} from 'react-bootstrap';
import { Link } from 'react-router-dom'

import NavigationBar from '../components/NavigationBar'
import ElementsBar from '../components/ElementsBar/ElementsBar'
import OptionCard from '../components/OptionCard'
import SubsectionCard from '../components/SubsectionCard'

class Navigation extends Component{

    constructor(props) {
        super(props);
        this.sampleText = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
        this.sampleImg = 'https://png.pngtree.com/svg/20161215/json_22047.png';

        this.toggle = this.toggle.bind(this);

        this.state = {
            isLoading: true,
            isOpen: false,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="nav-page">
                <NavigationBar title='Bomber'/>
                <Container className="navpage-container">
                    <ElementsBar/>
                    <Row className="justify-content-md-center sections">
                        <CardDeck className="section-holder">
                            <OptionCard title='Title' text={this.sampleText} img={this.sampleImg}/>
                            <OptionCard title='Title' text={this.sampleText} img={this.sampleImg}/>
                            <OptionCard title='Title' text={this.sampleText} img={this.sampleImg}/>
                        </CardDeck>
                    </Row>
                    <Row className="justify-content-md-center subsections">
                        <SubsectionCard title='Title' text={this.sampleText}/>
                        <SubsectionCard title='Title' text={this.sampleText}/>
                        <SubsectionCard title='Title' text={this.sampleText}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Navigation;