var answer = "";
function caseInSwitch(val)
{
    switch(val)
    {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "none of the above";
            break;
    }
    return answer;
}

console.log(caseInSwitch(20));

var answer2 = "";
function constantSwitch(val)
{
    switch(val)
    {
        case 1:
        case 2:
        case 3:
            answer2 = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer2 = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer2 = "high";
            break;
        default:
            answer2 = "not applicable";
            break;
    }
    return answer2
}

constantSwitch(8);
console.log(constantSwitch(3))
