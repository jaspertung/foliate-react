import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import './App.css';
import Guide from './components/GuideComponent';
import { PLANTGUIDES } from './shared/plant-guides'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plantguides: PLANTGUIDES
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="dark">
          <div className="container">
              <NavbarBrand href="/">Foliate</NavbarBrand>
          </div>
        </Navbar>
        <Guide plantguides={this.state.plantguides}/>
      </div>
    )
  }
}

export default App;
