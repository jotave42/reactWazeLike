import React, {useState} from 'react';
//<> </> <-- this is a fragment
function App() {
  const [counter,setCounter] = useState(0);
  function incrementCounter(){
    setCounter(counter + 1);
  }
  return (
    <> 
      <h1>counting: {counter}</h1>
      <button onClick={incrementCounter}>+1</button>
    </>
  );
}

export default App;
