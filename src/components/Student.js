import React,{Component} from 'react';

class Student extends Component
{
    constructor(){
        super();
        console.log("Constructor working...");
        this.state = {
            name : "vijay",
            phone : 9999999,
        }
    }

    getChangeName = ()=>{
        // console.log("Set");
        this.setState({
            name : "Ajay"
        })
    }

    getChangePhone = (e) =>{
        this.setState({
            phone : 99988888777
        })
    }

    componentWillUnmount = () =>{
        console.log("Component Will Unmount...");
    }

    componentDidMount = () =>{
        console.log("Component Did Mount....");
    }

    componentDidUpdate = ()=>{
        console.log("Component did Update....")
    }


    render(){
        return(
            <div>
                <h1>Student Component</h1>
                <h2>Name : {this.state.name}</h2>
                <button onClick={()=>this.getChangeName()}>Change name</button>

                <h2>Phone : {this.state.phone}</h2>
                <button onClick={()=>this.getChangePhone()}>Change Phone</button>
            </div>
        )
    }
}

export default Student;