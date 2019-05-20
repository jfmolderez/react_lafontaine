import React from 'react'

const fable = (props) => {
    const {alt, title, texte, images } = props
    const img = images[0]
    return (
        <div className="fable">
            <div className="row fable__header">
                <img src={img} alt={alt} className="fable__header--img"/>
                <h1 className="fable__header--title">{title}</h1>
            </div>
            <div className="row fable__texte">
                <ul>
                    {texte.map(function(line, index){
                        return <li className="fable_line" key={ index }>{line}</li>;
                    })}
                </ul>
            </div>
        </div>
    )
}

export default fable;