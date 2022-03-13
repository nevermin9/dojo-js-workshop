<template>
    <h2>
        Null
    </h2>

    <p>
        According to the spec, the Null type has exactly one value, called <code>null</code>.
        In JavaScript, <code>null</code> is not a "reference to a non-existing object" or a "null pointer"
        like in some other languages.
        It's just a special value which represents "nothing", "empty" or "value unknown".
    </p>

    <code-snippet
        code="
let age = null;
        "
    />

    <p>
        The code above states that age is unknown.
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