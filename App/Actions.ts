import { createAction, Action, ActionFunction0 } from "redux-actions";
import { TOGGLE_NAV } from "./Constants";

const toggleNav: ActionFunction0<Action<{}>> = createAction<{}>(
  TOGGLE_NAV
);

export {
  toggleNav
}