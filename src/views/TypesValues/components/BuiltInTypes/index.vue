<template>
    <h2>
        Built-In-Types
    </h2>

    <p>
        JavaScript defines eight built-in types:
    </p>

    <p>
        <code>
            undefined
        </code>
    </p>

    <p>
        <code>
            null
        </code>
    </p>

    <p>
        <code>
            boolean
        </code>
    </p>

    <p>
        <code>
            string
        </code>
    </p>

    <p>
        <code>
            symboll
        </code>
    </p>

    <p>
        <code>
            number
        </code>
    </p>

    <p>
        <code>
            bigint
        </code>
    </p>

    <p>
        <code>
            object
        </code>
    </p>

    <p>
        All of these types except <code>object</code> are called "primitives".
    </p>

    <p>
        The <code>typeof</code> operator inspects the type of the given value,
        and always returns one of eight string values - surprisingly,
        there's not an exact 1-to-1 match with the seven built-in types we just listed.
    </p>

    <code-snippet
        code="
typeof undefined     === 'undefined'; // true
typeof null          === 'object';    // true
typeof true          === 'boolean';   // true
typeof 42            === 'number';    // true
typeof '42'          === 'string';    // true
typeof { life: 42 }  === 'object';    // true
typeof Symbol()      === 'symbol';    // true
typeof 1n            === 'bigint';    // true
        "
    />

    <p>
        <code>typeof null === 'object'</code> is a bug of JavaScript, which has persisted pretty long time
        and will likely never be fixed because there is too much code in the world that relies on its buggy behavior.
    </p>

    <p>
        In JavaScript, variables don't have types - values have types. Variables can hold any value, at any time.
    </p>

    <code-snippet
        code="
let a = 42;
typeof a; // 'number'

a = true;
typeof a; // 'boolean'
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
