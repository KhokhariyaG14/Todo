import { useEffect, useState } from "react";

import  "../phone.css";


function Phone(){

    let [record,setRecord] = useState([]);
    let [student,setStudent] = useState({});
    let [active,setActive] = useState(false);
    let [position,setPosition] = useState(-1);
 

    useEffect(function(){
        let localData = JSON.parse(localStorage.getItem('record'));
        if(localData == null){
            setRecord([]);
        }
        else{

            setRecord(localData);
        }
    },setRecord)

    let handleSubmitData = (e) =>{
        e.preventDefault();
        var obj = {
            bname : e.target.bname.value,
            price : e.target.price.value,
            id : Math.round(Math.random()*1000)
        }

        if(active){
            record[position] = obj;
            setRecord(record);
            localStorage.setItem('record',JSON.stringify(record));
            setActive(false);
        }
        else{

            let newRecord = [...record,obj]
            setRecord(newRecord);
            localStorage.setItem('record',JSON.stringify(newRecord));
        }
        setStudent({});

        
        
    }


    let deleteRecord = (pr) =>{
      
        let pos = record.findIndex(v=>v.id==pr);
        if(pos!=-1){
            record.splice(pos,1);
        }
        setRecord(record);
        localStorage.setItem('record',JSON.stringify(record));
        let newData = JSON.parse(localStorage.getItem('record'));
        setRecord(newData);
        
    }

    let updateRecord = (price) =>{
       
        let pos = record.findIndex(v=>v.id==price);
    
        setStudent(record[pos]);
        setActive(true);
        setPosition(pos);
    }

    let getInputValue = (e) =>{
        console.log(e.target.name);
        console.log(e.target.value);
        let name = e.target.name;
        let value = e.target.value;
        setStudent({...student,[name]:value})

    }

    const mystyle = {
        backgroundColor:"red",
        textAlign : "center"
    }

    const tableCenter = {
        margin : "0 auto"
    }
    


    return(
        <>
            <h1 style={{textAlign:"center", color: "red"}}>Phone Details</h1>
            <form method="post" onSubmit={(e)=>handleSubmitData(e)}>
                <table border={1} style={{margin:"0 auto"}}>
            
                    <tr>
                        <td>Enter Brand name</td>
                        <td><input type="text" name="bname" value={student.bname?student.bname:""} onChange={(e)=>getInputValue(e)}/></td>
                    </tr>

                    <tr>
                        <td>Enter Price</td>
                        <td><input type="text" name="price" value={student.price?student.price:""} onChange={(e)=>getInputValue(e)}/></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>
                            {active?
                            
                            <input type="submit" name="submit" value="Edit Product"/>
                            :
                            
                              <input type="submit" name="submit" value="Add Product"/>
                            }
                            
                            </td>
                    </tr>
                </table>
            </form>
             <h1 style={mystyle}> Phone All Records</h1>
             <table border={1} style={tableCenter}>
                <tr>
                    {/* <td>No</td> */}
                    <td>name</td>
                    <td>Price</td>
                    <td>Action</td>
                </tr>
            {record.map((v,i)=>{
                return(
                    <tr>
                        {/* <td>{v.id}</td> */}
                        <td>{v.bname}</td>
                        <td>{v.price}</td>
                        <td>
                            <button onClick={(p)=>deleteRecord(v.id)}>delete</button>
                            ||
                            <button onClick={(p)=>updateRecord(v.id)}>Update</button>
                            
                        </td>
                    </tr>
                )
            })}
               
             </table>
        </>
    )
}

export default Phone;