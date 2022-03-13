<template>
    <h2>
        Boolean
    </h2>

    <p>
        The Boolean type represents a logical entity having two values, called <code>true</code> and <code>false</code>.
    </p>

    <p>
        This type is commonly used to store yes/no values:
        <code>true</code> means "yes, correct",
        and <code>false</code> means "no, incorrect".
        For instance:
    </p>

    <code-snippet
        code="
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
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