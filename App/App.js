"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
animport * as;
React;
from;
"react";
var react_router_1 = require("react-router");
var mobx_react_1 = require("mobx-react");
var Main_1 = require("./Components/Main");
var Login_1 = require("./Components/Login");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(mobx_react_1.Provider, null,
                React.createElement(react_router_1.Router, { history: react_router_1.browserHistory },
                    React.createElement(react_router_1.Route, { path: "/", component: Main_1.default },
                        React.createElement(react_router_1.IndexRoute, { component: Login_1.default }),
                        React.createElement(react_router_1.Route, { path: "login", component: Login_1.default })))));
    };
    return App;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
;
//# sourceMappingURL=App.js.map