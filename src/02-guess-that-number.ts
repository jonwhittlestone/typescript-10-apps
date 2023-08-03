
function main_02(): void {

    const figlet = require("figlet");
    const readline = require('readline')

    type GuessedNumber = string

    const hdg = figlet.textSync("02 Guess Game", {
        font: "ANSI Shadow",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 100,
        whitespaceBreak: true,
    });
    console.log(hdg);

    var randomNumber = Math.round(Math.random() * 10);
    var lives = 5;

    // Before using the readline object
    // An interface must be defined as object
    // literal, where key-value pairs are
    // the readable and writeable steam
    var terminal = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })


    terminal.setPrompt('Guess the number! (0-10): ');

    terminal.prompt();
    terminal.on('line', (answer: GuessedNumber) => {

        var answerNum = +answer;

        if (answerNum > randomNumber)
        {
            console.log('Too high!');
            console.log('You have '+lives+' lives left');
        }

        else if (answerNum < randomNumber)
        {
            console.log('Too low!');
            console.log('You have '+lives+' lives left');
        }

        else if (answerNum === randomNumber)
        {
            console.log('W I N N E R ! ! !');
            console.log('You lost only '+ (6-lives) + ' lives');
            process.exit(0);
        }

        else
        {
            console.log("That wasn't a number I recognise");
            console.log('You have '+lives+' lives');
        }

        lives--;
        if (lives == 0)
        {
            console.log('G A M E  O V E R ! ! !');
            process.exit(0);
        }

        terminal.prompt();
    });

    terminal.on('close', function()
    {
        console.log('C H I C K E N :P')
        process.exit(1);
    });
}

main_02();