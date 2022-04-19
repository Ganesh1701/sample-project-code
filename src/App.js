import React,{useRef} from'react';

function App(){
   let inputRef=useRef(null)
   function handleInput()
   {
      console.warn("function call")
      inputRef.current.style.color='red'
   }
   return(
      <div className='App'>
         <h1>useRef in React</h1>
         <input type ='text' ref={inputRef}/>
         <button onClick={handleInput}>Handle Input</button>
      </div>
   )
}
export default App;