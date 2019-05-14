import {
    _getTextes,
    _getFables,
    _getTexte,
    _getFable,
} from './_DATA.js'

export const getInitialData = () => {
    return Promise.all([
        _getTextes(),
        _getFables()
    ]).then(([textes, fables]) => ({
        textes,
        fables,
    }))
}

export const getFable = (fableId) => {
    return Promise.all([
        _getTexte(fableId),
        _getFable(fableId)
    ]).then(([texte, fable]) => (
        {...fable, texte: texte.split("\n")}
    ))
}

