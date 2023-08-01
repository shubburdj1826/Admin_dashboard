import { ActionType } from "../types/cakeType";

export const buyCake = (value,callback) => {
  return async (dispatch) => {

    dispatch({
      type: ActionType.BUY_CAKE,
      payload: value,
      isLoading: false,
      msg: "",
    });
    callback();

  };

};
