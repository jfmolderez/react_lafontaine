import React from 'react'

const fable = (props) => {
    return (
        <div className="fable">
            <h1>{props.title}</h1>
            <ul>
                {props.texte.map(function(line, index){
                    return <li key={ index }>{line}</li>;
                })}
            </ul>
        </div>
    )
}

export default fable;