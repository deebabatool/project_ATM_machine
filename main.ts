#! /usr/bin/env node
import inquirer from "inquirer";

let Balance = 100000;
let ATM_MACHINE = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter your pin_code",
        
    },

    {
        name: "num2",
        type: "list",
        message: "select One?",
        choices: ["cash withdrawal", "Fast cash"],
    },
     
    {
        name: "num3",
        type: "number",
        message: "Select Amount?",
    },

    {
        name: "num4",
        type: "list",
        message: "Take a receipt",
        choices : ["Yes" ,  "No"],
    },
]);
if (ATM_MACHINE.num2 == "cash withdrawal" && ATM_MACHINE.num3 <= Balance) {
    console.log("Congrats");
}

else{
    console.log("Invalid numb!");
}