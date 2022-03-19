<template>
    <h2>
        Tasks
    </h2>

    <p>
        1. Create function <code>multiply</code> which accept arbitrary number of parameters and returns their product.
    </p>

    <code-snippet
        summary="Solution"
        code="
function multiply(...nums) {
    let result = 1;

    for (const num of nums) {
        result *= num;
    }

    return result;
}

multiply(12, 23, 1, 32, 3)

        "
    />

    <p>
        2. Create function <code>getVolume</code> which calculate volume of any box.
        Box is an <code>object</code>, with width, height, length properties.
        Use destructing assignment.
    </p>

    <code-snippet
        summary="Solution"
        code="
function getVolume({ width, height, length }) {
    return width * height * length;
}

const box1 = {
    width: 100,
    height: 200,
    length: 20,
}

getVolume(box1);
        "
    />

    <p>
        3. There is <code>group</code> object:
    </p>

    <code-snippet
        code="
const group = {
    'John': 28,
    'Kate': 12,
    'Tyler': 55,
};
        "
    />

    <p>
        Create function <code>getTheOldest</code> that returns string like '${name} is ${years} years old';
        If <code>group</code> is empty, function should return <code>null</code>; <br>
        Tip: use <code>Object.entries</code>.
    </p>

    <code-snippet
        summary="Solution"
        code="
function getTheOldest(group) {
    const entries = Object.entries(group);

    if (!entries.length) {
        return null;
    }

    let nameOfOldest = '';
    let ageOfOldest = 0;

    for (const [name, age] of entries) {
        if (age > ageOfOldest) {
            nameOfOldest = name;
            ageOfOldest = age;
        }
    }

    return `${nameOfOldest} is ${ageOfOldest} years old`;
}
        "
    />


</template>

<script lang="ts">
import { defineComponent } from "vue"
import CodeSnippet from "@/components/CodeSnippet/index.vue"

export default defineComponent({
    components: {
        CodeSnippet,
    }
})
</script>


