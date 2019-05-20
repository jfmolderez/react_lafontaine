import React from 'react'

const header = () => {

    return (
        <div className="header">
            <div className="header__left">
                <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Jean_de_La_Fontaine.PNG/260px-Jean_de_La_Fontaine.PNG"
                alt={'Jean de La Fontaine'} className="header__left--img"/>
            </div>
            <div className="header__text">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Les Fables</span>
                    <span className="heading-primary--sub">de Jean de La Fontaine</span> 
                </h1>
            </div>
            <div className="header__right">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/001_Frontispice_Fables_choisies_La_Fontaine_Tome_1_Oudry-Cochin_fils.png"
                alt={"Frontispice des fables"} className="header__right--img"/>
            </div>
        </div>
    )
}

export default header;