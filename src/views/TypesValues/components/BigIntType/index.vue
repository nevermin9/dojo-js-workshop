<template>
    <h2>
        BigInt
    </h2>

    <p>
        In JavaScript, the “number” type cannot represent integer values larger than
        <code>(2<sup>53</sup>-1)</code> (that's <code>9007199254740991</code>),
        or less than <code>-(2<sup>53</sup>-1)</code> for negatives.
        It's a technical limitation caused by their internal representation.
    </p>

    <p>
        For most purposes that's quite enough, but sometimes we need really big numbers, e.g. for cryptography or microsecond-precision timestamps.
    </p>

    <p>
        <code>BigInt</code> type was recently added to the language to represent integers of arbitrary length.
    </p>

    <p>
        A <code>BigInt</code> value is created by appending <code>n</code> to the end of an integer:
    </p>

    <code-snippet
        code="
const reallyBigInteger = 234234234234275688556433n;
        "
    />

    <p>
        As <code>BigInt</code> are rarely needed, we won't cover them here.
        If you want to get info about <code>BigInt</code>, you can visit:
        <ul>
            <li>
                <a href="https://javascript.info/bigint">Javascript.info: BigInt</a>
            </li>
            <li>
                or <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt">MDN docs</a>
            </li>
        </ul>
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