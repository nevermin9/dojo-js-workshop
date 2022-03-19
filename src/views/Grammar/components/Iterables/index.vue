<template>
    <h2>
        Iterables
    </h2>

    <p>
        <code>for..of</code> loop is more convenient way to iterate over <code>array</code>s
    </p>

    <code-snippet
        code="
const arr = [1, 2, 3];

for (const element of arr) {
    console.log(element); // 1, 2, 3
}
        "
    />

    <p>
        Also <code>for..of</code> loop is used to iterate over <i>iterable</i> objects.
        <i>Iterable</i> object is object, that implement the <code>@@iterator</code> method,
        meaning that the object must have a property with a <code>@@iterator</code> key
        which is available via constant.
        To understand the details, visit <a href="https://javascript.info/iterable">this tutorial</a>.
    </p>

    <p>
        <code>Array</code>, <code>String</code>,
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"><code>Map</code></a>,
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set</code></a> are
        iterable objects. It gives us ability to use <code>for...of</code> with these data types.
    </p>

    <code-snippet
        code="
const str = 'hello';

for (const element of str) {
    console.log(element); // 'h','e','l','l','o'
}
        "
    />

    <p>
        <code>object</code>s are not iterable. But we can use <code>Object.keys</code> to get <code>array</code> of keys:
    </p>

    <code-snippet
        code="
const options = {
    color: 'red',
    width: 400,
    height: 500,
};

// Object.keys(obj) returns array of [ 'color', 'width', 'height' ];
for (const key of Object.keys(options)) {
    console.log(element); // 'color', 'width', 'height'
}
        "
    />

    <p>
        Or <code>Object.values</code> to get <code>array</code> of values:
    </p>

    <code-snippet
        code="
const options = {
    color: 'red',
    width: 400,
    height: 500,
};

// Object.values(obj) returns array of [ 'red', 400, 'height' ];
for (const key of Object.keys(options)) {
    console.log(element); // 'color', 'width', 'height'
}
        "
    />

    <p>
        <code>Object.entries</code> returns two dimensional <code>array</code>, where every includes <code>[key, value]</code>
        pair. With the destructing assignment, it is powerful way to iterate over <code>object</code>'s data.
    </p>

    <code-snippet
        code="
const options = {
    color: 'red',
    width: 400,
    height: 500,
};

// Object.entries(obj) returns array of [ ['color', 'red'], ['width', 400], ['height', 500] ];
for (const [key, value] of Object.entries(options)) {
    console.log(key + ' ' + value); // 'color red', 'width 400', 'height 500'
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
