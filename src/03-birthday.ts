
var readline = require('readline');
var util = require('util');
const moment = require('moment'); // Import the moment.js library

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

function getWeeksUntilBirthday(targetDate: Date): number {
  const currentDate = new Date();
  const targetBirthday = new Date(targetDate);
  targetBirthday.setFullYear(currentDate.getFullYear());

  if (targetBirthday < currentDate) {
    targetBirthday.setFullYear(currentDate.getFullYear() + 1);
  }

  const timeDiff = targetBirthday.getTime() - currentDate.getTime();
  const weeksRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24 * 7));
  return weeksRemaining;
}

async function ask() {

    type QuestionAndAnswer = [string, number?]
    let questions: QuestionAndAnswer[] = [
        ["What year were you born [YYYY]"],
        ["What month were you born [MM]"],
        ["What day were you born [DD]"]
    ];

    type AskInstance = {
        question: string;
        answer: number;

    }

    for(var i = 0;i<questions.length;i++){
        try {
            questions[i][1] = parseInt(await question(`${questions[i][0]}\n`));
        } catch (err) {
            console.error('Question rejected', err);
        }
    }
    console.log("\nThese were your answers:");
    console.table(questions)
    if (typeof questions[0][1] === 'number' && 
        typeof questions[1][1] === 'number' &&
        typeof questions[2][1] === 'number'
    ) {
        const currentDate = moment();
        const currentWeek = currentDate.isoWeek();
        console.log(`\nThe current week number: ${currentWeek}`);
        const dt = new Date(questions[0][1], questions[1][1] - 1, questions[2][1]);
        console.log(`\nIt looks like you were born on: ${dt}`);
       const weeksUntilBirthday = getWeeksUntilBirthday(dt);
       console.log(`Your birthday is in ${weeksUntilBirthday} weeks `);
    }
    rl.close();
}

ask();