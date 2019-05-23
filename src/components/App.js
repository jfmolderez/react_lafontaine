import React, { Component, Fragment } from 'react'
import * as FablesAPI from '../utils/api'
import Fable from './Fable'
import Header from './Header'
import Search from './Search'
import '../css/style.css'

Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter( key => predicate(obj[key]) )
    .reduce( (res, key) => Object.assign(res, { [key] : obj[key] }), {} ) 

class App extends Component {

  state = {
    loading:true,
    searchRequest: '',
    searchResults: [],
    titles: {},
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
    const request = this.state.searchRequest.toLowerCase()
    console.log("Request : ", request)
    console.log(this.state.titles)
    const searchResults = Object.filter(this.state.titles, title => title.toLowerCase().includes(request))
    this.setState({searchResults})
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
