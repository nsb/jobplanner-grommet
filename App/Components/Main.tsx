import * as React from "react";
import { inject, observer } from "mobx-react";
import NavSidebar from "./NavSidebar";
import UiStore from "../Stores/UiStore";
/* tslint:disable:no-any */
import App = require("grommet/components/App");
import Split = require("grommet/components/Split");
/* tslint:enable:no-any */

interface IMainProps {
  uiStore: UiStore;
}

interface IMainState {

}

@inject("uiStore")
@observer class Main extends React.Component<IMainProps, IMainState> {

  constructor(props: IMainProps) {
    super(props);
  }

  render(): React.ReactElement<{}> {

    return <App centered={false}>
      <Split priority={"left"} flex="right">
        {this.props.uiStore.navActive ? <NavSidebar uiStore={this.props.uiStore} /> : null}
        {this.props.children}
      </Split>
    </App>;
  }
}

export default Main;