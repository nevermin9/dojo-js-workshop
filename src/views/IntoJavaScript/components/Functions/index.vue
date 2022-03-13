<template>
    <h2>
        Functions
    </h2>

    <p>
        A JavaScript function is a defined block of code designed to perform a particular task.
        A JavaScript function is executed when "something" invokes it (calls it).
        To create a function we can use <i>function declaration</i>
    </p>

    <code-snippet
        code="
function sayHello() {
    console.log('hello!');
}
        "
    />

    <p>
        The function keyword goes first, then goes the name of the function,
        then a list of parameters between the parentheses (comma-separated, empty in the example above, we'll
        see examples later) and finally the code of the function, also named “the function body”, between curly braces.
    </p>


    <code-snippet
        code="
function sayHelloTo(name) {
    const greeting = 'hello, '
    console.log(greeting + name);
}

// and we can call it many many times
sayHelloTo('John');
sayHelloTo('Hanna');
        "
    />

    <p>
        This example clearly demonstrates one of the main purposes of functions: to avoid code duplication.
        If we ever need to change the message or the way it is shown, it's enough to modify the code in one place: the function which outputs it.
    </p>

    <p>
        A variable declared inside a function is only visible inside that function.
        In the example above, variable <code>greeting</code> is accessable only in <code>sayHelloTo</code>
    </p>

    <p>
        But function can access variable in the outer lexical scope:
    </p>

    <code-snippet
        code="
const greeting = 'hello, '

function sayHelloTo(name) {
    console.log(greeting + name);
}

// and we can call it many many times
sayHelloTo('John'); // hello, John
sayHelloTo('Hanna'); // hello, Hanna
        "
    />

    <p>
        Functions <strong>always</strong> return some value:
    </p>

    <code-snippet
        code="
// here function return variable that contains string
function getName() {
    const name = 'Dojo';
    return name;
}

// this function calls getName() and print it
// after that, it return 'undefined'
function printName() {
    const name = getName();
    console.log(name);
}
        "
    />

    <p>
        We will dive deeper into functions later.
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
