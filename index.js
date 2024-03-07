import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "node:fs";
import { url } from 'node:inspector';
//1. Use the inquirer npm package to get user input.
inquirer
    .prompt([
        {
            name: "url",
            type: 'input',
            message: "Enter your URL: "
        }])
    .then((answer) => {
        console.log(answer);

//2. Use the qr-image npm package to turn the user entered URL into a QR code image.
        var imq = qr.imageSync(`${answer.url}`, {type: 'png'});
        fs.writeFile("URL.png", imq, function(err){
            if (err) throw err;
            console.log("File saved successfully");
        });
        
//3. Create a txt file to save the user input using the native fs node module.       
        fs.writeFile("URL.txt", answer.url , function(err){
            if (err) throw err;
            console.log("File saved successfully");
        });
})


