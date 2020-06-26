class Users {
    constructor( name , age){
        this.name = name;
        this.age = age;
    }
    login(){
        console.log(`${this.name} is login`);
        return this;
    }
    logout(){
        console.log(`${this.name} is logout`);
        return this
    }
}
let userONE = new Users('bobo' , 45);

class Catch extends Users{
    admin(){
        console.log(`${this.name} is admin`);
        return this;
    }
}
let admin = new Catch('fefo ' , 44);
console.log(admin)
