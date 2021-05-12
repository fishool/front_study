/**
 * 构造器和操作符 "new"
 */

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("shichao");
console.log(user);



function Calculator(){
    this.firstValue;
    this.secondValue;
    this.read = function () {
        this.firstValue = 1;
        this.secondValue = 2;
    };

    this.sum = function () {
        return this.firstValue + this.secondValue;
    };
    this.mul = function () {
        return this.firstValue * this.secondValue;
    }


}


let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );
