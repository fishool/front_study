let user = {
    name: "john",
    surname: "Smith",
}

user.name = "Pete";
delete user.surname;
for (let userKey in user) {
    console.log(userKey);
}




console.log("================检查空对象===================")

let isEmpty = function(obj) {
    let isHasEle = false;
    for (let objKey in obj) {
        isHasEle = true;
        break;
    }
    return !isHasEle;
};

let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false


console.log("================对象属性求和 2===================")


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sumFunction = function (obj) {
    let sum = 0;
    for (let objKey in obj) {
        sum += obj[objKey];
    }
    return sum;
}

console.log(sumFunction(salaries))


console.log("================将数值属性值都乘以 2===================")
function multiplyNumeric(obj){
    for (let objKey in obj) {
        if (typeof obj[objKey] == "number") {
            obj[objKey] *= 2;
        }
    }
        return obj;
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(multiplyNumeric(menu));

