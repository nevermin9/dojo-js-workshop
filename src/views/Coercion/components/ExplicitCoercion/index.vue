<template>
    <h2>
        Explicit coercion
    </h2>

    <p>
        <i>Explicit</i> coercion refers to type conversions that are obvious and explicit.
    </p>

    <h3>
        Strings to Numbers and vice versa
    </h3>

    <p>
        First way is using <code>Number</code> and <code>String</code> functions:
    </p>

    <code-snippet
        code="
const a = 42;
const b = '3.14';

String(a); // '42'
Number(b); // 3.14
        "
    />

    <p>
        Second way is using <code>toString()</code> to convert <code>number</code> to <code>string</code>,
        and <code>+</code> operator to convert <code>string</code> to <code>number</code>:
    </p>

    <code-snippet
        code="
const a = 42;
const b = '3.14';

a.toString(); // '42'
+b; // 3.14
        "
    />

    <p>
        Another way to convert <code>string</code> to <code>number</code> is using <code>parseInt</code> or
        <code>parseFloat</code> built-in global methods.
    </p>

    <code-snippet
        code="
const b = '3.14';
const c = '100500';

parseFloat(b) // 3.14
parseInt(c) // 100500
parseInt(b) // 3
        "
    />

    <p>
        The difference between using <code>Number</code> constructor and <code>parseInt</code> (or <code>parseFloat</code>)
        is the latter more reliable, because it parse <code>string</code> by character, and if it encounters a character that is not
        converted to a <code>number</code> value, <code>parseInt</code> ignores it and all succeeding characters and returns the integer value parsed up to that point.
        Consider:
    </p>

    <code-snippet
        code="
const b = '30px';
const c = '100500meters';
const nonParsable = 'awesome2008';

Number(b); // NaN
Number(c); // NaN
Number(nonParsable); // NaN
parseInt(b); // 30
parseInt(c); // 100500
parseInt(nonParsable); // NaN
        "
    />

    <h3>
        Everything to Boolean
    </h3>

    <p>
        First way is using <code>Boolean</code> function
    </p>

    <code-snippet
        code="
const arr = [1, 2, 3];
const hello = 'hello';
const zero = 0;

Boolean(arr); // true
Boolean(hello); // true
Boolean(zero); // false
        "
    />

    <p>
        Via the unary operator <code>!</code>.
        Operator <code>!</code> (which literally means "NOT") coerces value to a <code>boolean</code> value and
        flips he value from truthy to falsy or vice versa.
    </p>

    <code-snippet
        code="
const a = '0';
const b = [];
const c = {};

const d = '';
const e = 0;
const f = null;
const g;

!a; // false
!!a; // true

!b; // false
!!b; // true

!c; // false
!!c; // true

!!d; // ??
!!e; // ??
!!f; // ??
!!g; // ??
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