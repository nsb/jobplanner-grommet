"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var NavSidebar_1 = require("./NavSidebar");
var App = require("grommet/components/App");
var Split = require("grommet/components/Split");
var Box = require("grommet/components/Box");
var Header = require("grommet/components/Header");
var Footer = require("grommet/components/Footer");
var Meter = require("grommet/components/Meter");
var Title = require("grommet/components/Title");
var ContentPage = (function (_super) {
    __extends(ContentPage, _super);
    function ContentPage() {
        return _super.apply(this, arguments) || this;
    }
    ContentPage.prototype.render = function () {
        return React.createElement(App, { centered: false },
            React.createElement(Split, { priority: "left" },
                React.createElement(NavSidebar_1.default, null),
                React.createElement(Header, { direction: "row", justify: "between", pad: { horizontal: "medium" } },
                    React.createElement(Title, null, "Grommet standalone")),
                React.createElement(Box, { pad: "medium" },
                    React.createElement(Meter, { value: 40 })),
                React.createElement(Footer, { primary: true, appCentered: true, direction: "column", align: "center", pad: "small", colorIndex: "grey-1" },
                    React.createElement("p", null,
                        "Build your ideas with ",
                        React.createElement("a", { href: "http://grommet.io", target: "_blank" }, "Grommet"),
                        "!"))));
    };
    return ContentPage;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ContentPage;
