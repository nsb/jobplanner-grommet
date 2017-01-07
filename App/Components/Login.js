"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Split = require("grommet/components/Split");
var Sidebar = require("grommet/components/Sidebar");
var LoginForm = require("grommet/components/LoginForm");
var Footer = require("grommet/components/Footer");
var Login = (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { busy: false };
        return _this;
    }
    Login.prototype._onSubmit = function () {
        this.setState({ busy: true });
    };
    Login.prototype.render = function () {
        return React.createElement(Split, { flex: "left", seperator: true },
            React.createElement("div", null, "Davs"),
            React.createElement(Sidebar, { justify: "between", align: "center", pad: "none", size: "large" },
                React.createElement("span", null),
                React.createElement(LoginForm, { align: "start", title: "jobPlanner", onSubmit: this.state.busy ? null : this._onSubmit, usernameType: "text" }),
                React.createElement(Footer, { direction: "row", size: "small", pad: { horizontal: "medium", vertical: "small", between: "small" } },
                    React.createElement("span", { className: "secondary" }, "\u00A9 2016 jobPlanner"))));
    };
    return Login;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Login;
//# sourceMappingURL=Login.js.map