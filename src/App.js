import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { Input } from './components/Input';
import { useState } from 'react';
import * as math from 'mathjs';
import { evaluate } from 'mathjs';

const App=()=> {

    const [text,setText]=useState("")
    const [result,setReslut]=useState("")

    const addToText=(val)=>{
      setText((text)=>[...text,val+" "])

    }

    const resetInput=()=>{
      setReslut("")
      setText("")
    }

    const calcuateResult =()=>{
      const input=text.join("")
      setReslut(math.evaluate(input))
    }

  return (
    <div className="App">
      <div className='calc-wrapper'>
        <Input text={text} result={result}/>
        <div className='row'>
                <Button symbol={7} handleClick={addToText}/>
                <Button symbol={8} handleClick={addToText}/>
                <Button symbol={9} handleClick={addToText}/>
                <Button symbol={'/'} color="#f2a33c" handleClick={addToText}/>
        </div>
        <div className='row'>
                <Button symbol={6} handleClick={addToText}/>
                <Button symbol={5} handleClick={addToText} />
                <Button symbol={4} handleClick={addToText}/>
                <Button symbol={'*'} color="#f2a33c" handleClick={addToText}/>
        </div>
        <div className='row'>
                <Button symbol={3} handleClick={addToText}/>
                <Button symbol={2} handleClick={addToText}/>
                <Button symbol={1} handleClick={addToText}/>
                <Button symbol={'+'} color="#f2a33c" handleClick={addToText}/>
        </div>
        <div className='row'>
                <Button symbol={0} handleClick={addToText}/>
                <Button symbol={"."} handleClick={addToText} />
                <Button symbol={"="} handleClick={calcuateResult} />
                <Button symbol={"-"}  handleClick={addToText} color="#f2a33c" />
        </div>
        <Button symbol={"Clear"} color="skyblue" handleClick={resetInput}/>
      </div>
    </div>
  );
}

export default App;
