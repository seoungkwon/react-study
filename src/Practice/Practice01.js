import { useState } from "react";
import'./Practice01.css';

function Practice01(){

    const [evenNum, setEvenNum] = useState(0);
    //const [a, b] = useState(0);
    
    return (
        <div>
        <button onClick={()=>{
            //숫자값 2 4 6 +2
            setEvenNum(evenNum+2);
        }}>짝수출력</button> 
        {/* <span style={ {color:'red'} }>{evenNum}</span> */}
        <span className="even-red">{evenNum}</span>
        </div>
    );
}

export default Practice01; 