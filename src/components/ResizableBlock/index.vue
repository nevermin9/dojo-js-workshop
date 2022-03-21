<template>
    <section
        :class="{
            'resizable-block': true,
            'resizable-block_opened': isOpen,
        }"
    >
        <div class="resizable-block__btn-wrapper">
            <n-button
                class="resizable-block__toggle-btn"
                tertiary
                circle
                @click="toggle"
                :focusable="false"
            >
                <template #icon>
                    <n-icon
                        :class="{
                            'resizable-block__btn-ico-wrapper': true,
                            'resizable-block__btn-ico-wrapper_opened': isOpen,
                        }"
                        size="18"
                    >
                        <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </n-icon>
                </template>
            </n-button>
        </div>

        <transition name="fade">
            <div
                v-show="!isOpen"
                class="resizable-block__closed-text-wrap"
            >
                <span class="resizable-block__closed-text">
                    Console
                </span>
            </div>
        </transition>

        <transition name="fade">
            <div v-show="isOpen">
                <slot />
            </div>
        </transition>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { NButton, NIcon } from "naive-ui";

export default defineComponent({
    components: {
        NButton,
        NIcon,
    },

    emits: ["openEvent"],

    setup(props, { emit }) {
        const isOpen = ref(false);

        const toggle = () => {
            isOpen.value = !isOpen.value;
            emit("openEvent", { isOpen: isOpen.value });
        };

        return {
            toggle,
            isOpen,
        };
    },
});
</script>

<style lang="scss">
.resizable-block {
    $root: &;

    position: relative;
    height: 60px;
    border-top: 1px solid rgb(255 255 255 / 9%);
    background-color: rgb(24 24 28);
    transition: height .3s;

    &#{ $root }_opened {
        height: 60vh;
    }

    &__btn-wrapper {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -15px;
    }

    &__toggle-btn {
        width: 24px;
        height: 24px;
        background-color: rgb(72 72 78);

        &:hover {
            background-color: rgb(72 72 78) !important;
        }

        &:active {
            background-color: rgb(72 72 78) !important;
        }
    }

    &__btn-ico-wrapper {
        transform: rotate(-90deg);
        transition: transform 0.2s;

        &#{ $root }__btn-ico-wrapper_opened {
            transform: rotate(90deg);
        }
    }
    
    &__closed-text-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    &__closed-text {
        font-size: 16px;
        @include code;
    }
}
</style>
