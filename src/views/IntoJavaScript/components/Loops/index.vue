<template>
    <h2>
        Loops
    </h2>

    <p>
        <i>Loops</i> are a way to repeat the same code multiple times.
    </p>

    <p>
        The first type of loops, is <code>while</code> loop and it has the following syntax:
    </p>

    <code-snippet code="
while (condition) {
    // code to execute
    // also known as loop body
}
    " />

    <p>
        <i>While</i> the condition is truthy, the code from the loop body is executed.
        For instance, the loop below outputs <code>i</code> while <code>i &#60; 3</code>:
    </p>

    <code-snippet code="
let i = 0;
while (i < 3) {
    console.log('i is ', i); // print 0, 1, 2
    i++
}
    " />

    <p>
        A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

        If <code>i++</code> was missing from the example above,
        the loop would repeat (in theory) forever.
    </p>

    <p>
        The second type of creating loops is <code> do {} while () </code>
        It allows to execute code, before checking the condition:
    </p>


    <code-snippet code="
let i = 0;
do {
    console.log('i is ', i); // print 0, 1, 2
    i++
} while (i < 3)
" />

    <p>
        The loop will first execute the body, then check the condition, and,
        while it's truthy, execute it again and again.
        This form of syntax should only be used when you want the body of the loop to execute at
        least once regardless of the condition being truthy. Usually, the other form is preferred:
        <code>while(…) {…}</code>
    </p>

    <p>
        The third and most common types of loops is <code>for</code> loop:
    </p>

    <code-snippet
        code="
for (begin; condition; step) {
    // code to execute
}
" />

    <p>
        For instance, we can convert loops above, to <code>for</code> loop:
    </p>

    <code-snippet
        code="
for (let i = 0; i < 3; i++) {
    console.log('i is ', i); // print i is 0, i is 1, i is 2
}
" />

    <p>
        Let's examine example part by part:
    </p>

    <ul>
        <li>
            First, declare our variable - <code>let i = 0;</code>;
            This part executes only once, in the begining of the loop;
        </li>

        <li>
            Second, check if <code>i</code> satisfy the condition
            <code>i &#60; 3</code>, executes on every iteration
        </li>

        <li>
            Third, execute the body of the loop
            <code>console.log(...);</code>
            Runs again and again, while condition is truthy
        </li>

        <li>
            Fourth, <code>i++</code> executes on every iteration after body;
        </li>

        <li>
            Repeat from the second step...
        </li>
    </ul>


    <p>
        Sometimes you need to "break" your loop.
        It can be done via <code>break</code> statement
    </p>

    <code-snippet
        code="
for (let i = 0; i < 10; i++) {
    // for one line statements you can omit parentheses
    if (i === 9) break;

    console.log(i); // print 0, 1, 2, 3, 4, 5, 6, 7, 8
}
        "
    />

    <p>
        In the example above JS "exit" from the loop if <code>i === 9</code>
    </p>

    <p>
        Sometimes you need to skip iteration step
        For such a purpuse, you can use <code>continue</code> statement
    </p>

    <code-snippet
        code="
for (let i = 0; i < 10; i++) {
    // skip all even numbers
    if (i % 2 === 0) continue;
    console.log(i) // 1, 3, 5, 7, 9
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
