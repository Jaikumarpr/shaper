import app from './app'
import dotenv from 'dotenv';
import { appendFile } from 'fs';
import Banner from './helpers/banner';

const banner = new Banner();
dotenv.config();

banner.name = process.env.APPNAME || '';
banner.greeting = `Welcome to shaper-cli v1.0.0`;
banner.subheading = 'Type "help" for more information and "exit" or ctrl + c to quit'
banner.show();

app.init();
