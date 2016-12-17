import * as React from "react";
/* tslint:disable:no-any */
import App = require("grommet/components/App");
import Split = require("grommet/components/Split");
import Box = require("grommet/components/Box");
import Header = require("grommet/components/Header");
import Footer = require("grommet/components/Footer");
import Meter = require("grommet/components/Meter");
import Title = require("grommet/components/Title");
/* tslint:enable:no-any */

export default class ContentPage extends React.Component<{}, {}> {

    render(): React.ReactElement<{}> {

        return <App centered={false}>
                <Split priority={"left"}>
                  <div>
                  Sidebar
                  </div>
                  <Header direction="row" justify="between"
                    pad={{horizontal: "medium"}}>
                    <Title>Grommet standalone</Title>
                  </Header>
                  <Box pad="medium">
                    <Meter value={40} />
                  </Box>
                  <Footer primary={true} appCentered={true} direction="column"
                    align="center" pad="small" colorIndex="grey-1">
                    <p>
                      Build your ideas with <a href="http://grommet.io" target="_blank">Grommet</a>!
                    </p>
                  </Footer>
                </Split>
              </App>;
    }
}
