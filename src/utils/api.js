import {
    _getTextes,
    _getFables
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