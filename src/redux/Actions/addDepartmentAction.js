import { ActionType } from "../types/cakeType"

export const addDepartment  = (value)=>{

    return async (dispatch)=>{
        dispatch({
            isLoading:false,
            type:ActionType.ADD_DEPARTMENT,
            payload:value,
            msg:''
        });
        // callback();
    };
};
export const editDepartment  = (updateValue,id)=>{

    return async (dispatch)=>{
        dispatch({
            isLoading:false,
            type:ActionType.EDIT_DEPARTMENT,
            payload:{updateValue,id},
            msg:''
        });
        // callback();
    };
};

export const deleteDepartment  = (id)=>{

    return async (dispatch)=>{
        dispatch({
            isLoading:false,
            type:ActionType.DELETE_DEPARTMENT,
            payload:id,
            msg:''
        });
        // callback();
    };
};