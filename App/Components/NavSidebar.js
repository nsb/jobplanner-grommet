"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Sidebar = require("grommet/components/Sidebar");
var Header = require("grommet/components/Header");
var Title = require("grommet/components/Title");
var Button = require("grommet/components/Button");
var CloseIcon = require("grommet/components/icons/base/Close");
var Footer = require("grommet/components/Footer");
var NavSidebar = (function (_super) {
    __extends(NavSidebar, _super);
    function NavSidebar() {
        return _super.apply(this, arguments) || this;
    }
    NavSidebar.prototype.render = function () {
        return (React.createElement(Sidebar, { colorIndex: "neutral-1", fixed: true },
            React.createElement(Header, { size: "large", justify: "between", pad: { horizontal: "medium" } },
                React.createElement(Title, { a11yTitle: "Close Menu" },
                    React.createElement("span", null, "Jobplanner")),
                React.createElement(Button, { icon: React.createElement(CloseIcon, null), plain: true, a11yTitle: "Close Menu" })),
            React.createElement(Footer, { pad: { horizontal: "medium", vertical: "small" } })));
    };
    return NavSidebar;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavSidebar;
//# sourceMappingURL=NavSidebar.js.map