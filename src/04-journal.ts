
var readline = require('readline');
var util = require('util');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

async function main() {
    heading('Journal.')
    run_event_loop()


    console.log('');
    console.log('');
}


function heading(heading: string): void {
    const figlet = require("figlet");
    const hdg = figlet.textSync(heading, {
        font: "ANSI Shadow",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 100,
        whitespaceBreak: true,
    });
    console.log("");
    console.log(hdg);
    console.log("");
}

function run_event_loop() {
    console.log("What do you want to do with your journal?")
}

main()