<template>
    <h2>
        Undefined
    </h2>

    <p>
        The type <code>Undefined</code> type has exactly one value, called <code>undefined</code>.
        Any variable that has not been assigned a value has the value undefined.
    </p>

    <code-snippet 
        code="
let a;
typeof a; // 'undefined'
        "
    />

    <p>
        It is worth to mention, there is a difference between <code>undefined</code> and 'undeclared'.
        An <code>undefined</code> variable is one that has been declared in the accessible scope,
        but at the moment has no other value in it.
        By contrast, an "undeclared" variable is one that has not been formally declared in the accessible scope.
    </p>

    <code-snippet
        code="
let a;
a; // unefined
b; // ReferenceError: b is not defined
        "
    />

    <p>
        But for undeclared variable <code>typeof</code> still returns <code>undefined</code>
    </p>

    <code-snippet
        code="
let a;
typeof a; // unefined
typeof b; // undefined
        "
    />

    <p>
        Notice that there was no error thrown when we executed <code>typeof b</code>,
        even though <code>b</code> is an undeclared variable.
        This is a special safety guard in the behavior of <code>typeof</code>.
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