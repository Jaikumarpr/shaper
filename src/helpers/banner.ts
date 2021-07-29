import chalk from "chalk";
import figlet from "figlet";


export default class Banner {
    name: string;
    greeting: string;
    subheading: string;
    constructor() {
        this.name = '';
        this.greeting = '';
        this.subheading = '';
    }

    show() {
        console.log(
            chalk.yellow(
                figlet.textSync(this.name, { horizontalLayout: 'full' })
            )
        )
        console.log()
        console.log(this.greeting);
        console.log(`${this.subheading} \n`);
    }
}
