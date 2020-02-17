const initialState = {
    counter: 0,
    results: [],
    param: 'test'
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;

        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBSTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), val: state.counter })
            }
        case 'DELETE_RESULT':
            const updatedArray = state.results.filter(result => result.id !== action.resultEl)
            return {
                ...state,
                results: updatedArray
            }

    }

    return state;
}

export default reducer;