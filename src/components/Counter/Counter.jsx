import React, {useState} from "react";
import {connect} from "react-redux";
import {increment,setCounter} from "../../reducers/action";
import {PropTypes} from "prop-types";


Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    setCounter: PropTypes.func.isRequired
};

function Counter({counter, increment, setCounter}) {
    const countStorage = parseInt(localStorage.getItem("counter") || 0);
    const [count, setCount] = useState( countStorage);

    React.useEffect(() => {
        console.log(`UseEffect: ${count}`);
        localStorage.setItem("counter", count);
        setCounter(countStorage);
    }, [count]);

    const handleIncrement = (e) => {
        increment(e?.target?.value);
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
    increment: () => dispatch(increment()),
    setCounter: (count) => dispatch(setCounter(count))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
