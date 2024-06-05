#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    { name: "numberone",
        type: "number",
        message: (chalk.redBright)("Enter your first number")
    },
    {
        name: "numbertwo",
        type: "number",
        message: (chalk.redBright)("Enter your second number")
    },
    {
        name: "operator",
        type: "list",
        message: (chalk.green)("Enter your operator"),
        choices: ["+", "-", "*", "/"]
    }
]);
let result;
switch (answers.operator) {
    case "+":
        result = (answers.numberone + answers.numbertwo);
        break;
    case "-":
        result = (answers.numberone - answers.numbertwo);
        break;
    case "*":
        result = (answers.numberone * answers.numbertwo);
        break;
    case "/":
        result = (answers.numberone / answers.numbertwo);
        break;
    default:
        console.log("invalid operator");
}
console.log(chalk.yellow(`${answers.numberone} ${answers.operator} ${answers.numbertwo} = ${result}`));
