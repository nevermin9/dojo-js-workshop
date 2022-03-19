<template>
    <h2>
        Tasks
    </h2>

    <p>
        1.Define function <code>congratulate(name)</code>.
        Function should return string like 'Happy Birthday, Bob!';
    </p>

    <code-snippet
        summary="Solution"
        code="
function congratulate(name) {
    return `Happy, Birthday, ${name}`;
}

const solution = congratulate('James');
        "
    />

    <p>
        2. Define object <code>dog</code> with such parameters: a name, color, a breed.
        Then define functions <code>getDogName(dog)</code>, <code>getDogColor(dog)</code> and
        <code>getDogBreed(dog)</code>. Use different types of notations to get property values.
        Variable solution must be an <code>array</code>. Every element of the array have to be a result of 
        execution of these functions.
    </p>

    <code-snippet
        summary="Solution"
        code="
const dog = {
    name: 'Cezar',
    color: 'black',
    breed: 'dachshund',
};

function getDogName(dog) {
    return dog.name;
}

function getDogColor(dog) {
    return dog['color'];
}

function getDogBreed(dog) {
    const key = 'breed';
    return dog[key];
}

const solution = [getDogName(dog), getDogColor(dog), getDogBreed(dog)];
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
