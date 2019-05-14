import React, { Component } from 'react'
import * as FablesAPI from '../utils/api'
import Fable from './Fable'

class App extends Component {

  state = {
    fable : {},
    loading: true,
  }

  componentDidMount() {
    FablesAPI.getFable('le_loup_et_le_chien')
    .then((fable) => {
      this.setState({fable, loading:false})
    })
  }

  render () {
    const {id, title, texte} = this.state.fable

    const jsx = this.state.loading 
      ?<p>Loading...</p>
      :<Fable title={title} texte={texte}/>

    return jsx

  }
}



export default App;
