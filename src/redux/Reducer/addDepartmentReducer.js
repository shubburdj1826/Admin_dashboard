import { ActionType } from "../types/cakeType";

let initialState = {
    department:[]
};
export const addDepartmentReducer = (state = initialState,action)=>{
    // console.log(action)
    switch (action.type) {
        case ActionType.ADD_DEPARTMENT:
            return{
                ...state,
                department:[...state.department,action.payload],
                msg:"success"
            }
        case ActionType.EDIT_DEPARTMENT:
            return{
                ...state,
                department:(state.department).map((element)=>{
                    if(element.id === action.payload.id){
                        return action.payload.updateValue
                    }
                    else return element
                }),
                msg:"Update success"
            }
        case ActionType.DELETE_DEPARTMENT:
            return{
                ...state,
                department:(state.department).filter((element)=>{
                    return element.id !== action.payload;
                }),
                msg:"Delete success"
            }
    
        default:
            return state
    }
}
