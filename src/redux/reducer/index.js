import { POR_DEFAULT, DARK_MODE } from '../actions'

const initialState = {
    default: {},
    darkMode: 'light'
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case POR_DEFAULT:
            return {
                ...state,
                default: action.payload
            }
        case DARK_MODE:
            return {
                ...state,
                darkMode: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;