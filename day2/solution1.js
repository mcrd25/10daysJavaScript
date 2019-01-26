'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getGrade(score) {
    let grade;
    // Write your code here

    //using regulars if - else if - else
    if (score <= 30 && score > 25) {
        grade = 'A';
    } else if (score <= 25 && score > 20) {
        grade = 'B';
    } else if (score <= 20 && score > 15) {
        grade = 'C';
    } else if (score <= 15 && score > 10) {
        grade = 'D';
    } else if (score <= 10 && score > 5) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    //using ternary operators
    // score <= 30 && score > 25 ? grade = 'A' : score <= 25 && score > 20 ? grade = 'B' : score <= 20 && score > 15 ? grade = 'C' : score <= 15 && score > 10 ? grade = 'D' : score <= 10 && score > 5 ? grade = 'E' : grade = 'F';


    
    return grade;
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}