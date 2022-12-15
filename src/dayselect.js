import day1 from "./days/day1.js";
import day2 from "./days/day2.js";
import day3 from "./days/day3.js";
import day4 from "./days/day4.js";
import day5 from './days/day5.js';
import day6 from './days/day6.js'

export default function dayselect(day, res) {
    let handler = {
        1: day1,
        2: day2,
        3: day3,
        4: day4,
        5: day5,
        6: day6
    }
    function callFunction(day, res) {
        const func = handler[day];
        if (func) {
            console.log(`Day ${day} answers are: ${func(res)}`);
        } else {
          console.log("Not implemented");
        }
    }
    callFunction(day, res)
}