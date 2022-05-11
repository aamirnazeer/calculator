import "./App.css";
import Button from "./UI/Button";
import Display from "./UI/Display";
import { useState } from "react";
import keyboardButtons from "./keyboardButtons";

function App() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [operator, setOperator] = useState('')

    

    const keyPressHandler = (e) => {
        const {value} = e.target
        if (parseInt(value)) {
            setInput((prev) => {
                return prev + value
            })
         } else if (value == '+') {
             setOperator(value)
             
         }
         
         
         
        
    }

    return (
        <div className="App">
            <div className="vertical">
                <div className="displayBlock">
                    <Display id='topDisplay' value={input} disabled/>
                    <Display id='bottomDisplay' value={output} disabled/>
                </div>
                <div className="keypad">
                    {Object.values(keyboardButtons).map((values) => {
                        return <Button onClick={keyPressHandler} key={values} value={values}>{values}</Button>
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
