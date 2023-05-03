import { UPDATE_BP, UPDATE_DBP, UPDATE_HR, UPDATE_OXL, UPDATE_PR, UPDATE_SBP, UPDATE_SR,
     actionType, stateType } from "./storeType";



export const initialState: stateType = {

    BP :{value:0, name: 'blood pressure'},
    HR :{value:0, name: 'Heart Rate'},
    SBP :{value:0, name: 'Sistolic Blood Pressure '},
    DBP :{value:0, name: 'Distolic blood pressure'},
    PR :{value:0, name: 'Pulse Rate'},
    SR :{value:0, name: 'Sugar'},
    OXL :{value:0, name: 'Oxygen Level'},
}

const reducerFunction = (state= initialState, action:actionType) => {
switch (action.type) {
    case UPDATE_BP:
            return {
                ...state, 
                BP: {value: action.payload.value, name: state.BP.name}
            }

                   
     case UPDATE_HR:
             return {
                 ...state, 
                    HR: {value: action.payload.value, name: state.HR.name}
                }

     case UPDATE_SBP:
             return {
                      ...state, 
                      SBP: {value: action.payload.value, name: state.SBP.name}
                    }

     case UPDATE_DBP:
             return {
                       ...state, 
                        DBP: {value: action.payload.value, name: state.DBP.name}
                        }
        
     case UPDATE_PR:
            return {
                     ...state, 
                          PR: {value: action.payload.value, name: state.PR.name}
                            }
                
       case UPDATE_SR:
            return {
                            ...state, 
                            SR: {value: action.payload.value, name: state.SR.name}
                                }

       case UPDATE_OXL:
            return {
                            ...state, 
                             OXL: {value: action.payload.value, name: state.OXL.name}
                                    }
                    
      
    default:
        return state;
}

}

export default reducerFunction;