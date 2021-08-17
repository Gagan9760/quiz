import React, { useState } from 'react'
import './App.css'
import Main from './Main'
import Side from './Side'
const App = () => {
    const [selectedQues, setSelectedQues] = useState(1)
    const [prize, setPrize] = useState(0)
    const [endQues, setEndQues] = useState(0)
    return (
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
        </div>
    )
}

export default App
