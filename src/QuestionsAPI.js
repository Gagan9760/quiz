import React from 'react'
import Main from './Main'
import {decode} from 'html-entities';

const QuestionsAPI = ({ selectedQues, setSelectedQues, setEndQues, prize,quesAPI }) => {
    console.log(quesAPI);
    const html = decode(quesAPI[0].question)
    console.log(html);
    const questions = [{
        id: 1,
        question:  decode(quesAPI[0].question),
        correct: 2,
        answer1: {
            id: 1,
            text: decode(quesAPI[0].incorrect_answers[0]),
            correct: false
        },
        answer2: {
            id: 2,
            text:decode(quesAPI[0].correct_answer),
            correct: true
        },
        answer3: {
            id: 3,
            text:decode(quesAPI[0].incorrect_answers[1]),
            correct: false
        },
        answer4: {
            id: 4,
            text:decode(quesAPI[0].incorrect_answers[2]),
            correct: false
        },
    },
    {
        id: 2,
        question: decode(quesAPI[1].question),
        correct: 4,
        answer1: {
            id: 1,
            text:decode(quesAPI[1].incorrect_answers[0]),
            correct: false
        },
        answer2: {
            id: 2,
            text:decode(quesAPI[1].incorrect_answers[2]),
            correct: true
        },
        answer3: {
            id: 3,
            text:decode(quesAPI[1].incorrect_answers[1]),
            correct: false
        },
        answer4: {
            id: 4,
            text:decode(quesAPI[1].correct_answer),
            correct: false
        },
    },
    {
        id: 3,
        question: decode(quesAPI[2].question),
        correct: 4,
        answer1: {
            id: 1,
            text:decode(quesAPI[2].incorrect_answers[0]),
            correct: false
        },
        answer2: {
            id: 2,
            text:decode(quesAPI[2].incorrect_answers[2]),
            correct: true
        },
        answer3: {
            id: 3,
            text:decode(quesAPI[2].incorrect_answers[1]),
            correct: false
        },
        answer4: {
            id: 4,
            text:decode(quesAPI[2].correct_answer),
            correct: false
        },
    },
    {
        id: 4,
        question: decode(quesAPI[3].question),
        correct: 1,
        answer1: {
            id: 1,
            text:decode(quesAPI[3].correct_answer),
            correct: false
        },
        answer2: {
            id: 2,
            text:decode(quesAPI[3].incorrect_answers[2]),
            correct: true
        },
        answer3: {
            id: 3,
            text:decode(quesAPI[3].incorrect_answers[1]),
            correct: false
        },
        answer4: {
            id: 4,
            text:decode(quesAPI[3].incorrect_answers[0]),
            correct: false
        },
    },
    {
        id: 5,
        question: decode(quesAPI[4].question),
        correct: 2,
        answer1: {
            id: 1,
            text:decode(quesAPI[4].incorrect_answers[2]),
            correct: false
        },
        answer2: {
            id: 2,
            text:decode(quesAPI[4].correct_answer),
            correct: true
        },
        answer3: {
            id: 3,
            text:decode(quesAPI[4].incorrect_answers[1]),
            correct: false
        },
        answer4: {
            id: 4,
            text:decode(quesAPI[4].incorrect_answers[0]),
            correct: false
        },
    },
    {
        id: 6,
        question: decode(quesAPI[5].question),
        correct: 3,
        answer1: {
            id: 1,
            text:decode(quesAPI[5].incorrect_answers[2]),
            correct: false
        },
        answer2: {
            id: 2,
            text:decode(quesAPI[5].incorrect_answers[1]),
            correct: true
        },
        answer3: {
            id: 3,
            text:decode(quesAPI[5].correct_answer),
            correct: false
        },
        answer4: {
            id: 4,
            text:decode(quesAPI[5].incorrect_answers[0]),
            correct: false
        },
    },
    {
        id: 7,
        question:decode(quesAPI[6].question),
        correct: 4,
        answer1: {
            id: 1,
            text:decode(quesAPI[6].incorrect_answers[2]),
            correct: false
        },
        answer2: {
            id: 2,
            text:decode(quesAPI[6].incorrect_answers[1]),
            correct: true
        },
        answer3: {
            id: 3,
            text:decode(quesAPI[6].incorrect_answers[0]),
            correct: false
        },
        answer4: {
            id: 4,
            text:decode(quesAPI[6].correct_answer),
            correct: false
        },
    },
    {
        id: 8,
        question: decode(quesAPI[7].question),
        correct: 1,
        answer1: {
            id: 1,
            text:decode(quesAPI[7].correct_answer),
            correct: false
        },
        answer2: {
            id: 2,
            text:decode(quesAPI[7].incorrect_answers[1]),
            correct: true
        },
        answer3: {
            id: 3,
            text:decode(quesAPI[7].incorrect_answers[0]),
            correct: false
        },
        answer4: {
            id: 4,
            text:decode(quesAPI[7].incorrect_answers[2]),
            correct: false
        },
    },
    {
        id: 9,
        question: decode(quesAPI[8].question),
        correct: 3,
        answer1: {
            id: 1,
            text:decode(quesAPI[8].incorrect_answers[0]),
            correct: false
        },
        answer2: {
            id: 2,
            text:decode(quesAPI[8].incorrect_answers[1]),
            correct: true
        },
        answer3: {
            id: 3,
            text:decode(quesAPI[8].correct_answer),
            correct: false
        },
        answer4: {
            id: 4,
            text:decode(quesAPI[8].incorrect_answers[2]),
            correct: false
        },
    },
    {
        id: 10,
        question: decode(quesAPI[9].question),
        correct: 2,
        answer1: {
            id: 1,
            text:decode(quesAPI[9].incorrect_answers[0]),
            correct: false
        },
        answer2: {
            id: 2,
            text:decode(quesAPI[9].correct_answer),
            correct: true
        },
        answer3: {
            id: 3,
            text:decode(quesAPI[9].incorrect_answers[1]),
            correct: false
        },
        answer4: {
            id: 4,
            text:decode(quesAPI[9].incorrect_answers[2]),
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
