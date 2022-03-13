<template>
    <h2>
        Variables
    </h2>

    <p>
        Variable is a symbolyc container, where we can store or keep our data.
        So colled because the value or data in this container can vary over time as needed.
    </p>

    <p>
        JS uses <i>dynamic typing</i>, meaning variables can hold values any type without any type enforcement.
        To declare variable in JavaScript, we have to use one of the reserved words -
        <code>const</code> or <code>let</code>
        Earlier in JavaScript for this puprpose we had to use <code>var</code>, but today is deprecated approach.
    </p>

    <p>
        <code>let</code> allow you to declare variables that are limited to the <i>scope of a block statement</i>, or expression on which it is used.
        Variable which was declared via <code>let</code>, can be reassigned.
    </p>

    <p>
        Consider:
    </p>

    <code-snippet
        code="
// valid js
let foo = 'hello, world';
foo = 43;
foo -= 1;
        "
    />

    <p>
        On the other hand, you can declare variable using <code>const</code>. The main difference is variables were declared
        via <code>const</code> cannot be reassigned or changed throughout program.
    </p>

    <code-snippet
        code="
// invalid js
const foo = 'hello, world';
foo = 43;
// Uncaught TypeError: Assignment to constant variable.
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

