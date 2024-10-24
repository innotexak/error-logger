"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const type_1 = require("./type");
const url = 'http://localhost:6060/api/v1/log/errors';
class CInstanceErrorLogger {
    constructor(secretKey) {
        if (!secretKey) {
            throw new Error('A secret key is required to initialize the error logger');
        }
        this.secretKey = secretKey;
        this.apiUrl = url;
    }
    // Method to set the error severity to 'low'
    low(errorData) {
        return this.logErrorWithSeverity(type_1.ISeverity.Low, errorData);
    }
    // Method to set the error severity to 'medium'
    medium(errorData) {
        return this.logErrorWithSeverity(type_1.ISeverity.Medium, errorData);
    }
    // Method to set the error severity to 'high'
    high(errorData) {
        return this.logErrorWithSeverity(type_1.ISeverity.High, errorData);
    }
    // Generic method to log the error with a specified severity
    logErrorWithSeverity(severity, errorData) {
        return __awaiter(this, void 0, void 0, function* () {
            // Add severity to the error data
            errorData.severity = severity;
            try {
                const response = yield axios_1.default.post(this.apiUrl, errorData, { headers: {
                        'Content-Type': 'application/json',
                        "x-secret-key": this.secretKey
                    } });
                console.log(`Error logged successfully with severity ${severity}: ${response.data.id}`);
            }
            catch (error) {
                console.error(`Error logging failed:`, error);
            }
        });
    }
}
exports.default = CInstanceErrorLogger;
