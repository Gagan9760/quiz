import React from 'react'
import { money } from './data'


const Side = ({selectedQues}) => {
    return (
        <>
            <div className="side">
                {money.map((m)=>{
                    return(
                    
                        <li key={m.id}   className={`money ${selectedQues===m.id?`active`:``}`}>{m.amount}</li>
                        )})}
            </div>
        
        </>
    )
}

export default Side
