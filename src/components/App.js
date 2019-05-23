import React, { Component, Fragment } from 'react'
import * as FablesAPI from '../utils/api'
import Fable from './Fable'
import Header from './Header'
import Search from './Search'
import '../css/style.css'

class App extends Component {

  state = {
    loading:true,
    searchRequest: '',
    searchResults: [],
    titles: [],
    fable: {},     
  }

  componentDidMount() {
    FablesAPI.getTitles()
    .then((titles) => {
      this.setState({titles, loading:false})
    })
  /*
    FablesAPI.getFable('le_loup_et_le_chien_maigre')
    .then((fable) => {
      this.setState({fable, loading:false})
    })
  */
  }

  requestChangeHandler = (event) => {
    const searchRequest = event.target.value
    this.setState({searchRequest})
  }

  searchTitles = () => { // Todo !!!!
    this.setState({searchResults:[this.state.titles[0], this.state.titles[10]]})
  }

  render () {

    if (!this.state.loading) {
      const {id, title, texte, img} = this.state.fable
      //return <Fable title={title} texte={texte} alt={id} images={img}/>

      return (
        <Fragment>
          <Header/>
          <Search 
            searchRequest={this.state.searchRequest}
            changed = {(event) => this.requestChangeHandler(event)}
            search = {() => this.searchTitles()}
            results = {this.state.searchResults} />
        </Fragment>
      )  

    }
    return <p> Loading... </p>
  }

  
}



export default App;
