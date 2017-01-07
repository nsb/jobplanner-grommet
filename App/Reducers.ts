import { combineReducers } from "redux";
import { handleActions, Action, Reducer } from "redux-actions";

import { IState } from "./models";
import { TOGGLE_NAV } from "./Constants";

const initialState: IState = <IState> {
    showNav: true
};

const uiReducer: Reducer<IState, {}> = handleActions<IState, {}>(
    {[TOGGLE_NAV]: (state: IState, action: Action<{}>): IState => {
        return state;
    }},
    initialState);

export default combineReducers<IState>({
  uiReducer
});
