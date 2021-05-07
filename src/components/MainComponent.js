import React, { Component } from 'react';
import { NavbarBrand, Navbar } from 'reactstrap';
import { PLANTGUIDES } from '../shared/plant-guides'
import Guide from './GuideComponent';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            plantguides: PLANTGUIDES,
            selectedPlant: null
        }
    }

    onPlantSelect(plantguideId) {
        this.setState({selectedPlant: plantguideId})
    }

    render() {
        return (
            <div>
                <Navbar dark color="dark">
                    <div className="container">
                        <NavbarBrand href="/">Foliate</NavbarBrand>
                    </div>
                </Navbar>
                <Guide plantguides={this.state.plantguides} onClick={plantguideId => this.onPlantSelect(plantguideId)}/>
            </div>
        )
    }
}

export default Main
