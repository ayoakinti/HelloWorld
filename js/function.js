function littleGame (Noun, Verb, Adverb, Adjective)
{
    var result = "";

    result += "The big " + Adjective + " " + Noun + " " + Verb + " to the store " + Adverb;

    return result;
}

console.log(littleGame("dog", "ran", "quickly", "stupid"));

function callAysname ()
{
    console.log("Ay is a fine boy!!!");
}

callAysname ();

function addition(a, b)
{
    console.log(a + b);
}

addition (10, 20);

function nextInLine(arr, item)
{
    arr.push(item);
    return arr.shift(); 
}

var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function abTest(a,b)
{
    if (a < 0 || b < 0)
    {
        return undefined;
    }
    
    return Math.pow(Math.sqrt(a) + Math.sqrt(b), 4);
}

console.log("abTest: " + abTest(2,2));