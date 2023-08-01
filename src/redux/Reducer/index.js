import { combineReducers } from "redux";
import { addDepartmentReducer } from "./addDepartmentReducer";
export const reducers = combineReducers({
department:addDepartmentReducer
})
