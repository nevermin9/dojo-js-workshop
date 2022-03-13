<template>
    <h2>
        Scope
    </h2>

    <p>
        <i>
            Scope
        </i>
        is the set of rules that determines where and how a variable (identifier) can be looked-up.
        You can think about scope as friend of <i>JavaScript engine</i>. Scope helps engine to find
        identifiers for compiling and executing.
        Consider:
    </p>

    <code-snippet
        code="
const num = 10;

function foo(x) {
    const a = 5;
    return x + a;
}

foo(num);
        "
    />

    <p>
        In this example, to compile and execute the code, the engine should ask the scope where it can find
        <code>foo</code>, <code>num</code> variables. Than, in context of <code>foo</code> function, engine should make
        the same questions about <code>x</code> and <code>a</code> variables.
    </p>

    <p>
        There are two primary models of the scope. The first is most common and JavaScript uses it as well -
        <i>Lexical Scope</i>. The another one is less common and used by some languages - <i>Dynamic Scope</i>
    </p>

    <p>
        <i>Lexical Scope</i> is scope that is defined at lexing time.
        In other words, lexical scope is based on where variables and blocks of scope are authored,
        by you, at write time, and thus is (mostly) set in stone by the time the lexer processes your code.
    </p>

    <code-snippet
        code="
// -1-
const globalVariable = 10;

function foo(a) {
    // -2-
    const b = 42;

    function bar(x) {
        // -3-
        const c = 1;
        return a + x + c;
    }

    return bar(b);
}

foo(globalVariable)
        "
    />

    <p>
        In the example above, there are three lexical scopes.
        <ul>
            <li>
                <strong>First scope</strong> encompasses the global scope, and has two identifiers in it:
                <code>foo</code> and <code>globalVariable</code>
            </li>

            <li>
                <strong>Second scope</strong> encompasses the <code>foo</code>'s scope and has three identifiers in it:
                <code>a</code> (an argument of the <code>foo</code>), <code>b</code>, <code>bar</code>
            </li>

            <li>
                <strong>Third scope</strong> encompasses the <code>bar</code>'s scope and has two indentifiers in it:
                <code>x</code> and <code>c</code>
            </li>
        </ul>
    </p>

    <p>
        It may be helpful to think about these scopes as bubbles inside of each other.
    </p>

    <p>
        The structure and relative placement of these scope bubbles fully explains to the engine
        all the places it needs to look to find an identifier.
    </p>

    <p>
        In the above code snippet, the engine executes the <code>return a + x + c</code> statement and goes
        looking for the three referenced variables <code>a</code>, <code>x</code>, and <code>c</code>.
        It first starts with the innermost scope bubble, the scope of the <code>bar(..)</code> function.
        It will find <code>c</code> and <code>x</code> there, but no <code>a</code>.
        So it goes up one level, out to the next nearest scope bubble, the scope of <code>foo(..)</code>.
        It finds <code>a</code> there, and so it uses that <code>a</code>.
    </p>

    <p>
        If we change our example little bit:
    </p>

    <code-snippet
        code="
// -1-
const globalVariable = 10;

function foo(a) {
    // -2-
    const b = 42;

    function bar(x) {
        // -3-
        const c = 1;
        const a = 3.14; // now a is here as well
        return a + x + c;
    }

    return bar(b);
}

foo(globalVariable)
        "
    />

    <p>
        The engine in the last example will use <code>a</code>, which inside <code>bar(..)</code> function,
        because, <strong>scope look-up stops once it finds the first match.</strong>.
        The same identifier name can be specified at multiple layers of nested scope,
        which is called "shadowing" (the inner identifier "shadows" the outer identifier).
        Regardless of shadowing, scope look-up always starts at the innermost scope being executed at the time,
        and works its way outward/upward until the first match, and stops.
    </p>

    <p>
        So, we create scope every time when using <code>{...}</code> curly braces:
    </p>

    <code-snippet
        code="
const isGood = true;
const foo = 'foo';

if (isGood) {
    const foo = 'use this one';
    const answer = foo.concat(' because it is an inner scope');
    console.log(answer) // 'use this one because it is an inner scope'
}
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

