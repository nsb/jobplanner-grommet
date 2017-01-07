import * as React from "react";
import { connect } from "react-redux";
import { MapStateToProps } from "react-redux";

import Split = require("grommet/components/Split");
import Sidebar = require("grommet/components/Sidebar");
import LoginForm = require("grommet/components/LoginForm");
import Footer = require("grommet/components/Footer");

interface ILoginForm {
    username: string;
    password: string;
    rememberMe: boolean;
}

interface ILoginProps {

}

interface ILoginState {
    busy: boolean;
}

class Login extends React.Component<ILoginProps, ILoginState> {

    public state: ILoginState;

    constructor(props: ILoginProps) {
        super(props);
        this.state = { busy: false };
    }

    render(): React.ReactElement<{}> {
        return <Split flex="left">
            <div>Davs</div>
            <Sidebar justify="between" align="center" pad="none" size="large">
                <span />
                <LoginForm align="start"
                    title="jobPlanner"
                    onSubmit={this.state.busy ? null : (credentials: ILoginForm) => this._onSubmit(credentials)}
                    usernameType="text" />
                <Footer direction="row" size="small"
                    pad={{ horizontal: "medium", vertical: "small", between: "small" }}>
                    <span className="secondary">&copy; 2016 jobPlanner</span>
                </Footer>
            </Sidebar>
        </Split>;
    }

    _onSubmit(form: ILoginForm): void {
        this.setState({ busy: true });
    }

}

const mapStateToProps: MapStateToProps<ILoginProps, {}> = state => ({

});

export default connect(mapStateToProps)(Login);