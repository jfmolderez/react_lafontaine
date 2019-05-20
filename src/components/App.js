import React, { Component } from 'react'
import * as FablesAPI from '../utils/api'
import Fable from './Fable'
import '../css/style.css'

class App extends Component {

  state = { fable: {}, loading:true }

  componentDidMount() {
    FablesAPI.getFable('le_loup_et_le_chien_maigre')
    .then((fable) => {
      this.setState({fable, loading:false})
    })
  }

  render () {

    if (!this.state.loading) {
      const {id, title, texte, img} = this.state.fable
      return <Fable title={title} texte={texte} alt={id} images={img}/>
    }
    return <p> Loading... </p>
  }

  
}



export default App;
