type person = {
    name: string,
    age: number,
    city: string
}

const people: person =
    { name: 'John', age: 30, city: 'New York' };

console.log(people.age);

function addOne(num:number){
    return num+1;
}

console.log(addOne(5));