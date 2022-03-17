<template>
    <h2>
        How JavaScript works
    </h2>

    <p>
        JavaScript code is executed via JavaScript engine.
        <i>JavaScript engine</i> is a program or an interpreter which executes JavaScript code. A JavaScript engine can be implemented as a standard interpreter,
        or just-in-time compiler that compiles JavaScript to bytecode in some form.
    </p>

    <p>
        For example, to execute JavaScript in Google Chrome, it uses V8 engine, which is written in C++
        Later, we will cover another environment for JavaScript - node. This runtime uses V8 as well.
        Other browsers use engine of their own.
    </p>

    <p>
        To execute code V8 goes through several steps (simplified, in realty it is more complicated procss and includes more steps):
    </p>

    <ol>
        <li>
            <i>Parsing Phase</i>: During the parsing phase, the code is broken down into its respective tokens.

            <code-snippet
                code="
const sum = 3 + b;
                "
            />

            Here <code>const</code> is token, <code>sum</code> is token, <code>+</code>, <code>3</code> and <code>b</code> are tokens too.
            After the code is broken down into tokens, it is given to the syntax parser which converts the code into an Abstract Syntax Tree

            For the statement above, AST looks like:

            <code-snippet
                code='
{
"type": "Program",
"start": 0,
"end": 198,
"body": [
{
    "type": "VariableDeclaration",
    "start": 179,
    "end": 197,
    "declarations": [
    {
        "type": "VariableDeclarator",
        "start": 185,
        "end": 196,
        "id": {
        "type": "Identifier",
        "start": 185,
        "end": 188,
        "name": "sum"
        },
        "init": {
        "type": "BinaryExpression",
        "start": 191,
        "end": 196,
        "left": {
            "type": "Literal",
            "start": 191,
            "end": 192,
            "value": 3,
            "raw": "3"
        },
        "operator": "+",
        "right": {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "name": "b"
        }
        }
    }
    ],
    "kind": "const"
}
],
"sourceType": "module"
}
                '
            />
        </li>

        <li>
            <i>Compilation phase</i>: Compilation is the process of converting human-readable code to machine code.
            The V8 engine uses both a compiler and an interpreter and follows <i>Just in Time(JIT) Compilation</i> for improved performance.
            <i>
                Just in Time(JIT) Compilation: 
            </i>
            The V8 engine initially uses an interpreter, to interpret the code. On further executions,
            the V8 engine finds patterns such as frequently executed functions, frequently used variables,
            and compiles them to improve performance. Suppose the performance degrades or the parameters passed
            to the function change their type, then the V8 simply decompiles the compiled code and falls back to
            the interpreter.
        </li>

        <li>
            <i>
                Execution Phase
            </i>:
            The byte code is executed by using the <i>Memory heap</i> and the <i>Call Stack</i> of the V8 engine's
            runtime environment. Memory Heap is the place where all the variables and functions are assigned memory.
            Call Stack is the place where each individual functions, when called are pushed to the stack, and popped out
            after their execution. When the interpreter interprets the code, using an object structure, where the keys are the byte
            code and the values the functions which handle the corresponding byte code.
            The V8 engine orders the values in the form of a list in memory, which is saved into a Map thereby saving
            a lot of memory.
        </li>
    </ol>

    <p>
        To lean about <i>Call Stack</i> and <i>Event Loop</i>, I recommend watching
        <a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf">this video</a> and practice alongside,
        because this topic extremely important to understand.
    </p>
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
