import React, { useState, useEffect } from 'react'
import { questions } from './question'

const Main = ({ selectedQues, setSelectedQues,setEndQues,prize }) => {
    const [correctAns, setCorrectAns] = useState(0)
    const [color, setColor] = useState(false)
    const [exit, setExit] = useState(3)
    const [timer, setTimer] = useState(false)
    const [end, setEnd] = useState(false)
    
    var time = null
    const findAnswer = (correct, answer) => {
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
        setExit(3)
        setTimer(false)
    }, [selectedQues])
    return (
        <div className="main">
            {questions.map((q) => {
                return (
                    <>
                        {selectedQues === q.id ?
                            <>

                                <div className="que">
                                    {q.question}
                                </div>
                                <div className="ans">
                                    <li key={q.answer1.id} className=
                                        {`option ${color ? (correctAns === q.answer1.id ? `correct` : `wrong`) : ``}`}
                                        onClick={() => {
                                            findAnswer(q.correct, q.answer1.id)

                                        }}
                                    >
                                        {q.answer1.text}
                                    </li>
                                    <li key={q.answer2.id} className={`option ${color ? correctAns === q.answer2.id ? `correct` : `wrong` : ``}`}
                                        onClick={() => {

                                            // setSelectedAns(2)
                                            findAnswer(q.correct, q.answer2.id)

                                        }}
                                    >
                                        {q.answer2.text}
                                    </li>
                                    <li key={q.answer3.id} className={`option ${color ? correctAns === q.answer3.id ? `correct` : `wrong` : ``}`}
                                        onClick={() => {
                                            findAnswer(q.correct, q.answer3.id)

                                        }}
                                    >
                                        {q.answer3.text}
                                    </li>
                                    <li key={q.answer4.id} className={`option ${color ? correctAns === q.answer4.id ? `correct` : `wrong` : ``}`}
                                        onClick={() => {
                                            findAnswer(q.correct, q.answer4.id)

                                        }}
                                    >
                                        {q.answer4.text}
                                    </li>
                                </div>
                            </> : null

                        }

                    </>
                )
            })}
            
            {timer && <div className="modal"> <h1>{`Next question in: ${exit} seconds`}</h1></div>}
            {end && <div className="modal"> <h1>{`You won $ ${prize} `}</h1></div>}
            
        </div >
    )
}

export default Main
