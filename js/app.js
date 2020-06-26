let obj ={
    name : "ashar",
    age : 15
}

function User (name , age ){
    this.name = name;
    this.age = age;
}
User.prototype.callength = function(){
    let length = this.age * 100 ;
    return length;
}

function Coch (...args){
    User.apply(this , args);
    this.role = `this is the couch `
}
Coch.prototype = Object.create(User.prototype)

let userOne = new User("ashar" ,23);
let adminUser = new Coch('mem' , 45)
userOne.callength();
console.log(adminUser);