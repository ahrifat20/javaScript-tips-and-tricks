// Title: Javascript pro tips,
// Description: JavaScript Tips and Tricks and JavaScript Job Interview Questions,
// Author: Akbor Hossain Rifat.


// -------Falsy value------
// '',0,null,NaN,undefined,false

// **Remove falsy values from array*/
const mixedArray = ['rifat',0,'rakib',23,null,'false',false,'undefiend',undefined,'',NaN,'Jihad'];

//passing Boolean to array.filter() will remove falsy values from array.
//Boolean(expression) in JS returns true/false.
const removeFalsyValue = mixedArray.filter(Boolean);
console.log(removeFalsyValue);//[ 'rifat', 'rakib', 23, 'false', 'undefiend', 'Jihad' ]

//**Convert any value to boolean*/

//Using !! in front of any value.
const booleanValue = !!"string,numbner or any";
console.log(booleanValue);//true

//**Resizing any array*/

//we can use arry's length property.
const resizeArray = ['rifat', 'Jihad', 'sakib', 'rakib'];
resizeArray.length = 3;
console.log(resizeArray);//[ 'rifat', 'Jihad', 'sakib' ]

//**How to Flatten multi-dimensional array */

const flatArrray = ['rifat', ['Jihad', 'Sakib'], 'Liza', 'Naima'];
//we can use array.flat() method to flatten one lavel array.
console.log(flatArrray.flat());//[ 'rifat', 'Jihad', 'Sakib', 'Liza', 'Naima' ]
//If we want to flatten mmulti lavel array, we can pass "Infinity" parameter to array.flat() funcion
const multiFlatArrray = ['rifat', ['Jihad',['Abir','Nirob'], 'Sakib'], 'Liza', 'Naima']; 
console.log(multiFlatArrray.flat(Infinity));//['rifat', 'Jihad','Abir',  'Nirob','Sakib', 'Liza','Naima']

/**How to swap values? */
let array = [1,2,3,4,5];
//temp vatiable
const temp = array[0];
array[0] = array[4];
array[4] = temp;
console.log(array);//[ 5, 2, 3, 4, 1 ]
//one line swape using array destructuring
let array1 = [1,2,3,4,5];
[array1[0],array1[4]] = [array1[4],array1[0]];
console.log(array1);//[ 5, 2, 3, 4, 1 ]

let a = 1;
let b = 2;
//online swape values using math
b = a + (a = b) - b;
console.log(a,b);//2,1

/**How to copy things to clipboard? */
//**How to destructure objects by aliases? */

/**How to get value as data type? */
// valueAsNumber

/**How to remove duplicates from an array? */
const dupArray = [1,1,2,2,3,4,5,5,6,7,6];
console.log([...new Set(array)].sort());//[ 1, 2, 3, 4, 5 ]

/**How to compare two arrays by values? */
const compare = (arr1,arr2) => {
    return arr1.length === arr2.length && arr1.every((v,i) => v === arr2[i]);
};
console.log(compare([1,2],[1,2]));//true

/**How to shuffle an array? */
const suff = [1,2,3,4,5,6,7,8,9,10];
console.log(suff.sort(() => Math.random() - 0.5));

/**How to use Comma Operator */
let x = 1;
x = (x++, x+3);
console.log(x);//5

let z = (3,45);
console.log(z);//45

