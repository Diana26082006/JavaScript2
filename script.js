// 1. Методи масивів
function filterEvenNumbers(arr){ return arr.filter(n=>n%2===0); }
function doubleNumbers(arr){ return arr.map(n=>n*2); }
function sumArray(arr){ return arr.reduce((a,b)=>a+b,0); }

// 2. Закриття
function createCounter(){
  let count=0; 
  return ()=>count++;
}
function createMultiplier(multiplier){
  return (n)=>n*multiplier;
}

// 3. Async/Await та Promises
async function fetchUserData(){ 
  return new Promise(res=>setTimeout(()=>res({id:1,name:"John Doe"}),100));
}
async function processData(n){ 
  return new Promise(res=>setTimeout(()=>res(n*2),50));
}

// 4. Класи та ООП
class Person{
  constructor(name,age){this.name=name;this.age=age;}
  introduce(){ return `Hi, I'm ${this.name} and I'm ${this.age} years old.`; }
}
class Rectangle{
  constructor(width,height){this.width=width;this.height=height;}
  getArea(){return this.width*this.height;}
}

// 5. Деструктуризація та поширення
function getFirstAndLast(arr){
  const [first,...rest]=arr;
  const last=rest.pop()??first;
  return {first,last};
}

module.exports={filterEvenNumbers,doubleNumbers,sumArray,createCounter,createMultiplier,fetchUserData,processData,Person,Rectangle,getFirstAndLast};
