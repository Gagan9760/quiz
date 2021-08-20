import React, { useState, useEffect } from 'react'
import './App.css'
import RiseLoader from 'react-spinners/RiseLoader'
// import Main from './Main'
import Side from './Side'
import QuestionsAPI from './QuestionsAPI'
import axios from 'axios'
const App = () => {
    const [selectedQues, setSelectedQues] = useState(1)
    const [prize, setPrize] = useState(0)
    const [endQues, setEndQues] = useState(0)
    const [loading, setLoading] = useState(true)
    const [quesAPI, setQuesAPI] = useState([])

    const fetchQues = async () => {
        const { data } = await axios.get('https://opentdb.com/api.php?amount=10&category=18&type=multiple');
        
   
        setQuesAPI(data.results)
        
    }
    
    useEffect(() => {
        fetchQues()
        setTimeout(() => setLoading(false), 3000)
        
    },[])
    return (
        <>
        {loading
            ?
            <div className="loader">
                <h1>Loading...</h1>
                <RiseLoader color="white" ></RiseLoader>
            </div>
            :
        <div className="body">
                        <QuestionsAPI
                        selectedQues={selectedQues}
                        setSelectedQues={setSelectedQues}
                        setEndQues={setEndQues}
                        prize={prize}
                        quesAPI={quesAPI}
                    />
                    <Side
                        selectedQues={selectedQues}
                        setPrize={setPrize}
                        endQues={endQues}
                    />

            
        </div>}
        </>
    )
}

export default App
