/*
 IF year IS divisible by 4 AND IS NOT divisible by 100 => TRUE
 ELSEIF year IS divisible by 4 AND IS divisible by 100 AND IS divisible by 400 => TRUE
 ELSE => FALSE
 ENDIF
*/

const leapYears = function(year) {
    const isDivisibleByFour = year % 4 === 0;
    const isDivisibleByAHundred = year % 100 === 0;
    const isDivisibleByFourHundred = year % 400 === 0;
    
    if (isDivisibleByFour && (!isDivisibleByAHundred || isDivisibleByFourHundred)) return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
