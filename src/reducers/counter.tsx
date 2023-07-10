const initCount = 0

const initialState = {
    count: initCount
}

const counter = (state = initialState, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        case 'DOUBLE':
            return {
                ...state,
                count: state.count * 2
            }
        case 'RESET':
            return {
                ...state,
                count: initCount
            }
    }

    return state
}

export default counter