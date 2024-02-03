/* eslint-disable no-eval */
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const appendInput = (value) => setInput(input + value);
  const clear = () => setInput('');
  const calculate = () => {
    try {
      setInput(String(eval(input)));
    } catch {
      setInput('Error');
    }
  };
  const handleUnaryOperation = (operation) => {
    try {
      setInput(String(eval(operation(input))));
    } catch {
      setInput('Error');
    }
  };
  const factorial = (n) => {
    if (n < 0) return 'Error';
    if (n === 0 || n === 1) return '1';
    return n * factorial(n - 1);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="calculator w-80 bg-white rounded-lg shadow-xl">
        <div className="display p-4 text-3xl text-right border-b-2 border-gray-200">{input || '0'}</div>
        <div className="grid grid-cols-5 gap-2 p-4">
          <Button className="bg-gray-300 px-1" value="2ⁿᵈ" onClick={() => {}} />
          <Button className="bg-gray-300 px-1" value="π" onClick={() => appendInput(Math.PI)} />
          <Button className="bg-gray-300 px-1" value="e" onClick={() => appendInput(Math.E)} />
          <Button className="bg-gray-300 px-1" value="C" onClick={clear} />
          <Button className="bg-gray-300 px-1" value="⌫" onClick={() => setInput(input.slice(0, -1))} />
          <Button className="bg-gray-300 px-1" value="x²" onClick={() => appendInput('**2')} />
          <Button className="bg-gray-300 px-1" value="1/x" onClick={() => appendInput('**(-1)')} />
          <Button className="bg-gray-300 px-1" value="|x|" onClick={() => handleUnaryOperation('Math.abs')} />
          <Button className="bg-gray-300 px-1" value="exp" onClick={() => appendInput('Math.exp(')} />
          <Button className="bg-gray-300 px-1" value="mod" onClick={() => appendInput('%')} />
          <Button className="bg-gray-300 px-1" value="√" onClick={() => appendInput('Math.sqrt(')} />
          <Button className="bg-gray-300 px-1" value="(" onClick={() => appendInput('(')} />
          <Button className="bg-gray-300 px-1" value=")" onClick={() => appendInput(')')} />
          <Button className="bg-gray-300 px-1" value="n!" onClick={() => setInput(factorial(parseInt(input)))} />
          <Button className="bg-gray-300 px-1" value="÷" onClick={() => appendInput('/')} />
          <Button className="bg-gray-300 px-1" value="xʸ" onClick={() => appendInput('**')} />
          <Button className="bg-gray-300 px-1" value="7" onClick={() => appendInput('7')} />
          <Button className="bg-gray-300 px-1" value="8" onClick={() => appendInput('8')} />
          <Button className="bg-gray-300 px-1" value="9" onClick={() => appendInput('9')} />
          <Button className="bg-gray-300 px-1" value="×" onClick={() => appendInput('*')} />
          <Button className="bg-gray-300 px-1" value="10ˣ" onClick={() => appendInput('10**')} />
          <Button className="bg-gray-300 px-1" value="4" onClick={() => appendInput('4')} />
          <Button className="bg-gray-300 px-1" value="5" onClick={() => appendInput('5')} />
          <Button className="bg-gray-300 px-1" value="6" onClick={() => appendInput('6')} />
          <Button className="bg-gray-300 px-1" value="−" onClick={() => appendInput('-')} />
          <Button className="bg-gray-300 px-1" value="log" onClick={() => appendInput('Math.log10(')} />
          <Button className="bg-gray-300 px-1" value="1" onClick={() => appendInput('1')} />
          <Button className="bg-gray-300 px-1" value="2" onClick={() => appendInput('2')} />
          <Button className="bg-gray-300 px-1" value="3" onClick={() => appendInput('3')} />
          <Button className="bg-gray-300 px-1" value="+" onClick={() => appendInput('+')} />
          <Button className="bg-gray-300 px-1" value="ln" onClick={() => appendInput('Math.log(')} />
          <Button className="bg-gray-300 px-1" value="+/-" onClick={() => setInput(`-(${input})`)} />
          <Button className="bg-gray-300 px-1" value="0" onClick={() => appendInput('0')} />
          <Button className="bg-gray-300 px-1" value="." onClick={() => appendInput('.')} />
          <Button value="=" onClick={calculate} className="col-span-1 bg-blue-600 text-white" />
        </div>
      </div>
    </div>
  );
}

const Button = ({ value, onClick, className }) => (
  <button
    onClick={onClick}
    className={`text-lg font-bold py-2 px-4 rounded text-black focus:outline-none hover:bg-gray-200 ${className}`}
  >
    {value}
  </button>
);

export default App;
