var testObj =
{
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "canvas"
};

var hatName = testObj.hat;
var shirtName = testObj.shirt;

var testObj2 =
{
    "the hat": "ballcap",
    "the shirt": "jersey",
    "the shoes": "canvas"
};

var hatName2 = testObj2["the hat"];
delete testObj2["the shirt"];
testObj2["my shoesize"] = "forty";
testObj2["the canvas"] = "nike airmax";
console.log(testObj2);

function synonyms(val)
{
    var lookup =
    {
        "hit": "slap",
        "run": "walk fast",
        "longthroat": "steal"
    };

    var result = lookup[val];

    return result;
}

console.log(synonyms("hit"));

function checkObj(checkProp)
{
    if (testObj2.hasOwnProperty(checkProp))
    {
        return testObj2[checkProp];
    } 
    else
    {
        return "not found";
    }
}

console.log(checkObj("the hat"));