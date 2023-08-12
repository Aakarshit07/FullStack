import Name from "./Name";
import Age from "./Age";

function Person(props) {
    return (
        <>
{/* My approach was this not good one tho */}
        {/* <Name>
            <p style={
                {
                    color:'red'
                }
            }> 
                    {props.name} 
             </p>
        </Name>
        <Age>
            <p> {props.age} </p>
        </Age> */}
  
  {/* Better Approach */}
        <p style={{ color:'red' } }> 
            {props.name} is  {props.age} years old.
        </p>
  

        </>
    )
}

export default Person;