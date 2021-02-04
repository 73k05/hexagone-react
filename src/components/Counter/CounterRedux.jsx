import React, {useState} from "react";
import {connect} from "react-redux";
import {increment, setCounter} from "../../reducers/action";
import {PropTypes} from "prop-types";


CounterRedux.propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    setCounter: PropTypes.func.isRequired
};

function CounterRedux({counter, increment, setCounter}) {
    const countStorage = parseInt(localStorage.getItem("counter") || 0);
    const [count, setCount] = useState(countStorage);
    console.log(`Init countStorage redux: ${countStorage}`);

    React.useEffect(() => {
        console.log(`UseEffect Redux: ${count}`);
        localStorage.setItem("counter", count.toString());
        setCounter(countStorage);
    }, [count, countStorage]);

    const handleIncrement = () => {
        increment();
        setCount(count + 1);
    };

    return (
        <div>
            <div>
                <p>You clicked Redux {counter} times</p>
                <button onClick={() => {
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

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
