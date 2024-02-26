#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation, {rainbow} from "chalk-animation";
const sleep = () => {
  return new Promise((res) => setTimeout(res, 2000));
};
async function welcome() {
  let rainbowtitle = chalkAnimation.rainbow("..Let's have some Fun.."); //start

  await sleep();
  rainbowtitle.stop();
}
await welcome();
async function startloop() {
  let again;
  do {
    await guessnumber();
    again = await inquirer.prompt({
      type: "list",
      name: "restart",
      choices: ["Yes", "No"],
      message: chalk.yellow("Do you want to Play Again?"),
    });
  } while (again.restart === "Yes");
  console.log(
    chalk.redBright.bold(`
    Thank you!
    Develop by: Muhammad Talha Tariq.
    PIAIC 234119 Badge: 52. Lahore, Pakistan.`)
  );
}
startloop();
async function guessnumber() {
  let systemgeneratednumber: number = Math.floor(Math.random() * 10);
  let tip;
  if (systemgeneratednumber % 2 == 0) {
    tip = "Tip: Number is Even";
  } else {
    tip = "Tip: Number is Odd";
  }

  let answer = await inquirer.prompt([
    {
      type: "input",
      name: "userguess",
      message:
        chalk.yellowBright(`Guess a Number between 0 and 10.`) +
        chalk.greenBright(`(${tip})`),
    },
  ]);
  console.log(
    chalk.blueBright.bold(`
    Your Guess ${answer.userguess} and System Generates ${systemgeneratednumber}
    `)
  );
  if (answer.userguess == systemgeneratednumber) {
    console.log(chalk.greenBright(`Congratulations! You Guess it Right!`));
  } else {
    console.log(chalk.red(`You Guess it Wrong. Better Luck! Next time...`));
  }
}
