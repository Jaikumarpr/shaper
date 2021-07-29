"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const banner_1 = __importDefault(require("./helpers/banner"));
const banner = new banner_1.default();
dotenv_1.default.config();
banner.name = process.env.APPNAME || '';
banner.greeting = `Welcome to shaper-cli v1.0.0`;
banner.subheading = 'Type "help" for more information and "exit" or ctrl + c to quit';
banner.show();
app_1.default.init();
