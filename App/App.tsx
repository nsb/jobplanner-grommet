import * as React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import { createStore, Store } from "redux";
import { Provider } from "react-redux";

import Main from "./Components/Main";
import Login from "./Components/Login";
import Businesses from "./Components/Businesses";
import { IState } from "./Models";
import rootReducer from "./Reducers";

interface IAppProps {

}

class App extends React.Component<IAppProps, {}> {
  store: Store<IState>;

  constructor(props: IAppProps) {
    super(props);
    const initialState: IState = { showNav: true, token: localStorage.getItem("token") };
    this.store = createStore(rootReducer, initialState);
  }

  authRequired = (nextState: Router.RouterState, replace: Router.RedirectFunction): void => {
    replace("/login");
  }

  render(): React.ReactElement<{}> {

    return <div>
      <Provider
        store={this.store}>
        <Router history={browserHistory}>
          <Route path="login" component={Login} />
          <Route path="/" component={Main} >
            <IndexRoute component={Businesses} />
          </Route>
        </Router>
      </Provider>
    </div>;
  }
};

export default App;