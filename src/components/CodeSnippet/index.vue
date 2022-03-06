<template>
    <highlightjs 
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
        }
    }
})
</script>
