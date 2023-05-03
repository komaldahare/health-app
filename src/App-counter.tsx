import React, { useEffect, useReducer, useState } from "react";
import "./App.scss";

const initialState = {count: 0, op: ''};
//login: true

// i made the change in ncomment

// i made the second change in ncomment

  function reducer(state:{count: number}, action:{type: string}) {
    switch (action.type) {
  
      case 'increment':
        return {count: state.count + 1, op :'increment'};

      case 'decrement':
        return {count: state.count - 1, op : 'decrement'};

        case 'reset':
          return initialState;
       
      default:
        throw new Error();
       
    }
  }

  
const App = () => {
 
  const [state, dispatch] = useReducer(reducer, initialState); 

  const [count , setCount ] = useState(0)
  const [op , setOp ] = useState('')
  return (
    <div className="width100">
      <span> test Count app</span>
      <br/>
      <>
      Count: {state.count}
      <br/>
      op: {state.op}
      <br />
      <br />
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      
      <br />
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <br />
    
      <button onClick={() => dispatch({type: 'reset'})}>
        Reset
      </button>
    </>

    </div>
  );
}

export default App;
