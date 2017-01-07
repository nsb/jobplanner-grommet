import * as React from "react";
import NavSidebar from "./NavSidebar";
import { connect, Dispatch } from "react-redux";
import App = require("grommet/components/App");
import Split = require("grommet/components/Split");
import { toggleNav } from "../Actions";
import { Action } from "redux-actions";

interface IMainProps {
    dispatch: Dispatch<Action<{}>>;
}

interface IMainState {

}

class Main extends React.Component<IMainProps, IMainState> {

  constructor(props: IMainProps) {
    super(props);
  }

  render(): React.ReactElement<{}> {

    return <App centered={false}>
      <Split priority={"left"} flex="right">
        {true ? <NavSidebar toggleNav={() => this.props.dispatch(toggleNav())}/> : null}
        {this.props.children}
      </Split>
    </App>;
  }
}

export default connect()(Main);