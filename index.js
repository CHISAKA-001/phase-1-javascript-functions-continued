// code your solution here
//defines saturdayFun function declaration as specified

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

//defines mondayWork function expression as specified
const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

//defines wrapAdjective function according to the specification
let wrapAdjective = function(symbol = "*"){
return function(work = "special") {
    return`You are ${symbol}${work}${symbol}!`;
}

}