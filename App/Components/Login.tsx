import * as React from "react";
import { inject} from "mobx-react";

import Split = require("grommet/components/Split");
import Sidebar = require("grommet/components/Sidebar");
import LoginForm = require("grommet/components/LoginForm");
import Footer = require("grommet/components/Footer");

import AuthStore from "../Stores/AuthStore";

interface ILoginForm {
    username: string;
    password: string;
    rememberMe: boolean;
}

interface ILoginProps {
    authStore: AuthStore;
}

interface ILoginState {
    busy: boolean;
}

@inject("authStore")
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

    _onSubmit(credentials: ILoginForm): void {
        this.setState({ busy: true });
        let authStore: AuthStore = this.props.authStore;
        authStore.login(credentials.username, credentials.password, credentials.rememberMe);
    }

}

export default Login;