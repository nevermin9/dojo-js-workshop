<template>
    <h2>
        "use strict"
    </h2>

    <p>
        After  ECMAScript 5 (ES5) was appeared in 2009, a lot of new features, that
        we have been covering, had been added. But to keep "old style" JavaScript work properly,
        these new features are off by default.
        To enable them you should put <code>"use strict"</code> on the top of the <code>.js</code> file.
        This directive make JavaScript work in modern way.
    </p>

    <code-snippet
        code="
'use strict';

// all your code here
        "
    />

    <p>
        <code>"use strict"</code> enable a lot of useful things.
        The main reason of using this directive is it makes JavaScript work in understandable and expected way.
        You can learn about all features <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode">here</a>
        But it is not necessary)
        Today, in modern JavaScript development we use modules and bundlers, like <a href="https://webpack.js.org/">Webpack</a>.
        So, when you will use modules, you may not worry about <code>"use strict"</code>, because this directive is enabled by default in modules.
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
