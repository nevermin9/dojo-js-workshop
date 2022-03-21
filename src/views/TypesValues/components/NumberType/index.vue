<template>
    <h2>
        Number
    </h2>

    <p>
        The <code>Number</code> type represents both integer and floating point numbers.
        According to the spec, the <code>Number</code> type has exactly 18 437 736 874 454 810 627 (that is, 264 - 253 + 3) values,
        representing the double-precision 64-bit format IEEE 754-2019 values as specified in the IEEE Standard for Binary Floating-Point Arithmetic.

    </p>

    <p>
        Values of the <code>Number</code> type:
    </p>

    <ul>
        <li>
            integers -
            <code>42</code>,
            <code>100</code>,
            <code>-100</code>
        </li>

        <li>
            floating point numbers -
            <code>42.0</code>,
            <code>3.14</code>,
            <code>-0.3333333</code>
        </li>

        <li>
            positive and negative zero - 
            <code>0</code>,
            <code>-0</code>
        </li>

        <li>
            positive and negative infinity -
            <code>Infinity</code>,
            <code>-Infinity</code>
        </li>

        <li>
            'not-a-number' value -
            <code>
                NaN
            </code>
        </li>
    </ul>

    <p>
        <code>number</code> literals can also be expressed in other bases, like binary, octal, and hexadecimal.
    </p>

    <code-snippet 
        code="
0xf3; // hexadecimal for: 243
0363; // octal for: 243
0b11110011;	// binary for: 243
        "
    />

    <p>
        <code>Infinity</code>
        represents the mathematical Infinity ∞. It is a special value that's greater than any number.
    </p>

    <code-snippet 
        code="
console.log( 1 / 0 ) // prints Infinity

const inf = Infinity;
        "
    />

    <p>
        <code>-Infinity</code>
        same as positive <code>Infinity</code>, but represents the smallest number.
    </p>

    <p>
        <code>NaN</code>
        represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
    </p>

    <code-snippet
        code="
console.log( 'i am a string' / 3 ) // prints NaN
        "
    />

    <p>
        <code>NaN</code>
        is sticky. Any farther  mathematical operation on <code>NaN</code> returns <code>NaN</code>
    </p>

    <code-snippet
        code="
const notANumber = NaN;

console.log(notANumber / 3); // prints NaN
        "
    />

    <p>
        There is only one exception for this rule. <code>NaN</code> to zero power returns <code>1</code>
    </p>

    <code-snippet
        code="
console.log(NaN ** 0); // 1
        "
    />

    <p>
        It is worth to mention, <code>NaN</code> compares unequal to any other value - including to another NaN value.
    </p>

    <code-snippet
        code="
NaN === NaN // false;
        "
    />

    <p>
        Other operations that returns <code>NaN</code>
    </p>

    <ul>
        <li>
            Number cannot be parsed (e.g. <code>parseInt("blabla")</code> or <code>Number(undefined)</code>)
        </li>

        <li>
            Math operation where the result is not a real number (e.g. <code>Math.sqrt(-1)</code> )
        </li>

        <li>
            Indeterminate form (e.g. <code>undefined + undefined</code> )
        </li>
        
        <li>
            Any operation that involves a string and is not an addition operation (e.g. <code>"foo" * 3</code>)
        </li>
    </ul>
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