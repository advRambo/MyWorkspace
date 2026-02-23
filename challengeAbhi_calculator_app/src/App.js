import { useState } from "react";

export default function App() {
  const [num, setNum] = useState('');

  const handleClick = (e) => {
    setNum(Number(e));
    console.log('Hello')
    console.log(num)
  }

  return (
    <div className="App">
      <form id="cal">
        <Textbox />
        <CalcButtons setNumber={handleClick} />
      </form>
    </div>
  );
}

const CalcButtons = ({ setNumber }) => {
  return (
    <>
      {/* {
        Array.from({ length: 10 }, (_, i) => (
          <Buttons val={i} key={i}>
            {children}
          </Buttons>
        ))
      } */}
      <Buttons onSelect={setNumber} />
    </>
  )
}

const Buttons = ({ onSelect }) => {
  return (
    <>
      <button value={0} onClick={(e) => onSelect(e.target.value)}> 0 </button >
      {/* <button value={1} onClick={onSelect}> 1 </button >
      <button value={2} onClick={onSelect}> 2 </button >
      <button value={3} onClick={onSelect}> 3 </button >
      <button value={4} onClick={onSelect}> 4 </button >
      <button value={5} onClick={onSelect}> 5 </button >
      <button value={6} onClick={onSelect}> 6 </button >
      <button value={7} onClick={onSelect}> 7 </button >
      <button value={8} onClick={onSelect}> 8 </button >
      <button value={9} onClick={onSelect}> 9 </button >
      <button value={'C'} onClick={onSelect}> C </button >
      <button value={'d'} onClick={onSelect}> = </button > */}
    </>
  )
}

const Textbox = () => {
  return (
    <>
      <input type="text" />
    </>
  )
}