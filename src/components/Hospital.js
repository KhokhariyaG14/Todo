import {useState} from 'react';

function Hospital() {
    let [a,setA] = useState(100);
    var [data,setData] = useState([90,"manish",true,90.55,100]);
    let [record, setRecord] = useState({ name : "manish",age : 19})
    let changeValue = () =>{
        setA(10)
    }

    let addNewvalue = () =>{
        setData([...data,500])

        //   data.push(500);
        //   setData([data])
    }

    let changeName = () =>{
        setRecord({...record,name : "vijay", age:20});
    }

    return(
        <div>
            <h1>Hospital Project</h1>
            <p>{a}</p>
            <button onClick={()=>changeValue()}>Change Value</button>

            <h1>Array Data</h1>
            {data.map((v,i)=>{
                return(
                    <p>{v}</p>
                )
            })}

            <button onClick={()=>addNewvalue()}>Add Value</button>

            <h1>Object data</h1>
            {record.name} 

            <button onClick={()=>changeName()}>Change Object Name</button>
             {record.age}
        </div>
    )
}


export default Hospital;