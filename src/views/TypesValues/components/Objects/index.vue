<template>
    <h2>
        Objects
    </h2>

    <p>
        The <code>object</code> is special. In comparing with <i>primitive</i> types we have covered before,
        <code>object</code> is <i>non-primitive</i> data type.
        The <i>primitive</i> data type - is a data type that refer to a single value.
        (e.g. <code>number</code> can have only a single integer value,
        <code>string</code> can have only a single string value).
    </p>

    <code-snippet
        code="
let a = 1;
        "
    />

    <p>
        In the example above, variable <code>a</code> refers to a single value in memory.
        If we want to change the value of <code>a</code>, we would have to assign a new value to a.
    </p>

    <code-snippet
        code="
let a = 1;
a++ // a is 2, and it holds already another value in memory - 2;
a = 42 // a is 42
        "
    />

    <p>
        <i>
            Primitive data types are immutable.
        </i>
        When we create a variable, it reserves a space for itself in the memory.
        The variable <code>a</code> has space in memory which holds its value.
        When we try to change the value of <code>a</code> by assigning another value like a = 42,
        it doesn't alter the value of the original <code>a</code>, it just assign a new value to <code>a</code>
        and "take" another space in memory.
    </p>

    <code-snippet
        code="
// strings are primitive values too, so thay cannot be altered;
let str = 'javascript';
str[0] = 'J';
str; // 'javascript'
        "
    />

    <p>
        But the <i>non-primitive</i> data type are mutable. More of that, they don't hold the value itself, they just
        hold <i>reference</i> (or address) of value.
        In JavaScript, <code>object</code> is <i>non-primitive</i> data type, which used to
        store keyed collections of various data and more complex entities.
        Whenever we refer to an object, we refer to an address in memory which contains the key-value pair.
    </p>

    <p>
        To create <code>object</code> we can use <code>{}</code> - curly braces.
        Than we can define zero or more keys (aka property names) and, after semicolon, property values
        Property value can be any JavaScript type:
        <code>number</code>
        <code>bigint</code>
        <code>string</code>
        <code>null</code>
        <code>undefined</code>
        <code>boolean</code>
        <code>symbol</code>
        <code>object</code>
        But, property keys can be only of type <code>strings</code> or <code>symbol</code>
    </p>

    <code-snippet
        code="
// valid js
const obj = {
    name: '2Pac',
};

obj.name = 'Eminem';

console.log(obj.name) // prints 'Eminem'
        "
    />

    <p>
        To understand, what means "storing by reference", consider:
    </p>

    <code-snippet
        code="
// valid js
const obj1 = {
    name: 'Frodo',
};

// now, obj2 holds reference to the same object
const obj2 = obj1;

obj2.name = 'Sam';

console.log(obj1.name) // prints 'Sam'
console.log(obj2.name) // also prints 'Sam'
        "
    />
    
    <p>
        The <code>object</code>s are comparing by reference, not by value;
    </p>

    <code-snippet
        code="
// valid js
const data1 = {
    country: 'Ukraine',
};

const data2 = data1;

const data3 = {
    country: 'Ukraine',
};

console.log(data1 === data2); // true
console.log(data1 === data3); // false
        "
    />

    <p>
        In contrary to <code>object</code>, all primitive values are compering by value:
    </p>

    <code-snippet
        code="
// valid js
const str1 = 'what';
const str2 = str1;
const str3 = 'what';

console.log(str1 === str2); // true
console.log(str1 === str3); // true
        "
    />

    <p>
        To get property values, we can use <code>.</code> - dot notation, or <code>brackets</code>:
    </p>

    <code-snippet
        code="
const obj = {
    name: 'Anton',
    sex: 'male'
    age: 26,
}

const ageKey = 'age';

console.log(obj.name); // 'Anton'
console.log(obj['sex']); // 'male'
console.log(obj[ageKey]); // 'male'
        "
    />

    <p>
        In the same way, we can add new properties:
    </p>

    <code-snippet
        code="
// create empty object
const obj = {}

const someKey = 'random'
const boolKey = true;
const intKey = 111;

obj['city'] = 'Kyiv';
obj.county = 'Ukraine';
obj[someKey] = 234234;
obj[boolKey] = 'it is a bool key';
obj[intKey] = 'it is a int key';

// notice! boolKey and intKey becomes strings
console.log(Object.keys(obj)) // prints ['city', 'country', 'random', 'true', '111' ]
        "
    />

    <p>
        To delete some property, you can use <code>delete</code> statement:
    </p>

    <code-snippet
        code="
// create empty object
const obj = {};

obj['name'] = 'Her Name';

delete obj.name;

// obj is empty again
console.log(obj) // {}
        "
    />

    <p>
        One of the main subtypes of <code>object</code> is <code>array</code>.
        The <code>object</code> doesn't guaranty the right order of properties we stored in it.
        In other words, if you add properties <code>name</code>, <code>age</code>, <code>country</code> in such order,
        it doesn't mean, that you can extract them in the same order.
        When we need an <i>ordered collection</i>, <code>array</code>s come to the rescue.
    </p>

    <p>
        To declare new <code>array</code> we can use brackets <code>[]</code>
    </p>

    <code-snippet
        code="
// create empty array
const arr = [];
        "
    />

    <p>
        Really rarely you can meet a declaration of the array via global constructor:
    </p>

    <code-snippet
        code="
// create empty array
const arr = new Array();
        "
    />

    <p>
        This way is not recommended.
    </p>

    <p>
        The main characteristics of the <code>array</code>:
        <ul>
            <li>
                JS arrys are resizable and can contain a mix a different data types
            </li>

            <li>
                The elements of the array are accessed by the integer as indexes.
            </li>

            <li>
                JavaScript arrays are zero-indexed:
                the first element of an array is at index <code>0</code>, the second is at index <code>1</code>, and so on.
                The last element is at value of <code>array.length - 1</code>
            </li>
        </ul>
    </p>

    <code-snippet
        code="
// define function
function addTwo(x) {
    return x + 2;
}

// define array with data of the different types
const arr = [true, 12, 'hello', { name: 'Strichka' }, [1, 2, 3]];

// get its length
console.log(arr.lenght); // prints 5;

// get SECOND element of the array
console.log(arr[1]) // print 12;

// add element to the end of array
// even function can be element of the arrays
arr[arr.length - 1] = addTwo;

// arr.length was changed
console.log(arr.lenght); // prints 6;
        "
    />
    
    <p>
        It is pretty common approach, to check <code>arrays</code> is empty or not, before iterate over one:
    </p>
    
    <code-snippet
        code="
// define function
// it will iterate over array and print every element if it is not empty
function printElements(arr) {
    // if array is empty
    // array.length returns 0
    // inside condition statement 0 becomes 'false'
    // we will cover coercion later
    if (arr.length) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}

const arr1 = ['Hi!', 'My name is', 'What?', 'My name is', 'Who?', 'My name is', 'Chika-chika', 'Slim Shady'];
const arr2 = [];

printElements(arr1) // 'Hi!' 'My name is' 'What?' 'My name is' 'Who?' 'My name is' 'Chika-chika' 'Slim Shady'

// what will function 'printElements' return, if arr is empty?)
printElements(arr2) // ?
        "
    />

    <p>
        You can left "space" in <code>array</code>, but it is bad practice, don't do it:
    </p>

    <code-snippet
        code="
// create empty array
const arr = [];
arr[0] = 'first el';
// don't define arr[1] here
arr[2] = 'third el'

console.log(arr.lenght) // prints 3
// but
console.log(arr[1]) // ?
        "
    />

    <p>
        As inside the <code>object</code>, you can define any property inside <code>array</code>
        But don't do this, because it is bad practice too.
    </p>

    <code-snippet
        code="
// create empty array
const arr = [];
// define some property
arr['bad'] = 'practice'

console.log(arr.bad) // practice
        "
    />

    <p>
        Another very important subtype of <code>object</code> type is a <code>function</code>.
        As we mentioned before, the <code>function</code> is constant block of code which
        are created to avoid code duplication and to perform some code multiple times in different places
    </p>

    <p>
        In contrary to <code>array</code>s, the <code>typeof</code> operator with <code>function</code>
        returns 'function'. But it doesn't mean, that <code>function</code> has its own type. It is still
        subtype of object
    </p>

    <code-snippet
        code="
const arr = [];
function getNothing() {}

typeof arr // object
typeof getNothing // function
typeof getNothing() // ?
        "
    />

    <p>
        As the <code>array</code>s, <code>function</code> has the <code>length</code> property too.
        But it returns the number of arguments function takes:
    </p>

    <code-snippet
        code="
function threeArg(one, two, three) {}
console.log(threeArg.lenght) // prints 3
        "
    />

    <p>
        As the <code>object</code>, you can add properties to the function. It is not bad practice,
        but you rarely need this approach.
        Sometimes developers do it for caching.
    </p>

    <code-snippet
        code="
function reallyExpensiveCalculation(firstArg, secondArg) {
    // check if cache already contains calculation with such arguments
    // if contains, return from cache
    if (reallyExpensivalculation.cache[`${firstArg}${secondArg}`]) {
        // statement 'return' make function complete its execution
        return reallyExpensivalculation.cache[`${firstArg}${secondArg}`];
        // i.e further code will not executed
    }

    const result = doCaclulations(firstArg, secondArg);
    reallyExpensivalculation.cache[`${firstArg}${secondArg}`] = result;

    return result;
}
        "
    />

    <p>
        There are three ways to define function:
        <ol>
            <li>
                <i>
                    Function declaration
                </i>
    <code-snippet
        code="
function doSomething() {
    // function's body
}
        "
    />
            </li>

            <li>
                <i>
                    Function expression
                </i>

    <code-snippet
        code="
// anonymus function expression
function() {
    // body
}

// anonymus functions often used as argument for other methods
setTimeout(function() {
    console.log('awasome')
}, 1000) // will be executed in 1000ms

// assign function expression to the variable
const foo = function() {
    // body
}

foo();

const bar = function baz() {
    // body
}

bar();
        "
    />
                The main difference between a function expression and a function declaration is the function name,
                which can be omitted in function expressions to create anonymous functions.
            </li>

            <li>
                Arrow functions

    <code-snippet
        code="
const print = (str) => {
    console.log(str)
}

const oneLine = (smth) => smth; // returns 'smth'
const returnObjectOneLine = (propertyKey) => ({ [propertyKey]: 'value' });
        "
    />

                This function has some limitations. For example, arrow function
                does not have its own bindings to <code>this</code>.
                We will cover <code>this</code> keyword later.
                This type of functions often used to create function 'on-the-fly' e.g. as arguments of the method
    <code-snippet
        code="
const arr = [1, 2, 3];
// Array.protorype.map is a method of arrays that used to modify elements of the existing array
// In this case it just adds 2 for every element of arr
arr.map((el) => el + 2);
arr; // [3, 4, 5];
        "
    />
            </li>
        </ol>
    </p>

    <p>
        For every function we can define default values for the arguments via <code>=</code>
    </p>

    <code-snippet
        code="
function withDefault(first, second = 'default') {
    // body
}

// default value can be even value from another function
function withDefaultSecond(first, second = defineDefault()) {
    // body
}
        "
    />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import CodeSnippet from "@/components/CodeSnippet/index.vue";

export default defineComponent({
    components: {
        CodeSnippet,
    }
})
</script>