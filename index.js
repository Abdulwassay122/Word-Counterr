#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Sentence to count the words:"
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`The word count is: ${words.length}`);
