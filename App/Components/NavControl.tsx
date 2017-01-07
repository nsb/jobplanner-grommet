import * as React from "react";
import Button = require("grommet/components/Button");
import Logo from "./Logo";

interface INavControlProps {
}

class NavControl extends React.Component<INavControlProps, {}> {

    render(): React.ReactElement<{}> {

        return <Button>
            <Logo colorIndex={"#ddd"} size={"medium"} />
            Hejsa
        </Button>;
    }

}

export default NavControl;