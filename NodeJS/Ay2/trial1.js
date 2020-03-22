function sqrt(x) {
    return Math.sqrt(x);
}

function add(a,b) {
    return `${a + b}`;
}

function addName(array, newName) {
    return new Promise((resolve, reject) => {
        array.push(newName);

        const error = false;
        if(!error){
            resolve();
        }else {
            reject();
        }
    });
}

function lengthArray(array) {
    return array.length;
}

const names = ["Ayomide", "Jessica", "Oluwatobi", "Akinlolu"];

// console.log(lengthArray(names));
addName(names, "Bola").then(() => console.log(names));

// console.log(lengthArray(names));

console.log(add(2,3));

module.exports  = {
    add: add,
    sqrt: sqrt,
    addName: addName,
    lengthArray: lengthArray
};