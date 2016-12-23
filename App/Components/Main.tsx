import * as React from "react";
import NavSidebar from "./NavSidebar";
/* tslint:disable:no-any */
import App = require("grommet/components/App");
import Split = require("grommet/components/Split");
/* tslint:enable:no-any */

interface IMainProps {

}

interface IMainState {
  navActive: boolean;
}

class Main extends React.Component<IMainProps, IMainState> {

  constructor(props: IMainProps) {
    super(props);
    this.state = { navActive: true };
  }

  navbarActivate = (active: boolean): void => {
      this.setState({navActive: active});
  }

  render(): React.ReactElement<{}> {

    return <App centered={false}>
      <Split priority={"left"} flex="right">
        {this.state.navActive ? <NavSidebar onClose={() => this.navbarActivate(false)} /> : null}
        {this.props.children}
      </Split>
    </App>;
  }
}

export default Main;