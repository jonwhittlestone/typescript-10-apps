
var readline = require('readline');
var util = require('util');

function heading(heading: string): void {
    const figlet = require("figlet");
    const hdg = figlet.textSync(heading, {
        font: "ANSI Shadow",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 100,
        whitespaceBreak: true,
    });
    console.log(hdg);
}

heading("03 Birthday");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var question = util.promisify(rl.question).bind(rl);


async function ask() {

    type QuestionAndAnswer = [string, number?]
    let questions: QuestionAndAnswer[] = [
        ["What year were you born [YYYY]"],
        ["What month were you born [MM]"],
        ["What day were you born [DD]"]
    ];
    for(var i = 0;i<questions.length;i++){
        try {
            questions[i][1] = parseInt(await question(`${questions[i][0]}\n`));
        } catch (err) {
            console.error('Question rejected', err);
        }
    }
    // const y_m_d = questions.map((q) => q[1]);
    console.log("\nThese were your answers:");
    console.table(questions)
    console.log("\nIt looks like you were born on:");
    if (typeof questions[0][1] === 'number' && typeof questions[1][1] === 'number' && typeof questions[2][1] === 'number') {
        console.log(`\n${new Date(
            questions[0][1],
            questions[1][1]-1,
            questions[2][1]
        )}`)
    }
    rl.close();
}

ask();