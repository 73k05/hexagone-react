import React, {useState} from "react";


function Counter() {
    const countStorage = parseInt(localStorage.getItem("counter") || 0);
    const [count, setCount] = useState(countStorage);
    console.log(`Init countStorage normal: ${countStorage}`);

    React.useEffect(() => {
        console.log(`UseEffect Normal: ${count}`);
        localStorage.setItem("counter", count.toString());
    }, [count]);

    return (
        <div>
            <div>
                <p>You clicked Normal {count} times</p>

                <button onClick={() => setCount(count + 1)}>
                    Click Normal++
                </button>
            </div>
        </div>
    );


}

export default Counter;
