import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

class Guide extends Component {

    renderPlants(plantguide) {
        const guide = this.props.plantguides.map(plantguide => {
            return (
                <div className="col-lg-3 col-6" key={plantguide.id}>
                    <Card onClick={() => this.props.onClick(plantguide.id)}>
                        <CardImg className="img-fluid" src={plantguide.image} alt={plantguide.name}/>
                        <CardBody>
                            <CardTitle>
                                <h2>{plantguide.name}</h2>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </div>
            )
        })
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
        return (
            <div>
                <h2 className="text-center my-5">A-Z Care Guide</h2>
                <div className="container">
                    <div className="row">
                        {guide}
                    </div>
                    {/* <div className="row">
                        {this.renderSelectedPlant(this.state.selectedPlant)}
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Guide