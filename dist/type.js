"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISeverity = exports.IPlatform = exports.IEnvironment = exports.IErrorTypeEnum = void 0;
var IErrorTypeEnum;
(function (IErrorTypeEnum) {
    IErrorTypeEnum["TypeError"] = "typeError";
    IErrorTypeEnum["ReferenceError"] = "referenceError";
    IErrorTypeEnum["SyntaxError"] = "syntaxError";
    IErrorTypeEnum["CustomError"] = "customError";
    IErrorTypeEnum["Other"] = "other";
})(IErrorTypeEnum || (exports.IErrorTypeEnum = IErrorTypeEnum = {}));
var IEnvironment;
(function (IEnvironment) {
    IEnvironment["Development"] = "development";
    IEnvironment["Production"] = "production";
    IEnvironment["Staging"] = "staging";
})(IEnvironment || (exports.IEnvironment = IEnvironment = {}));
var IPlatform;
(function (IPlatform) {
    IPlatform["Web"] = "web";
    IPlatform["Mobile"] = "mobile";
    IPlatform["Desktop"] = "desktop";
})(IPlatform || (exports.IPlatform = IPlatform = {}));
var ISeverity;
(function (ISeverity) {
    ISeverity["Low"] = "low";
    ISeverity["Medium"] = "medium";
    ISeverity["High"] = "high";
})(ISeverity || (exports.ISeverity = ISeverity = {}));
