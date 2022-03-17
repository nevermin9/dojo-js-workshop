<template>
    <h2>
        The Problem and The Solution
    </h2>

    <p>
        JavaScript allows us to work with primitives (strings, numbers, etc.) as if they were objects.
        They also provide methods to call as such.
    </p>

    <p>
        For example, to make some <code>string</code> upper cased, we can use:
    </p>

    <code-snippet
        code="
const str = 'string';
// here we call method of the String natives to create upper cased COPY of the string
// copy because, as we mentioned before, string, as any primitives, is immutable data type
console.log(str.toUpperCase()) // prints 'STRING'
        "
    />

    <p>
        But primitives is not objects, they cannot hold properties and methods as <code>object</code>
    </p>

    <p>
        Let's remind the main features of <i>primitives</i> and <i>non-primitives</i> aka objects.
    </p>

    <p>
        A primitive:

        <ul>
            <li>
                Is a value of a primitive type.
            </li>

            <li>
                There are 7 primitive types: <code>string</code>, <code>number</code>,
                <code>bigint</code>, <code>boolean</code>, <code>symbol</code>, <code>null</code> and <code>undefined</code>.
            </li>
        </ul>
    </p>

    <p>
        A non-primitive:

        <ul>
            <li>
                Is capable of storing multiple values as properties.
            </li>

            <li>
                Can be created with <code>{}</code>, for instance: <code>{name: "John", age: 30}</code>.
                There are other kinds of objects in JavaScript: functions, for example, are objects.
            </li>
        </ul>
    </p>

    <p>
        One of the best things about <code>objects</code> is that we can store a <code>function</code> as one of its properties.
    </p>

    <code-snippet
        code="
let person = {
    name: 'Harry',
    makeMagic() {
        console.log('Accio!')
    },
};

person.makeMagic() // prints 'Accio'
        "
    />

    <p>
        But <code>objects</code> by their nature are havier than primitives and requrire more resources.
    </p>

    <p>
        So, here's the paradox faced by the creator of JavaScript:

        <ul>
            <li>
                There are many things one would want to do with a primitive like a string or a number.
                It would be great to access them using methods.
            </li>

            <li>
                Primitives must be as fast and lightweight as possible.
            </li>
        </ul>
    </p>

    <p>
        Solution is:
        <ul>
            <li>
                Primitives are still primitive. A single value, as desired.
            </li>

            <li>
                The language allows access to methods and properties of strings, numbers, booleans and symbols.
            </li>

            <li>
                In order for that to work, a special "object wrapper" that provides the extra functionality is created, and then is destroyed.
            </li>
        </ul>
    </p>

    <p>
        The natives come to the rescue. The natives serve as wrappers of the primitives and give us access
        to the methods and properies we need work with. This process is called <i>boxing</i>.
        Consider:
    </p>

    <code-snippet
        code="
const floatNum = 3.14;

// toFixed method of the Number native takes number of digits to appear after the decimal point;
// and return string representation of the giving number
const integerStr = floatNum.toFixed(0)

console.log(integerStr); // prints '3'

const random = 'RaNdoM';
const lowerRandom = random.toLowerCase();
console.log(lowerRandom); // prints 'random'
        "
    />

    <p>
        How does it work?
        <ul>
            <li>
                The <code>floatNum</code> and <code>random</code> are primitives.
                In the moment of accessing their properies, special objects
                (via natives <code>Number</code> and <code>String</code> respectively) that knows their values and has
                appropriate methods - <code>.toFixed</code> and <code>.toLowerCase</code>
            </li>

            <li>
                We call these method and they return new values
            </li>

            <li>
                The special objects is destroyed, leave the primitives alone.
            </li>
        </ul>
    </p>

    <p>
        JavaScript does it under the hood, but we can do it on our own:
    </p>

    <code-snippet
        code="
// we will cover word 'new' later
// for now, just try to memorize, that creating of new objects via constuctor function (here Number is constructor)
// you should use 'new' keyword
const floatNum = new Number(3.14);
typeof floatNum // 'object'
floatNum.valueOf() // 3.14
const intStr = floatNum.toFixed(0)
typeof intStr // 'string'
intStr; // '3'
        "
    />

    <p>
        To get the value of an object wrapper, JavaScript calls <code>.valueOf()</code>. All natives have this mathod.
        However, it is not recommended way to create primitives and non-primitives, because it has bad impact on perfomance
        and it leads to unexpected behavior:
    </p>

    <code-snippet
        code="
let zero = new Number(0);

if (!zero) {
    console.log('i will never be called')
}

typeof zero // 'object'
typeof zero.valueOf() // 'number'

// by the rule of coercion in JS
// 0 - is always 'false' when coerced to boolean
// but object is always 'true'
        "
    />

    <p>
        Only <code>undefined</code> and <code>null</code> don't have corresponding natives,
        hence they don't have any methods to operate on them.
    </p>
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