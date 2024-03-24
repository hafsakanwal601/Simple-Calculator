#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const result = await inquirer.prompt([
    {
        message: chalk.white.bgBlue("Enter first number"),
        type: "number",
        name: "firstNumber",
    },
    {
        message: chalk.red.bgBlack("Enter second number"),
        type: "number",
        name: "secondNumber",
    },
    {
        message: chalk.green("select one of the operator to perform operation"),
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Exponentation",
            "modulus",
        ],
    },
]);
// condition
if (result.operator === "Addition") {
    console.log(chalk.red.bgBlack("your value is"), result.firstNumber + result.secondNumber);
}
else if (result.operator === "Subtraction") {
    console.log(chalk.yellow.bgMagenta("your value is"), result.firstNumber - result.secondNumber);
}
else if (result.operator === "Multiplication") {
    console.log(chalk.red.bgBlue("your value is"), result.firstNumber * result.secondNumber);
}
else if (result.operator === "Division") {
    console.log(chalk.yellow.bgGreen("your value is"), result.firstNumber / result.secondNumber);
}
else if (result.operator === "Exponentation") {
    console.log(chalk.red.bgGray("your value is"), result.firstNumber ** result.secondNumber);
}
else if (result.operator === "Modulus") {
    console.log(chalk.black.bgYellow("your value is"), result.firstNumber % result.secondNumber);
}
else {
    console.log(chalk.red.bgBlue("select your valid opeater"));
}
