<template>
    <h2>
        Tasks
    </h2>

    <p>
        1. Define function <code>isEmptyArray(arr)</code> which return <code>true</code> if array is empty, otherwise <code>false</code>.
    </p>

    <code-snippet
        summary="Solution"
        code="
function isEmptyArray(arr) {
    if (!arr.length) {
        return true;
    }

    return false;
}
        "
    />

    <p>
        2.Define function <code>concatPartsOfString(str1, str2, start, end)</code> which retrieve substring from
        the <code>str1</code> and <code>str2</code>, than returns concatenated result.
    </p>

    <code-snippet
        summary="Solution"
        code="
function concatPartsOfString(str1, str2, start, end) {
    const sub1 = str1.substring(start, end);
    const sub2 = str1.substring(start, end);

    return sub1.concat(sub2);
}
        "
    />

    <p>
        3. Define function <code>reverseString(str)</code> that returns reversed string.
    </p>

    <code-snippet
        summary="Solution"
        code="
function reverseString(str) {
    return str.split('').reverse().join('');
}
        "
    />
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
