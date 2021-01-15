var isoddOrEven = require("./index");

console.log(true);

try {
    console.log(isoddOrEven("hello"));
} catch (error) {
    console.log(error);
    console.log("that wasnt a number??");
}

console.log(isoddOrEven("1"));
console.log(isoddOrEven("2"));
console.log(isoddOrEven("458398693486593683964"));