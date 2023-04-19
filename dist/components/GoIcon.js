"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var GoIcon = function (_a) {
    var hasFocus = _a.hasFocus, searchString = _a.searchString, handleGo = _a.handleGo;
    var handleGoButtonClick = function () {
        handleGo();
    };
    if (hasFocus || (!searchString || (searchString === null || searchString === void 0 ? void 0 : searchString.length) <= 0)) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(StyledClearIcon, __assign({ className: "clear-icon", onClick: handleGoButtonClick }, { children: "Ga" })));
};
exports.GoIcon = GoIcon;
var StyledClearIcon = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: ", ";\n  color: ", ";\n\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  margin: ", ";\n  color: ", ";\n\n  &:hover {\n    cursor: pointer;\n  }\n"])), function (props) { return props.theme.clearIconMargin; }, function (props) { return props.theme.goColor; });
var templateObject_1;
