const assert = require("assert");
const { filterEvenNumbers,doubleNumbers,sumArray,createCounter,createMultiplier,fetchUserData,processData,Person,Rectangle,getFirstAndLast } = require("./script.js");

assert.deepStrictEqual(filterEvenNumbers([1,2,3,4]),[2,4]);
assert.deepStrictEqual(doubleNumbers([1,2,3]),[2,4,6]);
assert.strictEqual(sumArray([1,2,3]),6);

const counter=createCounter();
assert.strictEqual(counter(),0);
assert.strictEqual(counter(),1);

const mul=createMultiplier(3);
assert.strictEqual(mul(4),12);

(async()=>{
  const user=await fetchUserData();
  assert.deepStrictEqual(user,{id:1,name:"John Doe"});
  const processed=await processData(5);
  assert.strictEqual(processed,10);

  const p=new Person("Alice",30);
  assert.strictEqual(p.introduce(),"Hi, I'm Alice and I'm 30 years old.");

  const r=new Rectangle(5,4);
  assert.strictEqual(r.getArea(),20);

  assert.deepStrictEqual(getFirstAndLast([1,2,3,4]),{first:1,last:4});
})();
