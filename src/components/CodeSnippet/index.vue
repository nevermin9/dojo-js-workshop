<template>
    <details v-if="summary">
        <summary>
            {{ summary }}
        </summary>

        <highlightjs
            language="javascript"
            :code="code"
        />
    </details>

    <highlightjs
        v-else
        language="javascript"
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
    }
})
</script>
