<template>
    <h2>
        Intro
    </h2>

    <p>
        <i>
            Type coercion
        </i>
        is the process of converting value from one type to another (such as string to number, object to boolean, and so on).
        In JavaScript coercions always result in one of the scalar primitive values, like <code>string</code>, <code>number</code>
        and <code>boolean</code>. There is no coercion that results in a complex value like <code>object</code> or <code>function</code>
    </p>

    <p>
        In JavaScript coercion can be one of two types: <i>explicit coercion</i> or <i>implicit coercion</i>.
        <i>Explicit coercion</i> is when it is obvious from looking at the code that a type conversion is intentionally occurring.
        <i>Implicit coercion</i> is when the type conversion will occur as a less obvious side effect of some other intentional operations.
    </p>

    <code-snippet
        code="
let num = 42;
let strNum = '' + num; // implicit coercion, strNum now holds string '42'
let toNum = Number(strNum) // explicit coercion, toNum now holds number 42
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