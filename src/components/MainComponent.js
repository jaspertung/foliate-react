import React, { Component } from 'react';
import Guide from './GuideComponent'
import { PLANTGUIDES } from '../shared/plant-guides'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plantguides = PLANTGUIDES
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
