import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Counter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        getCount();
    }, []);

    const getCount = async () => {
            const { data } = await axios.get('http://localhost:5001/counter');
            setCount(data.count);
        }

    const increament = async () => {
        const { data } = await axios.post('http://localhost:5001/increment');
        setCount(data.count);
    }
    const decrement = async () => {
        const { data } = await axios.post('http://localhost:5001/decrement')
        setCount(data.count);
    };

    return (
        <div>

            <p> Count: {count}</p>

            <button onClick={increament}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            
        </div>
    );

};

export default Counter;