<template>
    <section class="dynamic-component-switcher">
        <aside class="dynamic-component-switcher__aside">
            <div class="dynamic-component-switcher__btn-wrapper">
                <n-button
                    v-if="current > 0"
                    class="dynamic-component-switcher__btn"
                    @click="goPrev"
                >
                    prev
                </n-button>

                <n-button
                    v-if="current < components.length - 1"
                    class="dynamic-component-switcher__btn"
                    @click="goNext"
                >
                    next
                </n-button>
            </div>
        </aside>

        <article class="dynamic-component-switcher__article">
            <component :is="components[current]" />
        </article>
    </section>
</template>

<script lang="ts">
import { defineComponent, PropType, Component, ref, toRefs } from "vue"
import { NButton } from "naive-ui"

export default defineComponent({
    components: {
        NButton,
    },

    props: {
        components: {
            type: Array as PropType<Array<Component>>,
            required: true,
        },
    },

    setup(props) {
        const { components } = toRefs(props);
        const current = ref(0);

        const goPrev = () => {
            if (current.value > 0) {
                current.value--
            }
        }

        const goNext = () => {
            if (current.value < components.value.length - 1) {
                current.value++
            }
        }

        return {
            goPrev,
            goNext,
            current,
        }
    },
})
</script>
