import * as React from "react";
import {Router, Route, browserHistory} from "react-router";
import Main from "./Components/Main";
import {Provider} from "mobx-react";

export default class App extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return <div>
          <Provider>
            <Router history={browserHistory}>
              <Route path="/" component={Main} />
            </Router>
          </Provider>
        </div>;
    }
};
