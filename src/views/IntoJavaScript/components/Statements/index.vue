<template>
    <h2>
        Statements
    </h2>

    <p>
        In a computer language, a group of words, numbers, and operators that performs a specific task is a statement.
    </p>

    <p>
        In JavaScript statements might look as follows:
    </p>

    <code-snippet
        code="const foo = 42 + bar;"
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
