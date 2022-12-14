import http from 'https'
import readline from "readline";
import dotenv from "dotenv"

//REQUEST PUZZLE INPUT and REPLY
dotenv.config()
globalThis.http = http
function req(day) {
  //let result
  const options = {
      "method": "GET",
      "hostname": "adventofcode.com",
      "port": null,
      "path": "/2022/day/"+day+"/input",
      "headers": {
        "Cookie": process.env.COOKIE
      }
    };
    const req = http.request(options, function (res) {
      const chunks = [];
    
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
      res.on("end", function () {
        const body = Buffer.concat(chunks);
        
        const splitter = "----------------------------------------------------------------------"
        console.log("\n" + splitter);
        switch (day) {
          case 1:
            console.log(`Day ${day} answers are: ${day1(body.toString())}`);
            break;

          case 2:
            console.log(`Day ${day} answers are: ${day2(body.toString())}`);
            break;
          
          case 3:
            console.log(`Day ${day} answers are: ${day3(body.toString())}`);
            break;
          case 4:
            console.log(`Day ${day} answers are: ${day4(body.toString())}`);
            break;
          case 5:
            console.log(`Day ${day} answers are: ${day5(body.toString())}`);
            break;
          default:
            console.log("Not implemeted (yet)")
            break;
        }
        console.log(splitter + "\n");
        
        ask()
        return new Promise((resolve) => {
          resolve(body.toString())
        })
      });
    });
    req.end();
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
//DAYS
import day1 from "./src/days/day1.js";
import day2 from "./src/days/day2.js";
import day3 from "./src/days/day3.js";
import day4 from "./src/days/day4.js";
import day5 from './src/days/day5.js';
