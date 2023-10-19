import { useEffect, useState } from "react";

function Counter() {

    let [count, setCount] = useState(0);


    let incrementData = () =>{
            setCount(--count);
            localStorage.setItem('count',count)
    }

    useEffect(()=>{
         setTimeout(function(){
            let data = localStorage.getItem('count');
            setCount(data);
         },1000)
    })

    return(
        <div>
            <h1>Counter</h1>
            <button onClick={()=>incrementData()}>Decrement</button>
            <p>{count}</p>
            <button onClick={()=>setCount(++count)}>Increment</button>
        </div>
    )
}


export default Counter;