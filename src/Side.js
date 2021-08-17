import React from 'react'
import { money } from './data'


const Side = ({selectedQues,setPrize,endQues}) => {
    const am = money.map((m)=>m.amount)
    
    const finalAmount = am.slice(-endQues).reduce((acc,crr)=>acc+crr)
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
