function main() : void {
    const figlet = require("figlet");
    const hdg = figlet.textSync("01 hello world", {
        font: "ANSI Shadow",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 100,
        whitespaceBreak: true,
    });
    console.log(hdg);

    var readline = require('readline');

    var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question("Please enter your name:\n\n", function(answer: string) {
        console.log("\nGood day to you, ", answer);
        rl.close();
    });

}

main();