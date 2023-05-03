import { useReducer, useRef, useState } from "react";
import reducerFunction, { initialState } from "./store";
import { UPDATE_BP, UPDATE_DBP, UPDATE_HR, UPDATE_OXL, UPDATE_PR, UPDATE_SBP, UPDATE_SR } from "./store/storeType";

  const App = () => {
    const selectRef: any = useRef();    
    const [state, dispatch ] = useReducer(reducerFunction, initialState)
    const [healthInput, sethealthInput] = useState<number>(0);

        const updateHealthData = () =>{
            console.log('selectRef', selectRef.current.value)
            console.log('inputvalue', healthInput)
            dispatch({
                payload: {value: healthInput},
                type:selectRef.current.value
            })
        }

    return (
        <div className="width100">

          <div>
          <ul>
                <li>
                    {state.BP.name}:- {state.BP.value}
                </li>

                <li>
                    {state.HR.name}:- {state.HR.value}
                </li>

                <li>
                    {state.SBP.name}:- {state.SBP.value}
                </li>

                <li>
                    {state.DBP.name}:- {state.DBP.value}
                </li>

                <li>
                    {state.PR.name}:- {state.PR.value}
                </li>

                <li>
                    {state.SR.name}:- {state.SR.value}
                </li>

                <li>
                    {state.OXL.name}:- {state.OXL.value}
                </li>

            </ul>
          </div>

        <div>
              <form action="/action_page.php">
            <label> Choose Health Data:</label>
            <br/>
         <select name="healthData " id="healthData" ref= {selectRef}>
            
              <option value= {UPDATE_BP}> {state.BP.name} </option>
              <option value= {UPDATE_HR}> {state.HR.name} </option>
              <option value= {UPDATE_SBP}> {state.SBP.name} </option>
              <option value= {UPDATE_DBP}> {state.DBP.name} </option>
              <option value= {UPDATE_PR}> {state.PR.name} </option>
              <option value= {UPDATE_SR}> {state.SR.name} </option>
              <option value= {UPDATE_OXL}> {state.OXL.name} </option>
        </select>
         <br/>
         <input type = "number" 
         value={healthInput}
          onChange={(e) => sethealthInput(parseInt(e.target.value))}/> 
          <br/>
          <button type = "button" onClick={() =>updateHealthData() }> submit</button>
         </form>
        </div>

        </div>
    );
  }

  export default App;