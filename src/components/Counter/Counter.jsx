import React, {useState} from "react";
import {connect} from "react-redux";
import {increment} from "../../reducers/action";
import {PropTypes} from "prop-types";


Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired
};

function Counter({counter, increment}) {
    console.log(`Counter init: ${counter}`);
    const [count, setCount] = useState(0);

    const handleIncrement = (e) => {
        increment(e?.target?.value);
        console.log(e?.target?.value);
    };

    return (
        <div>
            <div>
                <p>You clicked Normal {count} times</p>
                <p>You clicked Redux {counter} times</p>

                <button onClick={() => setCount(count + 1)}>
                    Click Normal++
                </button>
                <button onClick={() => {
                    // console.log(store.getState().toString());
                    handleIncrement();
                }}>
                    Click redux++
                </button>
            </div>
        </div>
    );


}

function mapStateToProps(state) {
    console.log(`mapStateToProps: ${state.counter}`);
    return {counter: state.counter};
}

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
