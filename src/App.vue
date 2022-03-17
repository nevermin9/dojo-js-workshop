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
                    :options="menuOptions"
                />
            </n-layout-sider>

            <n-layout>
                <n-layout-header
                    position="absolute"
                    style="top: 0; height: 84px; padding: 24px; z-index: 999"
                    bordered
                    v-if="$route.name !== routesNames.main"
                >
                    {{
                        $route.name
                    }}
                </n-layout-header>

                <n-layout content-style="padding: 84px 24px 24px;" :native-scrollbar="false">
                    <section>
                        <router-view />
                    </section>
                </n-layout>
            </n-layout>

            <resizable-block class="main__resizable-block">
                <iframe
                    class="iframe-code"
                    src="https://codesandbox.io/embed/cranky-danilo-p6swc1?fontsize=14&hidenavigation=1&theme=dark&codemirror=1&expanddevtools=1"
                    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                    title="cranky-danilo-p6swc1"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </resizable-block>

            <!-- <div>
                slkdjfaslkdjlksdjfklsfj
            </div> -->
        </n-layout>
    </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import {
    NConfigProvider,
    NLayout,
    NLayoutHeader,
    NLayoutSider,
    NMenu,
    darkTheme,
} from "naive-ui"
import { BookOutline } from "@vicons/ionicons5";
import MenuItem from "@/utils/MenuItem";
import routesNames from "@/router/routesNames"
import ResizableBlock from "@/components/ResizableBlock/index.vue"

const menuOptions = MenuItem.createMenuItems(routesNames, BookOutline)

export default defineComponent({
    components: {
        NConfigProvider,
        NLayout,
        NLayoutHeader,
        NLayoutSider,
        ResizableBlock,
        NMenu,
    },

    setup() {
        return {
            darkTheme,
            menuOptions,
            routesNames,
        }
    },
})
</script>


<style lang="scss">
@import "~@/styles/common";
// .iframe-code {
//     position: absolute;
//     bottom: 0;
//     width: 100%;
//     z-index: 999;
// }
.test {
    font-size: 32px;
}

.main {
    &__resizable-block {
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: 999;
    }
}
</style>
