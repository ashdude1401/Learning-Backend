function Person(name){
    let age=0;
    return {
        getName:()=>name,
        getAge:()=>age,
        increaseAge:()=>++age
    }
}

const person = new Person("Alice");

console.log(person.age);
console.log(person.getAge);
console.log(person.getAge);

