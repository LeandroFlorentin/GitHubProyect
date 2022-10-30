export const POR_DEFAULT = 'POR_DEFAULT';
export const DARK_MODE = 'DARK_MODE';

export const porDefault = (obj) => (dispatch) => {
    return dispatch({ type: POR_DEFAULT, payload: obj })
}

export const darkMode = (modo) => (dispatch) => {
    let leer = modo ? 'dark' : 'light'
    return dispatch({ type: DARK_MODE, payload: leer })
}