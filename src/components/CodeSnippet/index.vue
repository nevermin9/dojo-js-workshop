<template>
    <details
        v-if="summary"
        class="code-snippet"
    >
        <summary>
            {{ summary }}
        </summary>

        <highlightjs
            :language="language"
            :code="code"
        />
    </details>

    <highlightjs
        v-else
        class="code-snippet"
        :language="language"
        :code="code"
    />
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    props: {
        code: {
            type: String,
            required: true,
        },
        summary: {
            type: String,
            default: "",
        },
        language: {
            type: String,
            default: "javascript",
        }
    }
})
</script>

<style lang="scss">
.code-snippet {
    margin-bottom: 16px;
}
</style>
