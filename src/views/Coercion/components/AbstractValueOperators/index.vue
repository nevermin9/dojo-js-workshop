<template>
    <h2>
        Abstract value operators
    </h2>

    <p>
        The JavaScript spec defines several "abstract operations" (i.e. "internal-only operations") -
        <code>ToString</code>, <code>ToNumber</code>, <code>ToBoolean</code> and <code>ToPrimitive</code>.
        This operations are used by JS engine under the hood.
    </p>

    <p>
        When any <i>non-string</i> value is coerced to a <code>string</code>, the conversion is handled by the
        <code>ToString</code> abstract operation.
        Built-in primitive values have natural stringification:
    </p>

    <ul>
        <li>
            <code>null</code> becomes <code>"null"</code>
        </li>
        <li>
            <code>undefine</code> becomes <code>"undefine"</code>
        </li>
        <li>
            <code>true</code> and <code>false</code> become <code>"true"</code> and <code>"false"</code>
        </li>
        <li>
            <code>number</code>s are generally expressed in the natural way you'd expect, but very large
            or very small <code>number</code>s are represented in exponent form:

            <code-snippet
                code="
// multiplying `1.07` by `1000`, seven times over
const a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;

// seven times three digits => 21 digits
a.toString(); // '1.07e21'
                "
            />
        </li>

        <li>
            With <code>object</code>s situation is little bit more complicated. Every <code>object</code>, include its
            subtype, has <code>toString()</code> method. This method is inherited from <code>Object.prototype</code>.
            So, <code>toString()</code> of the regular <code>object</code> will return <code>'[object Object]'</code>, where
            <code>Object</code> is gotten from the <code>[[Class]]</code> property.
            It is internal property of the <code>object</code>, that is used by JS engine.
            You will never use this property, it is used under the hood.
            <code-snippet
                code="
const obj = { foo: 'foo' };
const implicit = '' + obj;
const explicit = obj.toString();
implicit; // '[object Object]'
explicit; // '[object Object]'
                "
            />

            <code>array</code>, like subtype of <code>object</code>, has inherited <code>toString()</code> method as well.
            But it is overwritten and return string of the of all its elements with "," between each value.
            <code-snippet
                code="
const arr = [1, 2, 3];
const implicit = '' + arr;
const explicit = arr.toString();
implicit; // '1,2,3'
explicit; // '1,2,3'
                "
            />

            <code>function</code>s has <code>toString()</code> too.
            And it is overwritten and return stringified function and its body.

            <code-snippet
                code="
function stringMe() {
return 42;
}

const implicit = '' + stringMe;
const explicit = stringMe.toString();
implicit; // 'function stringMe() {\n    return 42;\n}'
explicit; // 'function stringMe() {\n    return 42;\n}'
                "
            />
        </li>
    </ul>

    <p>
        If any <i>non-number</i> value is used in a way that requires it to be a <code>number</code>, such as a mathematical operation,
        the spec defines the <code>toNumber</code> abstract operation.
    </p>

    <ul>
        <li>
            <code>true</code> becomes <code>1</code>, <code>false</code> becomes <code>0</code>
        </li>

        <li>
            <code>undefined</code> becomes <code>NaN</code>
        </li>

        <li>
            <code>null</code> becomes <code>0</code>
        </li>

        <li>
            <code>ToNumber</code> for a <code>string</code> value essentially works for the most part like the rules/syntax for numeric literals.
            If it fails, the result is <code>NaN</code>.
            <code-snippet
                code="
const str1 = '42';
const str2 = 'a42';
const str3 = '42b';

Number(str1); // 42
Number(str2); // NaN
Number(str3); // NaN
                "
            />
        </li>

        <li>
            <code>object</code>s and <code>array</code>s will first be converted to their primitive value equivalent, and the resulting value
            is coerced to a <code>number</code> according to the <code>ToNumber</code> rules just mentioned.
            To convert to this primitive value equivalent, the <code>ToPrimitive</code> abstract operation will consult the value
            in question to see if it has a <code>valueOf()</code> method. If <code>valueOf()</code> is available and returns
            a primitive value, <strong>that</strong> value is used for the coercion. If not, but <code>toString()</code> is available,
            it will provide the value for the coercion.
            Worth to mention, that methods <code>valueOf</code> and <code>toString</code> are inherited by all <code>objects</code>
            from <code>Object.prototype</code>.

            <code-snippet
                code="
const obj = { name: 'Anonym' };
obj.valueOf(); // { name: 'Anonym' } -- non-primitive, so 'obj.toString()' will be used
const result = Number(obj);
result; // ????
                "
            />
        </li>
    </ul>

    <p>
        The abstract operation <i>ToBoolean</i> just takes an argument and returns a <code>boolean</code>.
        It converts argument to a value of type Boolean according to the JS spec.
        According to the JS spec, all of JavaScript's values can be divided into two categories:
    </p>

    <ol>
        <li>
            values that will become <code>false</code> if coerced to <code>boolean</code>
        </li>

        <li>
            everything else (which will obviously become <code>true</code>)
        </li>
    </ol>

    <p>
        The spec's table of "falsy" values include:
    </p>

    <ul>
        <li>
            <code>undefined</code>
        </li>
        <li>
            <code>null</code>
        </li>
        <li>
            <code>false</code>
        </li>
        <li>
            <code>+0</code>, <code>-0</code>, <code>NaN</code>
        </li>
        <li>
            <code>''</code> - empty string
        </li>
    </ul>

    <p>
        That's it. If a value is on that list, it's a "falsy" value, and it will coerce to <code>false</code>
        if you force a <code>boolean</code> coercion on it.
    </p>

    <p>
        By logical conclusion, if a value is not on that list, it must be on another list, which we call the "truthy"
        values list. But JS doesn't really define a "truthy" list per se. It gives some examples,
        such as saying explicitly that all objects are truthy, but mostly the spec just implies:
        <strong>anything not explicitly on the falsy list is therefore truthy.</strong>
    </p>

    <code-snippet
        code="
Boolean(undefined); // false
Boolean(null); // false
Boolean(''); // false
Boolean(0); // false
Boolean(NaN); // false

Boolean(42); // true
Boolean('foo'); // true
Boolean({}); // true
Boolean([]); // true
Boolean(function test() {}); // true
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