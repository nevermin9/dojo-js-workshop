<template>
    <h2>
        Tasks
    </h2>

    <p>
        1. What will function <code>displayName()</code> return?
    </p>

    <code-snippet
        code="
const user = {
    name: 'Kate',
};

function displayName() {
    return user['name'];
}

user.name = 'Thomas';

const result = displayName();
        "
    />

    <p>
        2. Tell about all Lexical Scopes you can find in the next code snippet
    </p>

    <code-snippet
        code="
function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    }
}
        "
    />

    <p>
        What will <code>counter1()</code> return in every invocation?
    </p>

    <code-snippet
        code="
function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    }
}

const counter1 = makeCounter();
counter1(); // ?
counter1(); // ?
        "
    />

    <p>
        What will <code>counter2</code> return in every invocation?
    </p>

    <code-snippet
        code="
function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    }
}

const counter1 = makeCounter();
counter1();
counter1();

counter2(); // ?
counter2(); // ?
        "
    />

    <p>
        3. Why doesn't code below work? How can we fix it?
    </p>

    <code-snippet
        code="
function getNameHandlers() {
    let name = 'Pete';

    function changeName(name) {
        name = name;
    }

    function getName() {
        return name;
    }

    return {
        changeName,
        getName,
    }
}

const handlers = getNameHandlers();

console.log(handlers.getName()); // 'Pete'

handlers.changeName('Bob');

console.log(handlers.getName()); // 'Pete', but why?

        "
    />

    <code-snippet
        summary="Solution"
        code="
function getNameHandlers() {
    const user = { name: 'Pete' };

    function changeName(name) {
        user.name = name;
    }

    function getName() {
        return user.name;
    }

    return {
        changeName,
        getName,
    }
}

const handlers = getNameHandlers();

console.log(handlers.getName()); // 'Pete'

handlers.changeName('Bob');

console.log(handlers.getName()); // 'Bob'
        "
    />

    <p>
        4. Create function <code>sum</code>, which will work like this:
    </p>

    <code-snippet
        code="
sum(4)(10); // 14
        "
    />

    <code-snippet
        summary="Solution"
        code="
function sum(num1) {
    return function(num2) {
        return num1 + num2;
    }
}
        "
    />

    <p>
        5. <code>Array#filter</code> is a method to filter arrays by a given condition.
        Read about it <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">here</a>
        You need to write <code>inArray</code> and <code>inBetween</code> functions. <br>
        <code>arr.filter(inArray([1, 2, 3]))</code> - selects only elements matching with one of the members of <code>[1, 2, 3]</code>. <br>
        <code>arr.filter(inBetween(2, 5))</code> - selects only  values between 2 and 5.
    </p>

    <p>
        To complete this task you also need:
    </p>

    <ul>
        <li>
            <code>Array#includes</code>,
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find">here docs</a>
        </li>

        <li>
            The logical AND (<code>&#38;&#38;</code>) operator.
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">here docs</a>
        </li>

    </ul>

    <code-snippet
        summary="Solution"
        code="
function inArray(arr) {
    return function(item) {
        return arr.includes(item);
    }
}

function inBetween(start, end) {
    return function(item) {
        return item >= start && item <= end;
    }
}
        "
    />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import CodeSnippet from "@/components/CodeSnippet/index.vue"

export default defineComponent({
    components: {
        CodeSnippet,
    }
})
</script>


