<template>
    <h2>
        Blocks &#38; Scopes
    </h2>

    <p>
        Programming is about a proper order and a good organization of things. To do so, we can use <i>block</i>
        Block statement groups zero or more statements and create the lexical scope.
        In JavaScript, a block is defined by wrapping one or more statements inside a curly-brace pair <code>{ .. }</code>
        Consider:
    </p>

    <code-snippet
        code="
// valid js, but doesn't make sense
let hello = 'hello';
{
    hello += 'world';
    console.log(hello); // will print 'hello world'
    // console.log - is a way to print something in the console of your browser or terminal
}
        "
    />

    <p>
        Typically, blocks are attached to some other control statement,
        such as an <code>if</code> statement, <code>function</code> or a <i>loop</i>. For example:
    </p>

    <code-snippet
        code="
let age = 21;
const allowedAge = 18;

if (age > allowedAge) {
    console.log('drink beer!')
}
        "
    />

    <p>
        If you use <code>const</code> or <code>let</code> with block statements, it will create
        <i>the separate lexical scope</i>.
        Scope is basically a collection of variables as well as the rules for how those variables are accessed by name.
        Only code inside that <code>{ ... }</code> can access that scoped variables.
        For example:
    </p>

    <code-snippet
        code="
// valid js
const name = 'Sub Zero';

{
    const name = 'Scorpion'
    console.log(name); // will print 'Scorpion'
}

console.log(name); // will print 'Sub Zero'
        "
    />

    <p>
        Also, scope can be nested inside another one.
        The innermost scope can access variable from scopes "above".
        Consider:
    </p>

    <code-snippet
        code="
// valid js
const name = 'Sub Zero';
const city = 'Paris'

{
    const name = 'Scorpion'
    console.log(name); // will print 'Scorpion'

    {
        const anotherName = 'Rick';
        console.log(name); // will print 'Scorpion' again, because it is the nearest variable with such a name
        console.log(anotherName) // will print 'Rick'
        console.log(city); // gets variable city from the top scope and print 'Paris'
    }
}

console.log(name); // will print 'Sub Zero'
        "
    />

    <p>
        The top scope cannot access variables from the inner's scope.
    </p>

    <code-snippet
        code="
{
    const name = 'Scorpion'
}

console.log(name)
// ReferenceError: name is not defined
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
