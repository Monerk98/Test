//=========== Exercise 1 ===============

const obj1 = {
    name: 'test',
    name: 'test1'
  };
  
  const obj2 = {
    name: 'test',
    name: 'test1'
  };
  
  const obj3 = {
    name: 'test', age: 10
  };
  
  const deepEqual = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
  };
  
  console.log(deepEqual(obj1, obj2));
  console.log(deepEqual(obj1, obj3));
  console.log(deepEqual(obj3, obj2));
//   console.log(deepEqual(obj2, obj1));



//================ Exercise 2 ============

function result (){
const chunkArray = [1,2,3,4,5,6,7,8]; 

const size = 3;

const array = [];

for (let i = 0; i <chunkArray.length; i += size) {
    array.push(chunkArray.slice(i, i + size));
}

// console.log(sliced_array)
return console.log(...array)
}

result ()


// Exercise 3 ()

// ============ Exercise 4 =========
let firstUnique = [1,2,3,2,1,3,4,5,5]
const unique = firstUnique.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
console.log(Number(unique))




// ============ Exercise 5 =========
let arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];
let br = arr.flat(3)
const obj = {...br}
console.log(obj)

// ============ Exercise 6 =========


// ============ Exercise 7 =========




// ============= Exercise 9 ============
let str = 'test task'

console.log(
    str.split(/\s+/).map(test => test[0].toUpperCase() + test.substring(1)).join(' ')
    );

// ============= Exercise 10 ============
function removeDups(s) {
    let charArray = s.split("");
      for (let i = 0; i < charArray.length; i++) {
        for (let j = i + 1; j < charArray.length; j++)
          if (charArray[i] == charArray[j]) {
            charArray.splice(j, 1);
            j--;
          }
      }
      return charArray.join("");
    }
    console.log(removeDups("Int32,Int32,Int32,InInt32,Int32,Double,Double,Double"));