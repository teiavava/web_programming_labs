const obj1 = {a:2};
const obj2 = obj1; // copiere prin referinta
 
obj2.a = 5;
console.log(obj1); // {a:5} -> valoarea s-a modificat si in obiectul original
 
const obj3 = Object.assign({}, obj1); // copiere prin valoare
 
obj3.a = 10;
console.log(obj1); // {a:5} -> valoarea nu s-a modificat
 
const obj4 = {...obj1} // copiere prin valoare (modern, folosind spread operator, ES6)
 
obj4.a = 9772;
console.log(obj1); // {a:5} -> valoarea nu s-a modificat

const arr = [1, 2, 3, 4];
console.log(arr.map(x => x*2)); //2 4 6 8
 
const obj = { a:2, b:3, c: (x, y) => console.log(x + y)}
console.log(obj.c(obj.a, obj['b'])); //5
 
const func1 = (x, cb) => cb(x);
const func2 = y => console.log(y);
 
func1(3, func2); //3

const getAgePromise = new Promise((resolve, reject) => {
    resolve(25);
});
 
getAgePromise.then((age) => console.log(`My age is ${age}`));

const getAgeAsync = () => new Promise((resolve, reject) => {
    resolve(25);
});
 
// echivalent cu const getAgeAsync = async () => 25;
 
const main = async () => {
    const age = await getAgeAsync();
 
    console.log(`My age is ${age}`);
}
 
main();

