<template>
    <h2>
        Rest and Spread
    </h2>

    <p>
        Sometimes, we don't actually know, how many parameters function will take in the future.
        But we want to be sure, that we will handle all of them.
        <code>...</code> expression comes to the rescue.
    </p>

    <code-snippet
        code="
function sum(...nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }

    return result;
}

sum(1, 2); // 3
sum(10, 20, 30); // 60
sum(1, 11, 7, 8, 10, 5); // 42

        "
    />

    <p>
        The rest of the parameters can be included in the function definition by using three dots <code>...</code>
        followed by the name of the array that will contain them.
        The dots literally mean "gather the remaining parameters into an array".
        We can choose to get the first parameters as variables, and gather only the rest:
    </p>

    <code-snippet
        code="
const store = {};

function saveUserData(userName, ...data) {
    store[userName] = data; 
}

saveUserData('John', 25, 'Black', 'Developer');
store['John']; // [25, 'Black', 'Developer'];

        "
    />

    <p>
        The main rule, is the rest parameters must be at the end. Code below won't work:
    </p>

    <code-snippet
        code="
function doSomething(param1, ...params, param2) {
    // body
}
        "
    />

    <h3>
        Spread syntax
    </h3>

    <p>
        But sometimes we need to do exactly the reverse.
        For example, built-in function
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max">Math.max</a>
        takes arbitrary list of numbers and returns the greatest number from this list.
    </p>

    <code-snippet
        code="
Math.max(42, 52, 62); // 62
        "
    />

    <p>
        But what if we have an <code>array</code> of numbers?
        We can use spread syntax to "unfold" the array.
        Consider:
    </p>

    <code-snippet
        code="
const nums1 = [42, 52, 62]
const nums2 = [54, 68, 90];
const nums3 = [90, 100, 2022];
Math.max(...nums1); // 62

// even several arrays
Math.max(...nums2, ...nums3) // 2022

// combine it with normal values
Math.max(100000, ...nums1, 568, ...nums3); // 100000
        "
    />

    <p>
        We also can use spread syntax to make copies of <code>objects</code>:
    </p>

    <code-snippet
        code="
const obj1 = {
    name: 'David',
};

const obj2 = obj1;

obj2.name = 'Peter';
obj1.name; // 'Peter', why?

// create real copy
obj2 = { ...obj1 };
obj2.name = 'Harry';
obj1.name; // 'Peter'

// the same is true for arrays
const arr1 = ['UAH', 'USD', 'EUR'];
const arr2 = [...arr1];
arr1.push('JPY');
arr2; // ['UAH', 'USD', 'EUR']
        "
    />

    <h3>
        Destructing assignment
    </h3>

    <p>
        Sometimes we need only some parts of <code>object</code> or <code>array</code>.
        And destructing assignment can help us to get only this individual pieces of the data structures.
    </p>

    <p>
        <i>
            Destructuring assignment
        </i>
        is a special syntax that allows us to "unpack" arrays or objects into a bunch of variables,
        as sometimes that's more convenient.
    </p>

    <p>
        Array destructing:
    </p>

    <code-snippet
        code="
const userData = ['James', 'Bond', '007', 'Casino Royale'];
const [firstName, lastName] = userData;
firstName; // 'James'
lastName; // 'Bond'

// the array is not modified
userData; // ['James', 'Bond', '007', 'Casino Royale']
        "
    />

    <p>
        To skip some element, just put comma in right place:
    </p>

    <code-snippet
        code="
const userData = ['James', 'Bond', '007', 'Casino Royale'];
const [firstName, , codeName] = userData;
firstName; // 'James'
codeName; // '007'
        "
    />

    <p>
        We can use even <code>object</code>'s properties for assignment
    </p>

    <code-snippet
        code="
const bond = {};

const userData = ['James', 'Bond', '007', 'Casino Royale'];

[bond.firstName, , bond.codeName] = userData;

bond.firstName; // 'James'
bond.codeName; // '007'
        "
    />

    <p>
        With rest operator, we can save elements that are left.
    </p>

    <code-snippet
        code="
const userData = ['James', 'Bond', '007', 'Casino Royale'];

const [firstName, lastName, ...restData] = userData;

restData; // ['007', 'Casino Royale'];
        "
    />

    <p>
        Sometimes we are not sure, if <code>array</code> contains enough elements.
        So, we can use default value for variable while destructing:
    </p>

    <code-snippet
        code="
const userData = ['James', 'Bond'];

const [firstName = 'Jack', lastName = 'Black', codeName = '000' ] = userData;

firstName; // 'James'
lastName; // 'Bond'
codeName; // '000'
        "
    />

    <p>
        Destructing of the <code>array</code>s also works with <code>object</code>s.
    </p>

    <code-snippet
        code="
const options = {
    color: 'red',
    width: 400,
    height: 500,
}

const { color, width, height } = options;
color; // red
width; // 400
height; // 500
        "
    />

    <p>
        The main difference is during <code>object</code> destructing variables' names have to have the same name,
        as <code>object</code>'s properties' keys.
        If we want to use another name for the variable, we can set the new variable name using a colon:
    </p>

    <code-snippet
        code="
const options = {
    color: 'red',
    width: 400,
    height: 500,
}

const { color: c, width: w, height: h } = options;
c; // red
w; // 400
h; // 500
        "
    />

    <p>
        For potentially missing properties we can set default values using <code>=</code>
    </p>

    <code-snippet
        code="
const options = {
    color: 'red',
    width: 400,
    height: 500,
}

const { color = 'white', width = 100, height = 100 } = options;

// or with new names for variables

const { color: c = 'white', width: w = 100, height: h = 100 } = options;
        "
    />

    <p>
        Rest operator works in the same way:
    </p>

    <code-snippet
        code="
const options = {
    color: 'red',
    width: 400,
    height: 500,
}

const { color, ...otherOptions } = options;

otherOptions; // { width: 400, height: 500 }
        "
    />

    <p>
        Everything described above we can use inside function parameters' list:
    </p>

    <code-snippet
        code="
function paintTheSquare({ width: w, height = 250, color: c = 'white' }) {
    // body
}

const options = {
    color: 'red',
    width: 400,
    height: 500,
};

paintTheSquare(options);
        "
    />

    <p>
        The advantages of this method are:
    </p>

    <ol>
        <li>
            We don't care about the order of parameters we pass into function
        </li>

        <li>
            In any time we can change the parameters
            list in function declaration and don't fix its call in every place of our program
        </li>
    </ol>
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
