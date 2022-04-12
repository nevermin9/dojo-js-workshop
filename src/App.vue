<template>
    <n-config-provider :theme="darkTheme">
        <n-layout style="height: 100vh" has-sider>
            <n-layout-sider
                bordered
                show-trigger
                collapse-mode="width"
                :collapsed-width="64"
                :width="240"
                :native-scrollbar="false"
            >
                <n-menu
                    :collapsed-width="64"
                    :collapsed-icon-size="22"
                    :options="menuItems"
                />
            </n-layout-sider>

            <n-layout>
                <n-layout-header
                    position="absolute"
                    style="top: 0; height: 84px; padding: 0 24px; z-index: 999"
                    bordered
                    v-if="$route.name !== routesNames.home"
                >
                    <h1 class="main__layout-header-text">
                        {{
                            $route.name
                        }}
                    </h1>
                </n-layout-header>

                <n-layout
                    ref="layout"
                    :content-style="{
                        'padding-top': '94px',
                        'padding-left': '24px',
                        'padding-right': '24px',
                        'padding-bottom': isIncreasedPadding ? '550px' : '84px',
                    }"
                    :native-scrollbar="false"
                >
                    <section>
                        <router-view />
                    </section>
                </n-layout>

                <n-button
                    v-if="$route.name !== routesNames.home"
                    class="main__btn-arrow-up"
                    @click="scrollToTop"
                >
                    <template #icon>
                        <n-icon>
                            <arrow-up />
                        </n-icon>
                    </template>
                </n-button>
            </n-layout>

            <resizable-block @openEvent="increasePadding" class="main__resizable-block">
                <iframe
                    class="iframe-code"
                    src="https://codesandbox.io/embed/cranky-danilo-p6swc1?fontsize=14&hidenavigation=1&theme=dark&codemirror=1&expanddevtools=1"
                    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                    title="cranky-danilo-p6swc1"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </resizable-block>
        </n-layout>
    </n-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import {
    NConfigProvider,
    NLayout,
    NLayoutHeader,
    NLayoutSider,
    NMenu,
    NButton,
    NIcon,
    darkTheme,
} from "naive-ui"
import { BookOutline, ArrowUp } from "@vicons/ionicons5";
import MenuItem from "@/utils/MenuItem";
import routesNames from "@/router/routesNames"
import ResizableBlock from "@/components/ResizableBlock/index.vue"

const menuItems = MenuItem.createMenuItems(routesNames, BookOutline)

export default defineComponent({
    components: {
        NConfigProvider,
        NLayout,
        NLayoutHeader,
        NLayoutSider,
        ResizableBlock,
        NMenu,
        NButton,
        NIcon,
        ArrowUp,
    },

    setup() {
        const layout = ref<typeof NLayout | null>(null);
        const isIncreasedPadding = ref(false);

        function scrollToTop() {
            layout.value?.$el.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        function increasePadding(openEvent: { [key: string]: boolean }) {
            isIncreasedPadding.value = openEvent.isOpen;
        }

        return {
            darkTheme,
            menuItems,
            routesNames,
            layout,
            scrollToTop,
            increasePadding,
            isIncreasedPadding,
        }
    },
})
</script>


<style lang="scss">
@import "~@/styles/common";

.main {
    &__layout-header-text {
        font-family: PressStart2P;
    }

    &__btn-arrow-up {
        position: absolute;
        bottom: 84px;
        right: 24px;
        opacity: .6;
        transition: opacity .3s;

        &:hover {
            opacity: 1;
        }
    }

    &__resizable-block {
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: 999;
    }
}
</style>
