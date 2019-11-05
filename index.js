/*function multiply(num1,num2){
    return num1*num2;
}
let result=multiply(2,3);
console.log(result);*/

//ecma scriprt -5 introduced
/*let multiply=function(num1,num2){
    return(num1*num2);
}
let result=multiply(2,4);
console.log(result);*/


//es-6 introduced
/*let multiply=(num1,num2)=>{
    return num1*num2;
}
let result=multiply(2,3);
console.log(result);*/

//squaring a number
/*let square=(num)=>{
    return num*num;
}
console.log(square(5));*/

//callback
/*let getDetails=function(id,callback){
    console.log("inside the function");
    console.log("id:"+id);
    callback();

}
getDetails(1,function(){
    console.log("finished");

})*/

/*let getDetails=(id,callback)=>{
    console.log("inside the function");
    console.log("id:"+id);
    callback({id:id,name:"meera"});
}
getDetails(1,(person)=>{
    console.log(person);
    console.log("finished");
})*/

//to change js to asynch.
/*console.log("before");
setTimeout(()=>{
    console.log("inside");

},20);
console.log("after");*/

/*function getUser(id){

    setTimeout(() =>{
        return({   id:id,name:"meera"});
    },2000);
}
console.log("before");
const user=getUser(1);
console.log(user);
console.log("after");*/

//use callback for to avoid the error and get print the data
/*function getUser(id,callback){

    setTimeout(() =>{
        callback({id:id,name:"meera"});
    },200);
}
console.log("before");
getUser(1,function(user){console.log(user);});
/*const user=getUser(1);
console.log(user);*/
//console.log("after");

/*var person=new object;
person.setValues=function(n,a){
    this.name=a;
    this.age=a;
};
person.getValues=function(){
    console.log("name is:"+this.name);
    console.log("age is:"+this.age);
};
person.setValues("re",23);
person.getValues();*/

//using constructor
/*function person(first_name,last_name){
this.first_name=first_name;
this.last_name=last_name;

}
person.prototype.getDetails=function(){
    console.log("the name of the person is "+this.first_name)
}
let person1=new person("mukil","akhil");
let person2=new person("rahul","athul");

person1.getDetails();
person2.getDetails();*/

//similar methode to crete mltipe objects
/*const coder={
    isStudying:false,
    printintroduction:function(){
        console.log(`my name is${this.name}.am i studying ?:${this.isStudying} .`)
    }
}
const m1=object.create(coder);
m1.name="mukil";
m1.isStudying="true";
m1.printintroduction();*/

//object creation using class
/*class vehicle{
    constructor(name,maker,engine){
        this.name=name;
        this.maker=maker;
        this.engine=engine;
    }
    getDetails(){
        return(`this nme of the bike is${this.name}.`)
    }
}
let bike1=new vehicle("hayabusa","suzuki","1340cc");
let bike2=new vehicle("ninja","kawa","998");
console.log(bike1.name);*/

/*class Person{
    constructor(name){
        this.name=name;
    }
}
class student extends person{
    constructor(name,id){
        super(name);
        this.id=id;
    }
    tostring(){
        return(`name of person:${this.name},student id:${this.id}`);
    }
}
let student1=new student("mukil",22);
console.log(student1.tostring());*/

/* for giving input 
var name = window.prompt("Enter your name: ");
alert("Your name is " + name);
*/
