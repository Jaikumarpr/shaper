import readline from 'readline';

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
});

rl.on('SIGINT', () => {
    rl.question('Are you sure you want to exit? ', (answer: string) => {
        if (answer.match(/^y(es)?$/i)) rl.close();
    });
});

rl.on('close', () => {
    console.log('program exited');
    process.exit(0);
});

export default (cb: any) => {

    rl.prompt();
    rl.on('line', (input: string) => {
        cb(input.trim());
        rl.prompt();
    });
}