import React,{useState} from 'react'
import './App.css'
import Main from './Main'
import Side from './Side'
const App = () => {
    const [selectedQues, setSelectedQues] = useState(1)
    return (
        <div className="body">
            <Main selectedQues={selectedQues} setSelectedQues={setSelectedQues}/>
            <Side selectedQues={selectedQues}/>
        </div>
    )
}

export default App
