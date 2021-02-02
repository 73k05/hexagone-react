const counter = (state = {counter: 0}, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {counter: state.counter + 1};
        case "SET_COUNTER":
            console.log(`Counter Set: ${action.counter}`);
            return {counter: action.counter};
        default:
            return state;
    }
};
export default counter;
