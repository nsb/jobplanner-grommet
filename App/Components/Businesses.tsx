import * as React from "react";
import Article = require("grommet/components/Article");
import Header = require("grommet/components/Header");
import NavControl from "./NavControl";

interface IBusinessesProps {
}

class Businesses extends React.Component<IBusinessesProps, {}> {

    render(): React.ReactElement<{}> {

        return <Article>
            <Header>
                <NavControl />
            </Header>
        </Article>;
    }
}

export default Businesses;