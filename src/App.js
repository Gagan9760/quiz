import React, { useState, useEffect } from 'react'
import './App.css'
import RiseLoader from 'react-spinners/RiseLoader'
import Main from './Main'
import Side from './Side'
const App = () => {
    const [selectedQues, setSelectedQues] = useState(1)
    const [prize, setPrize] = useState(0)
    const [endQues, setEndQues] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => setLoading(false), 3000)
    }, [])
    return (
        <>
        {loading
            ?
            <div className="loader">
                <RiseLoader color="white" ></RiseLoader>
            </div>
            :
        <div className="body">
                        <Main
                        selectedQues={selectedQues}
                        setSelectedQues={setSelectedQues}
                        setEndQues={setEndQues}
                        prize={prize}
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
