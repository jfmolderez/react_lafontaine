import React, { Component } from 'react'
import * as FablesAPI from '../utils/api'

class App extends Component {

  state = {
    textes : {},
    fables : {}
  }

  componentDidMount() {
    FablesAPI.getInitialData()
    .then(({textes, fables}) => {
      this.setState({textes, fables})
    })
  }

  render () {
    const {fables, textes} = this.state
    return (
      <div>
        <div className="fables">
          {JSON.stringify(fables, null, 3)}
        </div>
        <div className="textes">
          {JSON.stringify(textes, null, 3)}
        </div>
      </div>

    )
  }
}



export default App;
