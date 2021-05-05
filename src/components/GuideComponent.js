import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlant: null
        }
    }

    onPlantSelect(plantguide) {
        this.setState({selectedPlant: plantguide})
    }

    renderSelectedPlant(plantguide) {
        if (plantguide) {
            return (
                <Card>
                    <CardBody>
                        <CardTitle>
                            <h2>{plantguide.name}</h2>
                        </CardTitle>
                        <CardText>
                            <p>{plantguide.water}</p>
                        </CardText>
                    </CardBody>
                </Card>
            )
        } 
        return <div/>
    }

    render() {
        const guide = this.props.plantguides.map(plantguide => {
            return (
                <div className="col-lg-3 col-6" key={plantguide.id}>
                    <Card onClick={() => this.onPlantSelect(plantguide)}>
                        <CardImg width="100%" src={plantguide.image} alt={plantguide.name}/>
                        <CardBody>
                            <CardTitle>
                                <h2>{plantguide.name}</h2>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {guide}
                </div>
                <div className="row">
                    {this.renderSelectedPlant(this.state.selectedPlant)}
                </div>
            </div>
        )
    }
}

export default Guide