<template>
    <h2>
        String
    </h2>

    <p>
        According to the spec, the <code>String</code> type is the set of all ordered sequences of zero or more 16-bit unsigned
        integer values ("elements") up to a maximum length of 2<sup>53</sup>-1 elements.
        The <code>String</code> type is generally used to represent textual data in a running ECMAScript program,
        in which case each element in the <code>String</code> is treated as a UTF-16 code unit value.
        Each element is regarded as occupying a position within the sequence.
        These positions are indexed with non-negative integers.
        The first element (if any) is at index 0, the next element (if any) at index 1, and so on.
        The length of a <code>string</code> is the number of elements (i.e., 16-bit values) within it.
        The empty <code>string</code> has length zero and therefore contains no elements.
    </p>

    <code-snippet
        code="
const str = 'str';
console.log(str[0]) // prints 's'
        "
    />


    <p>
        A string in JavaScript must be surrounded by quotes.
    </p>

    <code-snippet
        :code="example1"
    />

    <code-snippet 
        code="
let phrase = `can embed another ${str}`;
        "
    />

    <p>
        In JavaScript, there are 3 types of quotes.
    </p>

    <ul>
        <li>Double quotes <code>"Hello"</code> </li>
        <li>Single quotes <code>'Hello'</code> </li>
        <li>Backticks <code>`Hello`</code> </li>
    </ul>

    <p>
        Double and single quotes are "simple" quotes. There's practically no difference between them in JavaScript.
    </p>

    <p>
        Backticks are "extended functionality" quotes.
        They allow us to embed variables and expressions into a string by wrapping them in <code>${…}</code>,
        for example:
    </p>


    <code-snippet 
        code="
let name = 'John';
console.log(`Hello, ${name}!`) // prints 'Hello, John!'

// we even can put any expression
console.log(`The answer is ${41 + 1}`) // prints 'The answer is 42';
        "
    />

    <p>
        Please note that this can only be done in backticks. Other quotes don't have this embedding functionality!
    </p>
</template>



<script lang="ts">
import { defineComponent } from "vue"
import CodeSnippet from "@/components/CodeSnippet/index.vue";

export default defineComponent({
    components: {
        CodeSnippet,
    },

    data() {
        return {
            example1: `
let str = "Hello";
let str2 = 'Single quotes are ok too';
            `,
        }
    }
})
</script>