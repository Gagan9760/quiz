import React from 'react'
import { money } from './data'
import { motion } from 'framer-motion'

const sideVariant = {
    initial:{
        opacity:0
    },
    final:{
        opacity:1,
        transition:{
            duration:0.2,
            when:"beforeChildren",
            staggerChildren: 0.15
        }
    }
}
const childVariant = {
    initial:{
        y:50,
        opacity:0
    },
    final:{
        y:0,
        opacity:1
    }
}

const Side = ({selectedQues,setPrize,endQues}) => {
    const am = money.map((m)=>m.amount)
    console.log(am.slice(10));
    const finalAmount = (endQues===0?0:am.slice(-endQues).reduce((acc,crr)=>acc+crr))
    console.log(finalAmount);
    setPrize(finalAmount)

    
    return (
        <>
            <motion.div 
                className="side"
                variants={sideVariant}
                initial='initial'
                animate='final'
                >
                {money.map((m)=>{
                    return(
                    
                        <motion.li 
                        variants={childVariant}
                        key={m.id}   
                        className={`money ${selectedQues===m.id?`active`:``}`}>$ {m.amount}</motion.li>
                        )})}
            </motion.div>
        
        </>
    )
}

export default Side
