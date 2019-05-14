import React, { Component } from 'react'
import * as FablesAPI from '../utils/api'

class App extends Component {

  state = {
    fable : {}
  }

  componentDidMount() {
    FablesAPI.getFable('le_loup_et_le_chien')
    .then((fable) => {
      this.setState({fable})
    })
  }

  render () {
    const {fable} = this.state

    return (
      <div>
        <div className="fable">
          {JSON.stringify(fable, null, 3)}
        </div>
      </div>

    )
  }
}



export default App;
