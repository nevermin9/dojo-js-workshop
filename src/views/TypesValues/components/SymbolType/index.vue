<template>
    <h2>
        Symbol
    </h2>

    <p>
        The <code>Symbol</code> is a built-in object whose constructor returns a <code>symbol</code> primitive -
        also called a <i>Symbol value</i> or just <i>Symbol</i> - that's guaranteed to be unique.
        Symbols are often used to add unique property keys to an object that won't collide with keys any
        other code might add to the object, and which are hidden from any mechanisms other code will
        typically use to access the object. 
    </p>

    <p>
        <code>Symbol</code> creating:
    </p>

    <code-snippet
        code="
// between parentheses you can put value of any type
// it serves as a 'description' of the created Symbol
const sym1 = Symbol('hello');
const sym2 = Symbol('hello');
typeof sym1 // 'symbol'

sym1 === sym2 // false
        "
    />

    <p>
        You can think about <code>Symbol</code> as an unique key for <code>object</code>. Unique for a whole codebase
        aka program. This property key will be hidden from iteration over object keys.
    </p>

    <code-snippet
        code="
const obj = {};
obj[Symbol('hidden')] = {
    id: '05041994',
    active: false,
};
obj.name = 'Kurt';
obj.age = 27;


// Object.keys(object) - it's a method of the global Object
// it returns array of keys of any object you pass in
// except Symbol-keys;
for (const key of Object.keys(obj)) {
    console.log(key); // prints 'name', 'age'
}

// in example above
// Object.keys(obj) return ['name'. 'age']
        "
    />

    <p>
        To get <code>Symbol</code> keys of the <code>object</code> we should use
        <code>Object.getOwnPropertySymbols(object)</code>
    </p>

    <code-snippet
        code="
const obj = {};
obj[Symbol('hidden')] = {
    id: '05041994',
    active: false,
};
obj.name = 'Kurt';
obj.age = 27;

// As Object.keys, Object.getOwnPropertySymbols return array of keys
// but only keys which are Symbols.
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(hidden) ]
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