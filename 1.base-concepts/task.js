"use strict";

function solveEquation(a, b, c) {
    let d = b ** 2 - 4 * a * c;
    if (d < 0) {
        return [];
    } else if (d === 0) {
        return [-b / (2 * a)];
    } else {
     
       return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
    }
}

console.log(solveEquation(1, -3, 2))

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    percent = parseFloat(percent);
    contribution = parseFloat(contribution);
    amount = parseFloat(amount);
    countMonths = parseInt(countMonths);
    
    if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
        return false;
    }
    
    let monthlyRate = (percent / 100) / 12;
    let loanBody = amount - contribution;
    
    let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / ((1 + monthlyRate) ** countMonths - 1)));
    let totalPayment = (monthlyPayment * countMonths).toFixed(2);
    
    return Number(totalPayment);
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));