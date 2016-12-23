import * as React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import { Provider } from "mobx-react";

import AuthStore from "./Stores/AuthStore";
import UiStore from "./Stores/UiStore";
import Main from "./Components/Main";
import Login from "./Components/Login";
import Businesses from "./Components/Businesses";

interface IAppProps {

}

class App extends React.Component<IAppProps, {}> {
  authStore: AuthStore;
  uiStore: UiStore;

  constructor(props: IAppProps) {
    super(props);
    this.authStore = new AuthStore();
    this.uiStore = new UiStore();
  }

  authRequired = (nextState: Router.RouterState, replace: Router.RedirectFunction): void => {
    if (!this.authStore.isLoggedIn) {
      replace("/login");
    }
  }

  render(): React.ReactElement<{}> {
    return <div>
      <Provider
        authStore={this.authStore}
        uiStore={this.uiStore}>
        <Router history={browserHistory}>
          <Route path="login" component={Login} />
          <Route path="/" onEnter={this.authRequired} component={Main} >
            <IndexRoute component={Businesses} />
          </Route>
        </Router>
      </Provider>
    </div>;
  }
};

export default App;