// string
let str: string = "Namaste";
console.log(str); // Output: Namaste
// number
let num: number = 2;
console.log(num);
// boolean
let bool: boolean = true;
console.log(bool);
// array
let arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);
// object
let obj: object = { name: 'John', age: 30 };
console.log(obj);
// function
let myFunction: Function = (a: number, b: number): number => { return a + b };
console.log(myFunction(2, 3));
// union type
let unionType: number | string = "Hello";
console.log(unionType);
// tuple
let tuple: [number, string] = [1, "Hello"];
console.log(tuple);
// enum
enum Color { Red, Green, Blue };
let color: Color = Color.Green;
console.log(color);
// any
let anyVar: any = "Hello";
anyVar = 10;
console.log(anyVar);
// void
function myVoidFunction(): void {
    console.log("Hello, I am void");
}
myVoidFunction();
// never
function infiniteLoop(): never {
    while (true) {
        console.log("Infinite Loop");
    }
}
//  infiniteLoop();
