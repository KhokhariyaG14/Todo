


var Person =  (props) =>
{
    var name = "Jivan";
 
    let age = 25;
    const gender = "male";

    var data = [10,20,30,40,"hi","manish","rohan",true,3.5];


    return(
        <div>
            <h1>Personal Page</h1>
            <h1>Props propeties: {props.sn}</h1>
            <p>Name1: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>{data.map(function(v,i){
                  return(
                       <p>{typeof(v)=='number'?v:""}</p>
                       
                  )
            })}</p>

           
        </div>
    )
}

export default Person;