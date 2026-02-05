var numar = 5;
let string = 'Victor';
const bool = true;

function tip(x) {
    switch (typeof x) {
        case "number":
            return "Number";
        case "bigint":
            return "Bigint";
        case "string":
            return "String";
        case "boolean":
            return "Boolean";
        case "null":
            return "Null";
        case "undefined":
            return "Undefined";
        default:
            break;
    }
}

console.log(tip("aleluia"));

function strInNum(s) {
    let x;
    while (s.length !== 0) {
        x = x * 10 + (s[s.length - 1]);
        s = s.slice(0, s.length);
    }
    console.log(x);
}

// console.log(strInNum("123"));