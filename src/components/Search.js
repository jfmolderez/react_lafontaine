import React from 'react'

const search = (props) => {

    return (
        
            <div>
                <div className="row searchInput">
                    <input 
                        type="text" 
                        onChange={props.changed} 
                        value={props.searchRequest}/>
                    <button onClick={props.search}>Recherche</button>
                </div>
                <div className="row searchResults">
                    {Object.values(props.results).map((result)=> {
                        return <p key={result} className="searchResult">{result}</p>
                    })}
                </div>

            </div>
        
    )
}

export default search;