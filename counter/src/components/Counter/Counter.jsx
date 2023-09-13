import { useState } from "react";
import "./Counter.css"
function Counter() {
    const [count, setCount] = useState(0);
return (

    <>
        <div className="count-app-wrapper">

        <div className="count">
            {count}    
        </div>

        <div className="btn">
            <button onClick={ () => setCount(count + 1)}>Increament</button>
            <button onClick={ () => setCount(count - 1)}>Decreament</button>
        </div>
        
        </div>
    </>
)


}

export default Counter;