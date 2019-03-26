const validator = require("validator");
const chalk = require("chalk");

const notes = require("./notes");

console.log(validator.isEmail("yash@gmail.com"));

console.log(chalk.green("I am a green line "));
