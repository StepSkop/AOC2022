import fetch from "node-fetch";
import readline from "readline";
import dotenv from "dotenv"
import dayselect from './src/dayselect.js';

//REQUEST PUZZLE INPUT and REPLY
dotenv.config()
function req(day) {
  fetch("https://adventofcode.com/2022/day/"+day+"/input", {
  method: "GET",
  headers: {
    "Cookie": process.env.COOKIE
  }
  }).then(function(response) {
    if (response.ok) {
      return response.text();
    }
  }).then(function(responseText) {
    const splitter = "----------------------------------------------------------------------"
    console.log("\n" + splitter);
    //Get answer
    dayselect(day, responseText)
    console.log(splitter + "\n");
    ask()
  });
}

//QUESTION (get day number)
let day
const rl = readline.createInterface({
  input: process.stdin, output: process.stdout
});
var ask = function () {
  rl.question('Pick a day? ', (b) => {
    day = parseInt(b)
    req(day);
  })
}
ask()