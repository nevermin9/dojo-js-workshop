<template>
    <h2>
        The Goal
    </h2>

    <p>
        Each of the built-in native constructors has its own <code>.prototype</code> object
        - <code>Array.prototype</code>, <code>String.prototype</code>, etc.
    </p>

    <p>
        We will cover <code>prototype</code> later, but for better understanding now, you can think of <i>prototype</i>,
        as a the <code>object</code> that have properties and methods. All <code>objects</code> created via constructor
        of the prototype, has access to its properties and methods.
        It is the implementation of <i>inheritance</i> mechanism in JavaScript.
    </p>

    <p>
        By documentation convention, <code>String.prototype.XYZ</code> is shortened to <code>String#XYZ</code>, and likewise for all the other <code>.prototypes</code>.
    </p>

    <p>
        For example, <code>String.prototype</code> contains methods:
    </p>

    <ul>
        <li>
            <code>String#indexOf(substring)</code>
            returns the index of the first occurrence of the specified substring.
        </li>

        <li>
            <code>String#slice(beginIndex, endIndex)</code>
            extracts a section of a string and returns it as a new string, without modifying the original string.
        </li>

        <li>
            <code>String#concat(str1, str2)</code>
            concatenates the string arguments to the calling string and returns a new string.
        </li>

        <li>
            <code>String#split(separator)</code>
            divides a string into an ordered list of substrings, puts these substrings into an array, and returns the array.
        </li>
    </ul>

    <p>
        complete list of methods and properties you can find
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">in MDN docs</a>
    </p>

    <p>
        Hence, any string in our code has access to any method <code>String.prototype</code> consists.
        Consider:
    </p>

    <code-snippet
        code="
const superString = 'JavaScript';
superString.indexOf('v') // 2
superString.slice(4, 8) // 'Scri'
superString.concat(' is awesome!') // 'JavaScript is awesome'
// empty string as separator
superString.split('') // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
        "
    />

    <p>
        For methods and properties of the other built-in natives look at MDN docs:
    </p>

    <ul>
        <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Numbers</a>
        </li>

        <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Booleans</a>
            but they have only two inherited methods - <code>toString</code> and <code>valueOf</code>
        </li>
        <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Arrays</a>
        </li>
        <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Objects</a>
        </li>
    </ul>

    <p>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">Other built-in natives</a>
    </p>

    <!-- <p>
        Sometimes, you can face method straight from build-in native, not from its <code>.prototype</code>
        (e.g. <code>Object.keys</code> or <code>Number.isNaN</code>).
        It means, that <code>object</code> created via appropriate constructor aka build-in native doesn't have
        access to such method. To use this method, we should pass our data as argument.
        For example:
    </p>

    <code-snippet
        code="
const obj = {
    name: 'Ruby',
    county: 'Romania',
};

const num = 42;

// Number.isNaN method determines whether the passed value is NaN and its type is Number
// we pass num variable as argument
Number.isNaN(num);

// Object.keys returns array of property keys of the given object
Object.keys(obj) // [ 'name', 'country' ]
        "
    /> -->
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