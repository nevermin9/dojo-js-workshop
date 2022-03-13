<template>
    <h2>
        Conditionals
    </h2>

    <p>
        Conditional statements are control behavior in JavaScript and determine whether or not pieces of code should run.
        It just a simple question "yes" or "no".
    </p>

    <p>
        The most common is <code>if</code> statement, which means "<i>if</i> this condition is <i>true</i>, to the following"
        For example:
    </p>

    <code-snippet
        code="
const price = 2.99;
const walletBalance = 12;

if (walletBalance > price) {
    console.log('buy a cup of coffee');
}
        "
    />

    <p>
        <code>If</code> statement requires an expression in between the parentheses <code>( )</code> that can be treated
        as either <code>true</code> or <code>false</code>
        In the code snippet above, we provided the expression <code>walletBalance > price</code>,
        which will evaluate to <code>true</code> or <code>false</code> depending on the value of <code>walletBalance</code>
        or <code>price</code>
    </p>

    <p>
        You can provide an alternative piece of code to be executed, if <code>walletBalance > price</code> returns <code>false</code>,
        via <code>else</code> statement
    </p>

    <code-snippet
        code="
const price = 2.99;
const walletBalance = 1;

// can we afford it?
if (walletBalance > price) {
    console.log('buy a cup of coffee');
// otherwise
} else {
    console.log('No, thanks :(');
}
"
    />

    <p>
        Or, you can even chain several conditionals via <code>else if (condition)</code>
        JS engine executes the first block, wich condition will return <code>true</code>
        It will stop checking next conditions, after execution.
    </p>

    <code-snippet
        code="
const coffeePrice = 3.99;
const teaPrice = 1.99
const walletBalance = 2.50;

// can we afford coffee?
if (walletBalance > coffeePrice) {
    console.log('buy a cup of coffee');
// can we afford tea?
} else if (walletBalance > teaPrice) {
    console.log('buy a cup of tea');
// otherwise
} else {
    console.log('No, thanks :(');
}
"
    />

    <p>
        If all conditions returns <code>false</code>
        And there is no "default" block, defined via <code>else</code> statement,
        JS engine just skip all blocks and goes on
    </p>

    <code-snippet
        code="
const coffeePrice = 3.99;
const teaPrice = 1.99
const walletBalance = 0;

// can we afford coffee?
if (walletBalance > coffeePrice) {
    console.log('buy a cup of coffee');
// can we afford tea?
} else if (walletBalance > teaPrice) {
    console.log('buy a cup of tea');
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
