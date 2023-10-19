import Person from './Person';

function Course(props){
    var course = new Array("Front-end","Back-end","C");

    return(
        <>
            <h1>Person Course Details</h1>
            <h1>{props.person.name}</h1>
            <h1>{props.person.age}</h1>
            {course.map((v,i)=>{
                return(
                    <p>Course: {v}</p>
                )
            })}
            <Person sn={props.person.surname} />
        </>
    )
}

export default Course;


// Hospital class

// set 
//   address:
//   Hospital:
//   year:
//   doctor:
//   speciality:



//   Doctor:
// set 
//    name: array

