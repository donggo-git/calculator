import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState('');
  const [displayCalc, setDisplayCalc] = useState('')


  const clearHandler = () => {
    setCalc('')
    setDisplayCalc('')
  }
  const backHandler = () => {
    //remove last char in displayCalc
    setDisplayCalc(displayCalc.slice(0, displayCalc.length - 1))
    //if last item in calc is exponent sign **, remove operation (last 2 chars)
    //else remove last char in calc
    if (calc[calc.length - 1] === '*' && calc[calc.length - 2] === '*') {
      setCalc(calc.slice(0, calc.length - 2))
    } else {
      setCalc(calc.slice(0, calc.length - 1))
    }
    console.log(calc)
  }

  //handle input when user click button
  const handleCalculatorInput = (value: string) => {
    setDisplayCalc(displayCalc + value);
    //if input value is exponent operator
    if (value === '^') {
      setCalc(calc + '**')
    }
    else {
      setCalc(calc + value)
    }
    console.log(calc)
  }
  //handle input when user type in
  const handleInputOnChange = (value: string) => {
    let invalid = /.*[a-zA-Z!@#$%&(){}[\]`~<>?|=].*/
    //check if user enter invalid input
    if (invalid.test(value)) {
      alert('invalid input')
    } else {
      setDisplayCalc(value)
      if (value.includes('^')) {
        value = value.replace('^', '**')
      }
      setCalc(value)
    }
  }


  const calculateResultHandler = () => {
    let invalidOperators = /.*\+\+|--|\*\*|\/\/|\^\^|\*\/|\/\*.*/
    //check if user enter invalid operator like **, ++, ^^
    if (invalidOperators.test(displayCalc)) {
      alert('Please check your input, invalid operators')
      return
    }
    setDisplayCalc(String(eval(calc)))
    setCalc(displayCalc)

    //calculate result not using eval function

    //get all operators from user input
    /*let operators: Array<string> = calc.split(/\d+(\.\d+)?/).filter(item => /[+\-*^/]/.test(item))
    //get all operand from user input
    let operand = calc.split(/[+\-^/*]/).map(item => parseFloat(item))
    //console.log(operators)
    //console.log(operand)
    //handle exponent
    while (operators.includes('^')) {
      let i = operators.indexOf('^')
      operand[i] = Math.pow(operand[i], operand[i + 1])
      operators.splice(i, 1)
      operand.splice(i + 1, 1)
    }
    //handle multiply and divide
    while (operators.includes('*') || operators.includes('/')) {
      let i = operators.indexOf('*')
      let j = operators.indexOf('/')
      //console.log('i ', i, ' j ', j)
      if (i !== -1 && j === -1) {
        operand[i] = operand[i] * operand[i + 1]

        operators.splice(i, 1)
        operand.splice(i + 1, 1)
      }
      else if (j !== -1 && i === -1) {
        operand[j] = operand[j] / operand[j + 1]
        operators.splice(j, 1)
        operand.splice(j + 1, 1)
      }
      else {
        if (i < j) {
          console.log('plus ', i)
          operand[i] = operand[i] * operand[i + 1]

          operators.splice(i, 1)
          operand.splice(i + 1, 1)
        }
        else {
          operand[j] = operand[j] / operand[j + 1]
          operators.splice(j, 1)
          operand.splice(j + 1, 1)
        }
      }

    }
    //handle plus and minus
    while (operators.includes('+') || operators.includes('-')) {
      let i = operators.indexOf('+')
      let j = operators.indexOf('-')
      //console.log('i ', i, ' j ', j)
      if (i !== -1 && j === -1) {
        //console.log('plus ', i)
        operand[i] = operand[i] + operand[i + 1]

        operators.splice(i, 1)
        operand.splice(i + 1, 1)
      }
      else if (j !== -1 && i === -1) {
        operand[j] = operand[j] - operand[j + 1]
        //console.log(operand[j])
        operators.splice(j, 1)
        operand.splice(j + 1, 1)
      }
      else {
        if (i < j) {
          //console.log('plus ', i)
          operand[i] = operand[i] + operand[i + 1]

          operators.splice(i, 1)
          operand.splice(i + 1, 1)
        }
        else {
          operand[j] = operand[j] - operand[j + 1]
          //console.log(operand[j])
          operators.splice(j, 1)
          operand.splice(j + 1, 1)
        }
      }

    }*/
    //console.log(operators)
    //console.log(operand)
    //setCalc(String(operand[0]))
    //handle exponent
  }


  return (
    <div className="main">
      <section className="calculator-body">
        <input type="text" value={displayCalc} id="calculator-input" onChange={(e) => handleInputOnChange(e.target.value)} />
        <img src={logo} className="react-logo" alt="logo" />
        <div className='calculatorBtns'>
          <button className="calculator-button clearBtn" onClick={clearHandler}>AC</button>
          <button className="calculator-button backBtn" onClick={backHandler}>DEL</button>
          <button className="calculator-button" onClick={() => { handleCalculatorInput('^') }}>^</button>
          <button className="calculator-button" onClick={() => { handleCalculatorInput('/') }}>/</button>

          <button className="calculator-button" onClick={() => { handleCalculatorInput('7') }}>7</button>
          <button className="calculator-button" onClick={() => { handleCalculatorInput('8') }}>8</button>
          <button className="calculator-button" onClick={() => { handleCalculatorInput('9') }}>9</button>
          <button className="calculator-button" onClick={() => { handleCalculatorInput('*') }}>x</button>

          <button className="calculator-button" onClick={() => { handleCalculatorInput('4') }}>4</button>
          <button className="calculator-button" onClick={() => { handleCalculatorInput('5') }}>5</button>
          <button className="calculator-button" onClick={() => { handleCalculatorInput('6') }}>6</button>
          <button className="calculator-button" onClick={() => { handleCalculatorInput('-') }}>-</button>

          <button className="calculator-button" onClick={() => { handleCalculatorInput('1') }}>1</button>
          <button className="calculator-button" onClick={() => { handleCalculatorInput('2') }}>2</button>
          <button className="calculator-button" onClick={() => { handleCalculatorInput('3') }}>3</button>
          <button className="calculator-button" onClick={() => { handleCalculatorInput('+') }}>+</button>

          <button className="calculator-button btn0" onClick={() => { handleCalculatorInput('0') }}>0</button>
          <button className="calculator-button" onClick={() => { handleCalculatorInput('.') }}>.</button>
          <button className="calculator-button" onClick={calculateResultHandler}>=</button>
        </div>
      </section >
    </div >
  );
}

export default App;
