<template>
    <section>
        <dynamic-components-switcher :components="components" />
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import DynamicComponentsSwitcher from "@/components/DynamicComponentsSwitcher/index.vue"
import components from "./components";

export default defineComponent({
    components: {
        DynamicComponentsSwitcher,
    },

    setup() {
        return {
            components,
        }
    },
})
</script>
