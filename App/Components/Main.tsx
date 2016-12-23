import * as React from "react";
import NavSidebar from "./NavSidebar";
/* tslint:disable:no-any */
import App = require("grommet/components/App");
import Split = require("grommet/components/Split");
/* tslint:enable:no-any */

interface IMainProps {

}

class Main extends React.Component<IMainProps, {}> {

  render(): React.ReactElement<{}> {

    return <App centered={false}>
      <Split priority={"left"} flex="right">
        <NavSidebar />
        {this.props.children}
      </Split>
    </App>;
  }
}

export default Main;