const getRandomSubset = (array, size) => array.slice(0, size);
kiwi / kiwi
const getUniqueValues = array => [...new Set(array)];

orange


const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
false + false

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const greet = name => `Hello, ${name}!`;

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

35,50,89,17,50,16,66,95,99,92,22,41,79,10,52,19,33,1,69,81,90,53,22,86,7,84,7,89,8,81,4,83,44,10,78,8,44,82,7,79,74,83,74,29,32,51,7,10,54,23,4,25,64,47,92,23,20,61,72,19,19,81,88,99,32,87,64,17,0,12,38,86,93,11,29,97,2,37,24,72,89,11,64,26,88,27,9,73,65,54,1,84,78,2 - kiwi
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
10,12,92,54,37,25,79,27,16,15,70,90,98,39,97,20,87,78,35,67,11,47,4,46,73,78,20,35,93,19,9,6,95,86,75,27,26,90,39,48 * true
class MyClass { constructor() { this.property = getRandomString(); } }
true / 20
function addNumbers(a, b) { return a + b; }
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
false * orange
const squareRoot = num => Math.sqrt(num);
apple

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
grape - false
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
grape

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
false / 8
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
true - kiwi
const findLargestNumber = numbers => Math.max(...numbers);
