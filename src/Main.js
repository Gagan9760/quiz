import React, { useState, useEffect } from 'react'
import { questions } from './question'
import { AnimatePresence, motion } from 'framer-motion'

const parentVariant = {
    initial: {
        opacity: 1
    },
    final: {
        opacity: 1,
        transition: {
            staggerChildren: 1
        }
    }
}
const quesVar = {
    initial: {
        opacity: 0
    },
    final: {
        opacity: 1
    }
}
const answerVariant = {
    initial: {
        opacity: 0
    },
    final: {
        opacity: 1

    },
    hover: {
        scale: 1.1,
        boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.69)"
    },
    tap: {
        scale: 0.9
    }
}
const Main = ({ selectedQues, setSelectedQues, setEndQues, prize }) => {
    const [correctAns, setCorrectAns] = useState(0)
    const [color, setColor] = useState(false)
    const [exit, setExit] = useState(3)
    const [timer, setTimer] = useState(false)
    const [end, setEnd] = useState(false)
    const [clock, setClock] = useState()
    const [clockState, setClockState] = useState()
    const [hurry,setHurry] = useState()

    var time = null
    var clockTime = null
    const refresh = () => {
        window.location.reload(false)
    }
    const findAnswer = (correct, answer) => {
        clearInterval(clockState)
        if (answer === correct) {
            setCorrectAns(correct)
            setEndQues(selectedQues)
            setColor(true)
        } else {
            setColor(true)
            setEnd(true)
            setCorrectAns(correct)

            return

        }
        if (selectedQues === questions.length) {
            setEnd(true)
            setEndQues(selectedQues)
        } else {
            setTimer(true)

            time = setInterval(() => {
                setExit((prev) => prev - 1)
            }, 1000);

            setTimeout(() => {
                setSelectedQues((prev) => prev + 1)
                setCorrectAns(null)
                setColor(null)
                clearInterval(time)
            }, 3000)

        }
    }
    useEffect(() => {
        setClock(30)
        setExit(3)
        setTimer(false)
        clockTime = setInterval(() => {
            setClock(prev => prev - 1)
        }, 1000);
        setClockState(clockTime)
        setHurry(false)
        return () => clearInterval(clockTime)
    }, [selectedQues])

    useEffect(() => {
        if(clock===5){
            setHurry(true)
        }
        if (clock === 0) {
            clearInterval(clockState)
            setEnd(true)
            setHurry(false)
        }
    })
    return (
        <motion.div variants={parentVariant} initial="initial" animate="final" className="main">
            {questions.map((q) => {
                return (
                    <>
                        {selectedQues === q.id ?
                            <>
                                <motion.div variants={quesVar} div className="que">
                                    {q.question}
                                </motion.div>
                                <div className={`clock ${hurry?`hurry`:``}`}>
                                    {clock}
                                </div>
                                <motion.div variants={answerVariant} className="ans">
                                    <motion.li variants={answerVariant} whileHover="hover" whileTap="tap"
                                        key={q.answer1.id}
                                        className=
                                        {`option ${color ? (correctAns === q.answer1.id ? `correct` : `wrong`) : ``}`}
                                        onClick={() => {
                                            findAnswer(q.correct, q.answer1.id)

                                        }}
                                    >
                                        A. {q.answer1.text}
                                    </motion.li>
                                    <motion.li variants={answerVariant} whileHover="hover" whileTap="tap"
                                        key={q.answer2.id}
                                        className={`option ${color ? correctAns === q.answer2.id ? `correct` : `wrong` : ``}`}
                                        onClick={() => {

                                            // setSelectedAns(2)
                                            findAnswer(q.correct, q.answer2.id)

                                        }}
                                    >
                                        B. {q.answer2.text}
                                    </motion.li>
                                    <motion.li variants={answerVariant} whileHover="hover" whileTap="tap"
                                        key={q.answer3.id}
                                        className={`option ${color ? correctAns === q.answer3.id ? `correct` : `wrong` : ``}`}
                                        onClick={() => {
                                            findAnswer(q.correct, q.answer3.id)

                                        }}
                                    >
                                        C. {q.answer3.text}
                                    </motion.li>
                                    <motion.li variants={answerVariant} whileHover="hover" whileTap="tap"
                                        key={q.answer4.id}
                                        className={`option ${color ? correctAns === q.answer4.id ? `correct` : `wrong` : ``}`}
                                        onClick={() => {
                                            findAnswer(q.correct, q.answer4.id)

                                        }}
                                    >
                                        D. {q.answer4.text}
                                    </motion.li>
                                </motion.div>
                            </> : null
                        }
                    </>
                )
            })}

            <AnimatePresence>
                {timer && <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "tween" }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="modal">
                    <h1>{`Next question in: ${exit} seconds`}</h1>
                </motion.div>}
                {end && <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "tween" }}
                    className="modal">
                    <h1>{`You won $ ${prize} `}</h1>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={refresh}
                    >Try Again
                    </motion.button>
                </motion.div>}
            </AnimatePresence>
        </motion.div >
    )
}

export default Main
