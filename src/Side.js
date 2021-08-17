import React from 'react'
import { money } from './data'


const Side = ({selectedQues,setPrize,endQues}) => {
    const am = money.map((m)=>m.amount)
    console.log(am.slice(10));
    const finalAmount = (endQues===0?0:am.slice(-endQues).reduce((acc,crr)=>acc+crr))
    console.log(finalAmount);
    setPrize(finalAmount)

    
    return (
        <>
            <div className="side">
                {money.map((m)=>{
                    return(
                    
                        <li key={m.id}   className={`money ${selectedQues===m.id?`active`:``}`}>$ {m.amount}</li>
                        )})}
            </div>
        
        </>
    )
}

export default Side
