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
        as either <code>true</code> or <code>false</code>.
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
        JS engine executes the first block, which condition will return <code>true</code>
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

    <p>
        The conditional (ternary) operator is the only JavaScript operator that takes three operands:
        a condition followed by a question mark (<code>?</code>), then an expression to execute if the condition
        is truthy followed by a colon (<code>:</code>), and finally the expression to execute if the condition is falsy.
        This operator is frequently used as an alternative to an <code>if...else</code> statement.
    </p>

    <code-snippet
        code="
//SYNTAX
condition ? exprIfTrue : exprIfFalse;
// =====

const obj1 = { lang: 'JavaScript' };
const obj2 = { lang: 'Python' };
const falsyVal = null;

const result = falsyVal ? obj2 : obj1;
result; // { lang: 'JavaScript' };

// is the same as follows
let result;
if (falsyVal) {
    result = obj2;
} else {
    result = obj1;
}

const isBaby = false;
const isTeenager = false;

// ternary operator can be chained with another one;
// but it is not a good practice
const drink = isBabe ? 'milk' : isTeenager ? 'tea' : 'beer';
        "
    />

    <p>
        The logical OR <code>||</code> operator (logical disjunction) for a set of operands is <code>true</code>
        if and only if one or more of its operands is <code>true</code>.
        It is typically used with boolean (logical) values.
        When it is, it returns a <code>boolean</code> value.
        However, the <code>||</code> operator actually returns the value of one of the specified operands,
        so if this operator is used with non-<code>boolean</code> values,
        it will return a non-<code>boolean</code> value.
    </p>

    <code-snippet
        code="
//SYNTAX
val1 || val2 (|| valN);
// =====

const obj1 = { lang: 'JavaScript' };
const obj2 = { lang: 'Python' };

const result = obj2 || obj1;
result; // { lang: 'Python' };

// is the same as follows

const isBaby = false;
const isTeenager = false;
const isChild = false;

if (isBaby || isTeenager || isChild) {
    console.log('give him a cup of milk!')
} else {
    console.log('give him a bottle of beer!')
}

const narrator = '';
const alterEgo1 = 'Tyler Durden';
const alterEgo2 = 'Marla Singer';

const theMainCharacter = narrator || alterEgo1 || alterEgo2;
theMainCharacter; // ???
        "
    />

    <p>
        The logical AND (<code>&#38;&#38;</code>) operator (logical conjunction) for a set of <code>boolean</code>
        operands will be <code>true</code> if and only if all the operands are <code>true</code>.
        Otherwise it will be <code>false</code>.
        More generally, the operator returns the value of the first falsy operand encountered when evaluating
        from left to right, or the value of the last operand if they are all truthy.
        Consider:
    </p>

    <code-snippet
        code="
//SYNTAX
val1 && val2 (&& valN);
// =====

const obj1 = { lang: 'JavaScript' };
const obj2 = { lang: 'Python' };

const result = obj2 && obj1;
result; // { lang: 'JavaScript' };

// is the same as follows

const isBaby = true;
const isTeenager = true;
const isChild = true;

if (isBaby && isTeenager && isChild) {
    console.log('give him a cup of milk!')
} else {
    console.log('give him a bottle of beer!')
}

const narrator = '';
const alterEgo1 = 'Tyler Durden';
const alterEgo2 = 'Marla Singer';

const theMainCharacter = narrator && alterEgo1 && alterEgo2;
theMainCharacter; // ???
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
