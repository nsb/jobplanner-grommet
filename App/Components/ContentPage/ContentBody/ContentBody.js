"use strict";
const React = require("react");
const BaseComponent_1 = require("./../../BaseComponent");
const styles = require("./ContentBody.module.less");
;
class ContentBody extends BaseComponent_1.default {
    doRender() {
        return React.createElement("div", { className: styles.container },
            React.createElement("div", { className: styles.title }, this.props.title),
            React.createElement("div", { className: styles.summaryTitle }, "Summary"),
            React.createElement("div", { ref: "summaryRef", className: styles.summary }, this.props.summary),
            this.props.children);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ContentBody;
;
//# sourceMappingURL=ContentBody.js.map