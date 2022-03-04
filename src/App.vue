<template>
    <n-config-provider :theme="darkTheme">
        <!-- <n-layout style="height: 100vh"> -->
        <!-- <n-layout position="absolute" style="height: 100vh" has-sider> -->
        <n-layout style="height: 100vh" has-sider>
            <n-layout-sider
                content-style="padding: 24px;"
                bordered
                show-trigger
                collapse-mode="width"
                :collapsed-width="64"
                :width="240"
                :native-scrollbar="false"
                :inverted="inverted"
            >
                <n-h2>Handian Bridge</n-h2>
                <n-h2>Handian Bridge</n-h2>
                <n-h2>Handian Bridge</n-h2>
                <n-h2>Handian Bridge</n-h2>
                <n-h2>Handian Bridge</n-h2>
                <n-h2>Handian Bridge</n-h2>
                <n-h2>Handian Bridge</n-h2>
                <n-h2>Handian Bridge</n-h2>
                <n-h2>Handian Bridge</n-h2>
                <n-h2>Handian Bridge</n-h2>
                <n-h2>Handian Bridge</n-h2>
                <n-h2>Handian Bridge</n-h2>
                <n-h2 class="test" v-for="i in 200" :key="i">Pingshan Road</n-h2>
            </n-layout-sider>

            <n-layout>
                <n-layout-header position="absolute" style="top: 0; height: 84px; padding: 24px; z-index: 999" bordered>
                    Yiheyuan Road
                </n-layout-header>

                <n-layout content-style="padding: 24px;" :native-scrollbar="false">
                    <n-h2>Pingshan Road</n-h2>
                    <n-h2>Pingshan Road</n-h2>
                    <n-h2>Pingshan Road</n-h2>
                    <n-h2>Pingshan Road</n-h2>
                    <n-h2>Pingshan Road</n-h2>
                    <n-h2>Pingshan Road</n-h2>
                    <n-h2>Pingshan Road</n-h2>
                    <n-h2>Pingshan Road</n-h2>
                    <n-h2>Pingshan Road</n-h2>
                    <n-h2>Pingshan Road</n-h2>
                    <n-h2>Pingshan Road</n-h2>
                    <n-h2 class="test" v-for="i in 200" :key="i">Pingshan Road</n-h2>
                </n-layout>
            </n-layout>

            <resizable-block class="main__resizable-block">

            </resizable-block>

            <!-- <div>
                slkdjfaslkdjlksdjfklsfj
            </div> -->
            <!-- <iframe
                class="iframe-code"
                src="https://codesandbox.io/embed/cranky-danilo-p6swc1?fontsize=14&hidenavigation=1&theme=dark"
                style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                title="cranky-danilo-p6swc1"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe> -->
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
    darkTheme,
} from "naive-ui"
import ResizableBlock from "@/components/ResizableBlock/index.vue"

export default defineComponent({
    components: {
        NConfigProvider,
        NLayout,
        NLayoutHeader,
        NLayoutSider,
        ResizableBlock,
    },

    setup() {
        return {
            darkTheme,
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

.main {
    &__resizable-block {
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: 999;
    }
}
</style>
