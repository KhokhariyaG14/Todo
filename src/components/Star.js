import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const colors = {
    yellow : "green",
    gray : "gray"
}



function Star(){
    
    const stars = Array(5).fill(0);
    let [currentValue, setCurrentValue] = useState(0);
    let [mouseValue, setMouseValue] = useState(0);
    let [review, setReview] = useState({});
    let [data,setData] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            let record = JSON.parse(localStorage.getItem('reviews'));
            if(record == null){
                setData([]);
            }
            else{

                setData(record);
            }
        },1000)
    },setData)

    const handleClick = (pos) =>{
        setCurrentValue(pos)
        setReview({...review,['star']:pos});
        setCurrentValue(0)
    }

    const handleMouse = (pos) =>{
        setMouseValue(pos)
    }

    const getInputValue =(e) =>{
        // console.log(e.target.value)
        // console.log(e.target.name);
        let name = e.target.name;
        let value = e.target.value;
        setReview({...review,[name]:value});
    }

    const handleSubmitdata = (e) =>{
        e.preventDefault();
        console.log(review);
        let oldRecord = [...data,review];

        setData(oldRecord);
        // console.log(data);
        localStorage.setItem('reviews',JSON.stringify(oldRecord));
    }

    // const handleMouseLeave = () =>{
    //     setMouseValue(0)
    // }
    return(
        <div style={styles.container}>
            <h2>Star Rating in React JS</h2>
            <form method="post" onSubmit={(e)=>handleSubmitdata(e)} >
                <div style={styles.stars}>
                    {stars.map((v,index)=>{
                        return(
                            <FaStar
                                key={index}
                                color={ (currentValue || mouseValue) >index ? colors.yellow : colors.gray}
                                size={30}
                                onClick={()=>handleClick(index+1)}
                                onMouseOver={()=>handleMouse(index+1)}
                                // onMouseLeave={handleMouseLeave}
                                />
                        )
                    })}

                    <br/>
                    <textarea name="message" onChange={(e)=>getInputValue(e)}></textarea><br/>
                    <input type="submit" name="Review" value="Add Review" />
                </div>
            </form>

            <br/><br/><br/>
            {data.map((v,i)=>{
                return (
                        <div style={{border:"2px solid black", width:"100px"}}>
                            <p>{v.star >4 ?
                                <>
                                <FaStar key={i} color={colors.yellow}  size={10} />
                                <FaStar key={i+1} color={colors.yellow}  size={10} />
                                <FaStar key={i+2} color={colors.yellow}  size={10} />
                                <FaStar key={i+3} color={colors.yellow}  size={10} />
                                <FaStar key={i+4} color={colors.yellow}  size={10} />
                                </>
                                :
                                v.star>3 ?
                                <>
                                <FaStar key={i+1} color={colors.yellow}  size={15} />
                                <FaStar key={i+2} color={colors.yellow}  size={15} />
                                <FaStar key={i+3} color={colors.yellow}  size={15} />
                                <FaStar key={i+4} color={colors.yellow}  size={15} />
                                </> 
                                :
                                v.star >2 ?
                                <>
                                <FaStar key={i+1} color={colors.yellow}  size={15} />
                                <FaStar key={i+2} color={colors.yellow}  size={15} />
                                <FaStar key={i+3} color={colors.yellow}  size={15} />
                                </>
                                :
                                v.star >1 ?
                                <>
                                <FaStar key={i+1} color={colors.yellow}  size={15} />
                                <FaStar key={i+2} color={colors.yellow}  size={15} />
                                </>
                                :
                                <FaStar key={i+1} color={colors.yellow}  size={15} />
                            }
                                </p>
                                <p >{v.message}</p>
                        </div>
                )
            })}
        </div>
    )
}


const styles = {
    container : {
        display: "flex",
        flexDirection : "column",
        alignItems : "center"
    }
}

export default Star;