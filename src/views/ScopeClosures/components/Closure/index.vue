<template>
    <h2>
        Closure
    </h2>

    <p>
        <i>Closure</i> is when a function is able to remember and access its lexical scope
        even when that function is executing outside its lexical scope.
        Consider:
    </p>

    <code-snippet
        code="
function createGreeting(name) {
    const greeting = 'hello';

    function getResult() {
        console.log(greeting.concat(', ' + name + '!'));
    }

    return getResult;
}

const greetJohn = createGreeting('John');

greetJohn(); // prints 'hello, John!';
        "
    />

    <p>
        The function <code>getResult</code> has lexical scope access to the inner scope of the function <code>createGreeting</code>.
        Then we take <code>getResult</code> itself, and pass it as a value. In this case, we <code>return</code> the function
        object itself that <code>getResult</code> references.
        After we execute <code>createGreeting</code>, we assing value it returned to <code>greetJohn</code> variable.
        Than we invoke <code>greetJohn</code>, thereby invoke inner <code>getResult</code> function, just by different reference.
        The main thing you should notice, that <code>getResult</code> function is invoked outside its lexical scope.
        After <code>createGreeting</code> had been executed, normally we would expect
        that the entirety of the inner scope of <code>createGreeting</code> would go away.
        But the magic of <i>closures</i> does not let it happen. That inner scope is in fact still "in use", and thus does not go away. Who's using it?
        <strong>The <code>getResult</code> function itself! </strong>
        By virtue of where it was declared, <code>getResult</code> has a lexical scope closure over that inner
        scope of <code>createGreeting</code>, which keeps that scope alive for <code>getResult</code> to reference at
        any later time.
        <strong><code>getResult</code> still has a reference to that scope, and that reference is called closure.</strong>
    </p>


    <p>
        So, <strong>closure is when a function can remember and access its lexical scope even when it's invoked outside its lexical scope.</strong>
        Closure lets the function continue to access the lexical scope <strong>it was defined in at author-time</strong>.
    </p>

    <code-snippet
        code="
function createAdder(num) {
    return function(i) {
        return num + i;
    }
}

const addTwo = createAdder(2);
const addTen = createAdder(10);
addTwo(4) // 6
addTen(32) // 42
createAdder(5)(10) // 15
        "
    />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import CodeSnippet from "@/components/CodeSnippet/index.vue"

export default defineComponent({
    components: {
        CodeSnippet,
    }
})
</script>