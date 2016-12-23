import * as React from "react";
import { inject } from "mobx-react";
/* tslint:disable:no-any */
import Button = require("grommet/components/Button");
/* tslint:enable:no-any */
import Logo from "./Logo";
import UiStore from "../Stores/UiStore";

interface INavControlProps {
    uiStore: UiStore;
}

@inject("uiStore")
class NavControl extends React.Component<INavControlProps, {}> {

    render(): React.ReactElement<{}> {

        return <Button onClick={this.onOpen}>
            <Logo colorIndex={"#ddd"} size={"medium"} />
            Hejsa
        </Button>;
    }

    onOpen = () => {
        this.props.uiStore.setNavActive(true);
    }

}

export default NavControl;