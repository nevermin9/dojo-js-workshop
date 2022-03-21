<template>
    <h2>
        Operators
    </h2>

    <p>
        Operators are how we perform actions on variables and values.
    </p>

    <p>
        Consider:
    </p>

    <code-snippet
        code="
let a = 41;
let b = a + 1;
        "
    />

    <p>
        You should always declare the variable by name before you use it.
        But you only need to declare a variable once for each <i>scope</i>;
        it can be used as many times after that as needed.
    </p>

    <p>
        Here the most common operators in JavaScript

        <ul>
            <li>
                assignment
                <code>=</code>
            </li>

            <li>
                Math:
                <code>+</code>
                for addition;
                <code>-</code>
                for subtraction;
                <code>*</code>
                for multiplication;
                <code>/</code>
                for division;
                <code>%</code>
                modulus operator. Returns remainder of two operands.
                (e.g. 5 % 2 = 1)
            </li>

            <li>
                Compound assignment.
                <code>+=</code>,
                <code>-=</code>,
                <code>*=</code>,
                <code>/=</code>,
                <code>%=</code>
                - combine a math operators with assignment
                ( e.g. <code>a += 2</code> the same as <code>a = a + 2</code> )
            </li>

            <li>
                Increment <code>++</code> and decrement <code>--</code>
                (e.g. <code>a++</code> is the same as <code>a = a + 1</code> )
            </li>

            <!-- <li>
                Object property access, e.g. <code>.</code> in <code>console.log</code>.

                Objects are values that hold other values at specific named locations called properties.
                <code>obj.a</code> means an object value called
                <code>obj</code> with a property of the name <code>a</code>.
                Properties can alternatively be accessed as <code>obj["a"]</code>.
            </li> -->

            <li>
                Equality.
                <code>==</code>
                loose-equals;
                <code>===</code>
                strict equals;
                <code>!=</code>
                loose not-equals;
                <code>!==</code>
                strict not-equels;

                (e.g. <code>a == b</code> )
            </li>

            <li>
                Comparison.
                <code>&#60;</code>
                less than;
                <code>&#62;</code>
                greater than;
                <code>&#60;=</code>
                less than or loose-equals;
                <code>&#62;=</code>
                greater than or loose-equals;

                (e.g. <code>a >= b</code> )
            </li>

            <!-- <li>
                Logical operators;
                <code>&#38;&#38;</code>
                and;
                <code>||</code>
                or;
                <code>!</code>
                not;
                
                in <code>a || b</code> JS should select <code>a</code> OR <code>b</code>,
                depend on which variable consist of <i>truthy</i> value
            </li> -->
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
