import React, {useState} from 'react';

const Counter = (props) => {
    const [value, setValue] = useState(1);
    const changeValue = (modifier) => {
        const newValue = value + modifier
        if (newValue < 1) return;
        setValue(newValue)
        props.callback(newValue)
    }
    return ( 
        <>
            <button onClick={() => changeValue(-1)}>-</button>
                <div>{value}</div>
            <button onClick={() => changeValue(1)}>+</button>
        </>
     );
}
 
export default Counter;