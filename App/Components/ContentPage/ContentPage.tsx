import * as React from "react";

/* tslint:disable:no-any */
const styles: any = require("./ContentPage.module.less");
/* tslint:enable:no-any */

export default class ContentPage extends React.Component<{}, {}> {

    render(): React.ReactElement<{}> {

        return <div className={styles.container}>
                Hejsa
               </div>;
    }
}
