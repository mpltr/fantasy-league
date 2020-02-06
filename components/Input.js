import React, { useState } from 'react';

const Input = (props) => {
    const [value, setValue] = useState('');

    return ( 
        <input onChange={(e) => setValue(e.target.value)} value={value}>
        
        </input>
     );
}
 
export default Input;