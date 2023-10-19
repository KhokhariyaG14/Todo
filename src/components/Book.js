
import React,{Component} from 'react';

class Book extends Component
{

    constructor(props){
        super();
        this.state = {cityData: props.city}
    
    }

    render(){
        var a = 10;
        var data = [10,20,30,40];
        var data1 = [5,6,7,8,98]
        // data.push(90);
        // var record = data.concat(data1);
        var record = [...data,1000,2000,...data1];
        console.log(record);

        var [one] = record.slice(4);
        console.log(one);

        var object1 = {
            name : "ajay",
            age : 33
        }

        var object2 = {
            gender : "male",
            email : "a@gmail.com",
            name1 : "vijay"
        }
        var dd = {'phone':44444}

        var ob = {...object2, ...object1,...dd};
        console.log(ob);


        var {name1,phone,email} = ob;
        console.log(name1);
        console.log(phone);
        console.log(email);


        // var day = []
        // var month = 
        // merge

        // descrtu = position

        // object = person
        // object  = college

        // merge

        // desc = 

    
        return(
            <>
                <h1>Book Class component : {a}</h1>
                <p>Name : {this.state.name}</p>
                <p>Age : {this.state.age}</p>
                
                {record.map((v,i)=>{
                    if(v>50){
                        <p>{v*10}</p>
                    }
                })}
            </>
        )
    }
}

export default Book;