import * as React from "react";
import ContentPage from "./Components/ContentPage/ContentPage";

require("./Global/Styles/global.less");

export default class App extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return  <div>
                    <ContentPage />
                </div>;
    }
};
