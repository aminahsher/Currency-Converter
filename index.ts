#! /usr/bin/env node

import inquirer from "inquirer";

let loop = (true);

interface userInput{
    currencyInput: string,
    amountInput: number,
    currencyOutput:string
}

while(loop) {

    const userInput:userInput = await inquirer.prompt([
        {

        type: "list",
        name: "currencyInput",
        choices: ["Pakistani Ruppee", "US Dollar", "Saudi Riyal"],
        message: "select your input currency",

    },
    {
        type: "number",
        name: "amountInput",
        message: "enter the amount you want to convert"
    },
    {
        type: "list",
        name: "currencyOutput",
        choices: ["Pakistani Ruppee", "US Dollar", "Saudi Riyal"],
        message: "select your output currency"

    }
]);

const input = userInput.currencyInput;
const output = userInput.currencyOutput;
const amount = userInput.amountInput;

if(input === "Pakistani Ruppee"){
    if(output ==="US Dollar"){
        console.log(`The ${amount} Pakistani Ruppee is equal to ${amount/299} US Dollar`)
    }else if(output ==="Saudi Riyal"){
        console.log(`The ${amount} Pakistani Ruppee is equal to ${amount/80} Saudi Riyal`)
    }

}else if(input === "US Dollar"){
    if(output === "Pakistani Ruppee"){
        console.log(`The ${amount} US Dollar is equal to ${amount * 299} Pakistani Ruppee`)
    }else if(output === "Saudi Riyal"){
        console.log(`The ${amount} US Dollar is equal to ${amount * 4} Saudi Riyal`)
    }

}else if(input ==="Saudi Riyal"){
    if(output=== "Pakistani Ruppee"){
        console.log(`The ${amount} Saudi Riyal is equal to ${amount *80} Pakistani Ruppee`)
    }else if(output === "US Dollar"){
        console.log(`The ${amount} Saudi Riyal is equal to ${amount /4} US Dollar`)
    }
}
    const calculatAgain = await inquirer.prompt([{
        type: "confirm",
        name: "calculateMore",
        message: "Do you want more conversions?",
        default: false
    }]);

    if(!calculatAgain.calculateMore){
        loop = false;
    }

}