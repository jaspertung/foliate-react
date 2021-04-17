import React, { Component } from 'react'

class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plantguides: [
                {
                    id: 0,
                    name: `Alocaia`,
                    image: `/img/alocasia.jpg`,
                    light: `Alocasias thrive in bright indirect light. Never allow your plant to stand in the direct sunlight--the leaves will burn. It can survive in medium light but avoid a dark corner`,
                    water: `Maintain a regular watering schedule and keep the soil of your plant moist, but not wet or saturated. This is not a drought-tolerant plant, but it is relatively forgiving if you forget to water it from time to time. Extended periods of dryness can result in brown leaf tips or edges. Root rot will occur if the soil is allowed to become soggy.`,
                    humidity: `Alocasias love extra humidity. Mist your plant on a regular basis, place a humidifier nearby, or use a pebble tray to increase humidity. Your bathroom or kitchen are perfect spots for your Alocasia because these areas tend to be more humid.`,
                    food: `For best results, use a general houseplant fertilizer every four weeks during the spring and summer. No fertilizer is necessary during the winter months when plant growth naturally slows. Only apply fertilizer to damp soil–never dry, as it can burn the roots.`,
                    toxicity: `Alocasias are mildly toxic to pets and humans. Typically, ingestion will cause mouth and stomach irritation and possible vomiting.`
                },
                {
                    id: 1,
                    name: `Fiddle Leaf Fig`,
                    image: `/img/fiddle.jpg`,
                    light: `Your Fiddle Leaf Fig will grow best with consistent, bright, filtered light. Turn the plant every few months once it begins to lean towards the light. It will prefer an east-facing, sunny window as afternoon sun from a south or west facing window will be too strong and will burn the leaves.`,
                    water: `Water when the top 50%-75% of the soil becomes dry, then thoroughly drench until the water drains into the saucer. Empty the saucer if the water level is high so as not to drown the roots. If your plant does not get enough water, the leaves will become limp and floppy, eventually turning brown or yellow before falling off.`,
                    humidity: `As a native to the tropics, Fiddle Leaf Figs thrive in warm, wet conditions. Mist the leaves to increase humidity around your plant, especially in the drier winter months.`,
                    food: `For best results, feed your plant once during the spring and monthly throughout the summer. Over-fertilization can cause the Fiddle Leaf Fig to grow leggy and can even kill it. A little bit of food will go a long way to encourage growth and root health. No fertilizer is necessary during the winter when plant growth naturally slows.`,
                    toxicity: `Fiddle Leaf Fig leaves are mildly toxic to humans and pets. Typically, ingestion will cause mouth and stomach irritation and possible vomiting.` 
                }
            ]
        }
    }

    render() {
        const guide = this.state.plantguides.map(plantguide => {
            return (
                <div className="col" key={plantguide.id}>
                    <img src={plantguide.image} alt={plantguide.name}/>
                    <h2>{plantguide.name}</h2>
                    <p>{plantguide.water}</p>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {guide}
                </div>
            </div>
        )
    }
}

export default Guide