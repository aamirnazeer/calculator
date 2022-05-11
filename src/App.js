import "./App.css";
import Button from "./UI/Button";
import Display from "./UI/Display";
import { useState } from "react";

function App() {
    const [input, setInput] = useState('');

    const setInputHandler = (event) => {
		setInput((prev) => {
			return prev + event.target.innerHTML
		})
    };

	const clearHandler = () => {
		setInput('')
	}

	const calculateHandler = () => {
        const solution = eval(input)
		console.log(solution)
        setInput(solution)
	}

    return (
        <div className="App">
            <div className="vertical">
                <div>
                    <Display value={input} disabled/>
                </div>
                <div className="inline">
                    <Button onClick={setInputHandler}>1</Button>
                    <Button onClick={setInputHandler}>2</Button>
                    <Button onClick={setInputHandler}>3</Button>
                    <Button onClick={setInputHandler}>+</Button>
                </div>
                <div className="inline">
                    <Button onClick={setInputHandler}>4</Button>
                    <Button onClick={setInputHandler}>5</Button>
                    <Button onClick={setInputHandler}>6</Button>
                    <Button onClick={setInputHandler}>-</Button>
                </div>
                <div className="inline">
                    <Button onClick={setInputHandler}>7</Button>
                    <Button onClick={setInputHandler}>8</Button>
                    <Button onClick={setInputHandler}>9</Button>
                    <Button onClick={setInputHandler}>*</Button>
                </div>
                <div className="inline">
                    <Button onClick={clearHandler}>C</Button>
                    <Button onClick={setInputHandler}>0</Button>
                    <Button onClick={calculateHandler}>=</Button>
                    <Button onClick={setInputHandler}>/</Button>
                </div>
            </div>
        </div>
    );
}

export default App;
