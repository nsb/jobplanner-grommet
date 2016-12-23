import * as React from "react";
import { inject } from "mobx-react";
/* tslint:disable:no-any */
import Article = require("grommet/components/Article");
import Header = require("grommet/components/Header");
/* tslint:enable:no-any */
import UiStore from "../Stores/UiStore";
import NavControl from "./NavControl";

interface IBusinessesProps {
    uiStore: UiStore;
}

@inject("uiStore")
class Businesses extends React.Component<IBusinessesProps, {}> {

    render(): React.ReactElement<{}> {

        return <Article>
            <Header>
                <NavControl uiStore={this.props.uiStore} />
            </Header>
        </Article>;
    }
}

export default Businesses;