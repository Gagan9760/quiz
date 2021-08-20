import React from 'react'
import Main from './Main'

const QuestionsAPI = ({ selectedQues, setSelectedQues, setEndQues, prize,quesAPI }) => {
    console.log(quesAPI);
    const questions = [{
        id: 1,
        question: quesAPI[0].question,
        correct: 2,
        answer1: {
            id: 1,
            text:quesAPI[0].incorrect_answers[0],
            correct: false
        },
        answer2: {
            id: 2,
            text:quesAPI[0].correct_answer,
            correct: true
        },
        answer3: {
            id: 3,
            text:quesAPI[0].incorrect_answers[1],
            correct: false
        },
        answer4: {
            id: 4,
            text:quesAPI[0].incorrect_answers[2],
            correct: false
        },
    },
    {
        id: 2,
        question: quesAPI[1].question,
        correct: 4,
        answer1: {
            id: 1,
            text:quesAPI[1].incorrect_answers[0],
            correct: false
        },
        answer2: {
            id: 2,
            text:quesAPI[1].incorrect_answers[2],
            correct: true
        },
        answer3: {
            id: 3,
            text:quesAPI[1].incorrect_answers[1],
            correct: false
        },
        answer4: {
            id: 4,
            text:quesAPI[1].correct_answer,
            correct: false
        },
    },
    {
        id: 3,
        question: quesAPI[2].question,
        correct: 4,
        answer1: {
            id: 1,
            text:quesAPI[2].incorrect_answers[0],
            correct: false
        },
        answer2: {
            id: 2,
            text:quesAPI[2].incorrect_answers[2],
            correct: true
        },
        answer3: {
            id: 3,
            text:quesAPI[2].incorrect_answers[1],
            correct: false
        },
        answer4: {
            id: 4,
            text:quesAPI[2].correct_answer,
            correct: false
        },
    },
    {
        id: 4,
        question: quesAPI[3].question,
        correct: 1,
        answer1: {
            id: 1,
            text:quesAPI[3].correct_answer,
            correct: false
        },
        answer2: {
            id: 2,
            text:quesAPI[3].incorrect_answers[2],
            correct: true
        },
        answer3: {
            id: 3,
            text:quesAPI[3].incorrect_answers[1],
            correct: false
        },
        answer4: {
            id: 4,
            text:quesAPI[3].incorrect_answers[0],
            correct: false
        },
    },
    {
        id: 5,
        question: quesAPI[4].question,
        correct: 2,
        answer1: {
            id: 1,
            text:quesAPI[4].incorrect_answers[2],
            correct: false
        },
        answer2: {
            id: 2,
            text:quesAPI[4].correct_answer,
            correct: true
        },
        answer3: {
            id: 3,
            text:quesAPI[4].incorrect_answers[1],
            correct: false
        },
        answer4: {
            id: 4,
            text:quesAPI[4].incorrect_answers[0],
            correct: false
        },
    },
    {
        id: 6,
        question: quesAPI[5].question,
        correct: 3,
        answer1: {
            id: 1,
            text:quesAPI[5].incorrect_answers[2],
            correct: false
        },
        answer2: {
            id: 2,
            text:quesAPI[5].incorrect_answers[1],
            correct: true
        },
        answer3: {
            id: 3,
            text:quesAPI[5].correct_answer,
            correct: false
        },
        answer4: {
            id: 4,
            text:quesAPI[5].incorrect_answers[0],
            correct: false
        },
    },
    {
        id: 7,
        question: quesAPI[6].question,
        correct: 4,
        answer1: {
            id: 1,
            text:quesAPI[6].incorrect_answers[2],
            correct: false
        },
        answer2: {
            id: 2,
            text:quesAPI[6].incorrect_answers[1],
            correct: true
        },
        answer3: {
            id: 3,
            text:quesAPI[6].incorrect_answers[0],
            correct: false
        },
        answer4: {
            id: 4,
            text:quesAPI[6].correct_answer,
            correct: false
        },
    },
    {
        id: 8,
        question: quesAPI[7].question,
        correct: 1,
        answer1: {
            id: 1,
            text:quesAPI[7].correct_answer,
            correct: false
        },
        answer2: {
            id: 2,
            text:quesAPI[7].incorrect_answers[1],
            correct: true
        },
        answer3: {
            id: 3,
            text:quesAPI[7].incorrect_answers[0],
            correct: false
        },
        answer4: {
            id: 4,
            text:quesAPI[7].incorrect_answers[2],
            correct: false
        },
    },
    {
        id: 9,
        question: quesAPI[8].question,
        correct: 3,
        answer1: {
            id: 1,
            text:quesAPI[8].incorrect_answers[0],
            correct: false
        },
        answer2: {
            id: 2,
            text:quesAPI[8].incorrect_answers[1],
            correct: true
        },
        answer3: {
            id: 3,
            text:quesAPI[8].correct_answer,
            correct: false
        },
        answer4: {
            id: 4,
            text:quesAPI[8].incorrect_answers[2],
            correct: false
        },
    },
    {
        id: 10,
        question: quesAPI[9].question,
        correct: 2,
        answer1: {
            id: 1,
            text:quesAPI[9].incorrect_answers[0],
            correct: false
        },
        answer2: {
            id: 2,
            text:quesAPI[9].correct_answer,
            correct: true
        },
        answer3: {
            id: 3,
            text:quesAPI[9].incorrect_answers[1],
            correct: false
        },
        answer4: {
            id: 4,
            text:quesAPI[9].incorrect_answers[2],
            correct: false
        },
    }]
    return (

        <>
            <Main
                        selectedQues={selectedQues}
                        setSelectedQues={setSelectedQues}
                        setEndQues={setEndQues}
                        prize={prize}
                        questions={questions}
                    />
        </>
    )
}

export default QuestionsAPI
