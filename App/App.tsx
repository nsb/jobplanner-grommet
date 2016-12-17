import * as React from "react";
import {Router, Route, browserHistory} from "react-router";
import ContentPage from "./Components/ContentPage/ContentPage";
import {Provider} from "mobx-react";

export default class App extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return <div>
          <Provider>
            <Router history={browserHistory}>
              <Route path="/" component={ContentPage} />
            </Router>
          </Provider>
        </div>;
    }
};
