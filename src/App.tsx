import { useState } from 'react';

function App() {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (value: string) => {
    setInput(input + value);
    triggerButtonAnimation();
  };

  const handleClear = () => {
    setInput('');
    setResult('');
    triggerButtonAnimation();
  };

  const handleCalculate = () => {
    try {
      // Ensure all trigonometric functions are properly closed
      let expr = input;

      // Check and close any open Math functions
      if (expr.includes('Math.sin(') || expr.includes('Math.cos(')) {
        const openParens = (expr.match(/Math\.sin\(/g) || []).length + (expr.match(/Math\.cos\(/g) || []).length;
        const closeParens = (expr.match(/\)/g) || []).length;

        if (openParens > closeParens) {
          expr += ')'.repeat(openParens - closeParens);
        }
      }

      // Evaluate the expression
      const calculatedResult = eval(expr);
      setResult(calculatedResult.toString());
      triggerButtonAnimation();
    } catch (error) {
      setResult('Error');
      triggerButtonAnimation();
    }
  };

  const triggerButtonAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 150);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30 flex items-center justify-center p-4 font-sans">
      <div className="calculator w-full max-w-sm bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-300 hover:shadow-xl">
        <div className="display bg-gray-900 p-6">
          <div className="input text-right text-white/80 text-xl font-light mb-1 h-8 overflow-x-auto whitespace-nowrap">
            {input || '0'}
          </div>
          <div className={`result text-right text-white text-3xl font-semibold transition-all duration-300 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
            {result || '0'}
          </div>
        </div>
        
        <div className="buttons grid grid-cols-4 gap-1.5 p-3 bg-gray-100/90">
          <button 
            onClick={handleClear} 
            className="col-span-2 bg-red-500 hover:bg-red-600 text-white rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm"
          >
            Clear
          </button>
          <button 
            onClick={() => handleClick('Math.PI')} 
            className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm"
          >
            π
          </button>
          <button 
            onClick={handleCalculate} 
            className="bg-green-500 hover:bg-green-600 text-white rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm"
          >
            =
          </button>
          
          <button onClick={() => handleClick('7')} className="bg-gray-200 hover:bg-gray-300 rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">7</button>
          <button onClick={() => handleClick('8')} className="bg-gray-200 hover:bg-gray-300 rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">8</button>
          <button onClick={() => handleClick('9')} className="bg-gray-200 hover:bg-gray-300 rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">9</button>
          <button onClick={() => handleClick('/')} className="bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">/</button>
          
          <button onClick={() => handleClick('4')} className="bg-gray-200 hover:bg-gray-300 rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">4</button>
          <button onClick={() => handleClick('5')} className="bg-gray-200 hover:bg-gray-300 rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">5</button>
          <button onClick={() => handleClick('6')} className="bg-gray-200 hover:bg-gray-300 rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">6</button>
          <button onClick={() => handleClick('*')} className="bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">×</button>
          
          <button onClick={() => handleClick('1')} className="bg-gray-200 hover:bg-gray-300 rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">1</button>
          <button onClick={() => handleClick('2')} className="bg-gray-200 hover:bg-gray-300 rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">2</button>
          <button onClick={() => handleClick('3')} className="bg-gray-200 hover:bg-gray-300 rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">3</button>
          <button onClick={() => handleClick('-')} className="bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">−</button>
          
          <button onClick={() => handleClick('0')} className="col-span-2 bg-gray-200 hover:bg-gray-300 rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">0</button>
          <button onClick={() => handleClick('.')} className="bg-gray-200 hover:bg-gray-300 rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">.</button>
          <button onClick={() => handleClick('+')} className="bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">+</button>
          
          <button onClick={() => handleClick('Math.sin(')} className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">sin</button>
          <button onClick={() => handleClick('Math.cos(')} className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">cos</button>
          <button onClick={() => handleClick(')')} className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">)</button>
          <button onClick={() => handleClick('(')} className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full py-3 font-medium transition-all duration-150 active:scale-95 shadow-sm">(</button>
        </div>
      </div>
    </div>
  );
}

export default App;