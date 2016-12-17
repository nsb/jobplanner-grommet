import * as React from "react";
/* tslint:disable:no-any */
import App = require("grommet/components/App");
import Button = require("grommet/components/Button");
/* tslint:enable:no-any */

export default class ContentPage extends React.Component<{}, {}> {

    render(): React.ReactElement<{}> {

        return <App>
                Hejsa
                <Button />
               </App>;
    }
}
