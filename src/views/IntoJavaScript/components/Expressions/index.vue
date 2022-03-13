<template>
    <h2>
        Expressions
    </h2>

    <p>
        Statements are mede up of any number of expressions.
        An expression is any reference to a variable or value, or a set of variable(s) and value(s) combined with operators.
        For example:
    </p>

    <code-snippet
        code="const answer = 41 + x;"
    />

    <div>
        The statement has four expressions in it:
        <ul>
            <li>
                <code>
                    41
                </code>

                is a <i>literal value expression</i>
            </li>

            <li>
                <code>
                    x
                </code>

                is a <i>variable expression,</i>
                which means to retrieve its current value
            </li>

            <li>
                <code>
                    41 + x
                </code>

                is an <i>arithmetic expression,</i>
                which means to do the addition
            </li>

            <li>
                <code>
                    const answer = 41 + x
                </code>

                is an <i>assignment expression,</i>
                which means to assign the result of the
                <code>41 + x</code>
                expression to the variable
                <code>answer</code>
            </li>
        </ul>

        <p>
            The more common expression statement is <i>call expression</i>, as the entire statement is the function
            call expression itself
        </p>


        <code-snippet
            :code='`alert("Hello, world!")`'
        />
    </div>
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
