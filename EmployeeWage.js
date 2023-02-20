console.log("Welcome to day 38 employee wage program using javascript");
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalEmpWage = 0;
const MAX_WORKING_HRS = 100;
let totalWorkingDays = 0;
let empWageArray = new Array();
let i = 0;
function wageCalculation() {
while(totalEmpHrs <= MAX_WORKING_HRS && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    let empCheck = Math.floor(Math.random()*10)%3;
    switch (empCheck) {
        case IS_PART_TIME:
            console.log("Part time employee");
            empHrs = PART_TIME_HOURS;
            totalWorkingDays++;
            break;
        case IS_FULL_TIME:
            console.log("Full time employee");
            empHrs = FULL_TIME_HOURS;
            totalWorkingDays++;
            break;
        case IS_ABSENT:
            console.log("Employee is absent");
            empHrs = 0;
            break;        
    }
    let empWage = empHrs * WAGE_PER_HOUR;
    //uc6 adding daily wage to array
    empWageArray.push(empWage);
    totalEmpHrs += empHrs;
    totalEmpWage = totalEmpHrs * WAGE_PER_HOUR; 
    console.log("Employee Wage for the day "+i+" : "+empWageArray[i]);
    i++;
    }
    console.log("Total working days for the month is "+totalWorkingDays+", total working hour "+totalEmpHrs+" and total wage is "+totalEmpWage);
}
wageCalculation();
//UC7 A calculate total wage using Array forEach or reduce method
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empWageArray.forEach(sum);
console.log("UC7A - Total days : "+totalWorkingDays+" total hours : "+totalEmpHrs+" Emp wage : "+totEmpWage);
function totalWages(totalWage, dailyWage) {
    return totalWage+dailyWage;
}
console.log("UC7A - Emp wage with reduce method "+ empWageArray.reduce(totalWages, 0));
//UC7 B - show the day along with daily wage using Array map
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr+" = "+dailyWage
}
let mapDayWithWageArray = empWageArray.map(mapDayWithWage);
console.log("UC7B - daily wage map");
console.log(mapDayWithWageArray);
//UC7C - show days when full time wage of 160 were earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArray = mapDayWithWageArray.filter(fulltimeWage);
console.log("UC7C - daily wage filer using fulltime wage "+fullDayWageArray);
//UC7 D - find the first occurance when full time wgae was earned using find
console.log("UC7D - fist occurance of fulltime using find "+mapDayWithWageArray.find(fulltimeWage));
//UC7 E - check if every element of full time wage is truely holding full time wage
console.log("UC7E - check all elements have full time wage "+fullDayWageArray.every(fulltimeWage));
//UC7 F - check if there is any part time wage
function partTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7F - check if any part time wage "+mapDayWithWageArray.some(partTimeWage));
//UC7 G - find number of days the employee worked
function totalDaysWorked(numbOfDays, dailyWage) {
    if(dailyWage > 0)
        return numbOfDays+1;
    return numbOfDays;    
}
console.log("UC7G - number of days emp worked "+empWageArray.reduce(totalDaysWorked, 0));