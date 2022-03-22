<template>
    <h2>
        Implicit coercion
    </h2>

    <p>
        <i>
            Implicit
        </i>
        coercion refers to type conversions that are hidden, with non-obvious side-effects that implicitly occur
        from other actions. In other words, implicit coercions are any type conversions that aren't obvious (to you).
    </p>

    <h3>
        Strings to Numbers and vice versa
    </h3>

    <p>
        The <code>+</code> operator is overloaded to serve the purposes of both <code>number</code> addition
        and <code>string</code> concatenation.
    </p>

    <code-snippet
        code="
const num1 = 41;
const num2 = 1;

const str1 = '42';
const str2 = '0';

num1 + num2; // 42
str1 + str2; // '420';
str1 + num1 // '4141';
        "
    />

    <p>
        According to the spec, the <code>+</code> algorithm will concatenate if either operand is either already
        a <code>string</code>, or if the following steps produce a <code>string</code> representation.
        So, when <code>+</code> receives an <code>object</code> for either operand, it first calls
        the <code>ToPrimitive</code> abstract operation on the value.
        Consider:
    </p>

    <code-snippet
        code="
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// first it calls valueOf methods of arr1 to get primitive value
// arr1.valueOf() return [1, 2, 3] which is not primitive
// so, it calls toString() and receive 1,2,3
// and tries to concat it with arr2
// than repeat ToPrimitive operation on the arr2
arr1 + arr2; // 1,2,34,5,6
        "
    />

    <p>
        So, if either operand to <code>+</code> is a <code>string</code>
        (or becomes one with the above steps!), the operation will be string concatenation.
        Otherwise, it's always numeric addition.
    </p>

    <p>
        To have good understanding of what is <code>ToPrimitive</code> abstract operation, consider:
    </p>

    <code-snippet
        code="
// we just overwrite default valueOf() and toString()
const obj = {
    valueOf() {
        return 42;
    },
    toString() {
        return 4;
    }
}

const result1 = '' + obj; // '42'
// String() function implicitly calls toString() method of everything you pass in it
const result2 = String(obj) // '4'
        "
    />

    <p>
        Other mathematical operators: <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> are
        defined only for <code>number</code>s.
        This means, that values with these operators go through next steps:
    </p>

    <ul>
        <li>
            Executing the <code>ToPrimitive</code> abstract operation: calling <code>valueOf()</code> to get primitive value,
            if there is no such a value, calling <code>toString()</code> to get a stringified value.
        </li>
        <li>
            Executing the <code>ToNumber</code> abstract operation, that works like <code>Number()</code> function.
        </li>
    </ul>

    <code-snippet
        code="
const arr1 = [1];
const arr2 = [2];
const obj = {};

arr2 - arr1; // ???
obj - arr2; // ???
        "
    />

    <h3>
        Booleans to Numbers
    </h3>

    <p>
        The rule of coercing <code>boolean</code> values is quite simple - <code>true</code> is always coerced to
        <code>1</code> and <code>false</code> is always coerced to <code>0</code>. So, any mathematical operation with
        a <code>boolean</code> value is operation with <code>1</code> and <code>0</code>.
    </p>


    <code-snippet
        code="
42 - true // 41
10 + false // ??
15 / true // ??

[] - true // ??
'hello' - false // ??
        "
    />

    <h3>
        Everything to Boolean
    </h3>

    <p>
        These expressions require/force (implicitly) a <code>boolean</code> coercion:
    </p>

    <ol>
        <li>
            The test expression in an <code>if (...) {...}</code> statement
        </li>

        <li>
            The test expression (second clause) in <code>for (...; ...; ...;)</code> header
        </li>

        <li>
            The test expression in <code>while (...)</code> and <code>do {} while (...)</code> loops
        </li>

        <li>
            The test expression (first clause) in <code>... ? ... : ....</code> ternary expression
        </li>

        <li>
            The left-hand operand (which serves as a test expression) to the <code>||</code> ("logical or")
            and <code>&#38;&#38;</code> ("logical and") operators
        </li>
    </ol>

    <p>
        Any value used in these contexts that is not already a <code>boolean</code> will be implicitly coerced to a boolean using the rules of the <code>ToBoolean</code> abstract operation covered earlier.
    </p>

    <code-snippet
        code="
const answer = 42;
const undef;

if (answer) {
    console.log('always be evaluated');
}

while (undef) {
    console.log('never be evaluated');
}
        "
    />

    <!-- <p>
        The conditional (ternary) operator is the only JavaScript operator that takes three operands:
        a condition followed by a question mark (<code>?</code>), then an expression to execute if the condition
        is truthy followed by a colon (<code>:</code>), and finally the expression to execute if the condition is falsy.
        This operator is frequently used as an alternative to an <code>if...else</code> statement.
    </p>

    <code-snippet
        code="
//SYNTAX
condition ? exprIfTrue : exprIfFalse;
// =====

const obj1 = { lang: 'JavaScript' };
const obj2 = { lang: 'Python' };
const falsyVal = null;

const result = falsyVal ? obj2 : obj1;
result; // { lang: 'JavaScript' };

// is the same as follows
let result;
if (falsyVal) {
    result = obj2;
} else {
    result = obj1;
}

const isBaby = false;
const isTeenager = false;

// ternary operator can be chained with another one;
// but it is not a good practice
const drink = isBabe ? 'milk' : isTeenager ? 'tea' : 'beer';
        "
    /> -->

    <!-- <p>
        The logical OR <code>||</code> operator (logical disjunction) for a set of operands is <code>true</code>
        if and only if one or more of its operands is <code>true</code>.
        It is typically used with boolean (logical) values.
        When it is, it returns a <code>boolean</code> value.
        However, the <code>||</code> operator actually returns the value of one of the specified operands,
        so if this operator is used with non-<code>boolean</code> values,
        it will return a non-<code>boolean</code> value.
    </p>

    <code-snippet
        code="
//SYNTAX
val1 || val2 (|| valN);
// =====

const obj1 = { lang: 'JavaScript' };
const obj2 = { lang: 'Python' };

const result = obj2 || obj1;
result; // { lang: 'Python' };

// is the same as follows

const isBaby = false;
const isTeenager = false;
const isChild = false;

if (isBaby || isTeenager || isChild) {
    console.log('give him a cup of milk!')
} else {
    console.log('give him a bottle of beer!')
}

const narrator = '';
const alterEgo1 = 'Tyler Durden';
const alterEgo2 = 'Marla Singer';

const theMainCharacter = narrator || alterEgo1 || alterEgo2;
theMainCharacter; // ???
        "
    />

    <p>
        The logical AND (<code>&#38;&#38;</code>) operator (logical conjunction) for a set of <code>boolean</code>
        operands will be <code>true</code> if and only if all the operands are <code>true</code>.
        Otherwise it will be <code>false</code>.
        More generally, the operator returns the value of the first falsy operand encountered when evaluating
        from left to right, or the value of the last operand if they are all truthy.
        Consider:
    </p>

    <code-snippet
        code="
//SYNTAX
val1 && val2 (&& valN);
// =====

const obj1 = { lang: 'JavaScript' };
const obj2 = { lang: 'Python' };

const result = obj2 && obj1;
result; // { lang: 'JavaScript' };

// is the same as follows

const isBaby = true;
const isTeenager = true;
const isChild = true;

if (isBaby && isTeenager && isChild) {
    console.log('give him a cup of milk!')
} else {
    console.log('give him a bottle of beer!')
}

const narrator = '';
const alterEgo1 = 'Tyler Durden';
const alterEgo2 = 'Marla Singer';

const theMainCharacter = narrator && alterEgo1 && alterEgo2;
theMainCharacter; // ???
    "
    /> -->

    <h3>
        Loose Equals vs. Strict Equals
    </h3>

    <p>
        Loose equals is the <code>==</code> operator, and strict equals is the <code>===</code> operator.
        Both operators are used for comparing two values for "equality," but the "loose" vs. "strict"
        indicates a very important difference in behavior between the two, specifically in how they decide "equality."
        The difference is that <code>==</code> allows coercion in the equality comparison and <code>===</code> disallows coercion.
        So, if you want coercion, use <code>==</code> loose equality, but if you don't want coercion, use <code>===</code>
        strict equality.
    </p>

    <p>
        According to the JS spec, if the two values being compared are of the same type,
        they are simply and naturally compared via Identity as you'd expect.
        For example, <code>42</code> is only equal to <code>42</code>, and <code>"abc"</code> is only equal to <code>"abc"</code>.
    </p>

    <p>
        Some minor exceptions to normal expectation to be aware of:
    </p>

    <ul>
        <li>
            <code>NaN</code> is never equal to itself
        </li>

        <li>
            <code>+0</code> and <code>-0</code> are equal to each other
        </li>
    </ul>

    <p>
        If you use <code>==</code> loose equality or <code>===</code> strict equality with <code>object</code>s
        (including <code>array</code>s and <code>function</code>s), two values are only equal if they are both references to the exact same value.
        No coercion occurs here.
    </p>

    <p>
        But, what about <code>string</code> and <code>number</code>:
    </p>

    <code-snippet
        code="
const a = 42;
const b = '42';

a == b; // true
a === b; // false
        "
    />

    <p>
        According to the spec, if Type(x) is Number and Type(y) is String, return the result of the comparison x == ToNumber(y).
        If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) == y.
        So, in the example above, <code>'42'</code> coerced to <code>number</code> via <code>ToNumber</code> abstract operation.
    </p>

    <p>
        Let's compare anything to <code>boolean</code>:
    </p>

    <code-snippet
        code="
const a = '42';
const b = 42;

a == true; // false
b == true; // false
        "
    />

    <p>
        According to the spec, If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
        If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).
        So, when we use <code>==</code> loose equality where one of the values is <code>boolean</code> it is coerced to
        the <code>number</code> via <code>ToNumber</code> abstract operation.
    </p>

    <code-snippet
        code="
const a = '42';
const b = 42;


a == true; // false
// first comparing '42' == true
// second comparing '42' == 1
// third - 42 == 1, so result is false

b == true; // false
// first comparing 42 == true
// second comparing 42 == 1, so result is false
        "
    />

    <p>
        <strong>Never use <code>==</code> with <code>boolean</code> values!</strong>
    </p>

    <p>
        The <code>null</code> and <code>undefined</code> when compared with <code>==</code> loose equality,
        equate to (aka coerce to) each other (as well as themselves, obviously), and no other values in
        the entire language.
    </p>

    <code-snippet
        code="
const nullish = null;
const undef;


nullish == undef; // true
nullish == 42; // false
undef == 'hello' // false

// BUT!
nullish === undef; // false
nullish === null; // true
undef === undefined; // true
        "
    />

    <p>
        It is useful, because helps to avoid verbose code:
    </p>

    <code-snippet
        code="
const a;

if (a == null) {
    console.log('i dont care whether a is null or a is undefine')
}

if (a === null || a === undefined) {
    console.log('verbose code')
}
        "
    />

    <p>
        If we compare <code>object</code>s to non-<code>object</code>s, the spec says:
        if Type(x) is either String or Number and Type(y) is Object, return the result of the comparison x == ToPrimitive(y);
        if Type(x) is Object and Type(y) is either String or Number, return the result of the comparison ToPrimitive(x) == y.
    </p>

    <p>
        You are already grasp how <code>ToPrimitive</code> abstract operation works.
        So, it shouldn't be surprise for you:
    </p>

    <code-snippet
        code="
const num = 33;
const arr = [ 33 ];
const obj = { id: num };

num == arr; // true
num == obj; // ??
        "
    />

    <p>
        Let's examine what we learned:
    </p>

    <code-snippet
        code='
"0" == null;			// ??
"0" == undefined;		// ??
"0" == false;			// ??
"0" == NaN;				// ??
"0" == 0;				// ??
"0" == "";				// ??

false == null;			// ??
false == undefined;		// ??
false == NaN;			// ??
false == 0;				// ??
false == "";			// ??
false == [];			// ??
false == {};			// ??

"" == null;				// ??
"" == undefined;		// ??
"" == NaN;				// ??
"" == 0;				// ??
"" == [];				// ??
"" == {};				// ??

0 == null;				// ??
0 == undefined;			// ??
0 == NaN;				// ??
0 == [];				// ??
0 == {};				// ??
        '
    />

    <p>
        The most important advice I can give you: prefer to use <code>===</code> strict equals.
        But, if you want to use <code>==</code> loose equals, you should follow some rules:
    </p>

    <ol>
        <li>
            If either side of the comparison can have <code>true</code> or <code>false</code> values,
            don't ever, EVER use <code>==</code>.
        </li>

        <li>
            If either side of the comparison can have <code>[]</code>, <code>""</code>,
            or <code>0</code> values, seriously consider not using ==.
        </li>
    </ol>

    <p>
        The question of <code>==</code> vs. <code>===</code> is really appropriately framed as:
        should you allow coercion for a comparison or not?
    </p>

    <p>
        <a href="https://github.com/dorey/JavaScript-Equality-Table">Here's a handy table</a>
        made by Alex Dorey (@dorey on GitHub) to visualize a variety of comparisons.
    </p>

    <h3>
        Abstract Relational Comparison
    </h3>

    <p>
        The "Abstract Relational Comparison" algorithm essentially divides itself into two parts: what to do if the comparison involves both
        <code>string</code> values (second half), or anything else (first half).
    </p>

    <p>
        The algorithm first calls <code>ToPrimitive</code> coercion on both values, and if the return result of either call is not
        a <code>string</code>, then both values are coerced to <code>number</code> values using the <code>ToNumber</code> operation rules,
        and compared numerically.
    </p>

    <code-snippet
        code="
const a = [ 27 ];
const b = [ '28' ];

a < b; // true
b < a; // false
        "
    />

    <p>
        <code>a</code> and <code>b</code> are not coerced to <code>number</code> values because both of them end up as <code>string</code>
        after <code>ToPrimitive</code> coercion on the two <code>array</code>s. So <code>'27'</code> is compared character by
        character to <code>'28'</code>. Starting with the first characters <code>'2'</code>, then the second <code>'7'</code> and <code>'8'</code>
        respectively. Since <code>'7'</code> is lexicographically less than <code>'8'</code>, the comparison returns <code>false</code>
    </p>

    <p>
        Consider regular <code>object</code>s:
    </p>

    <code-snippet
        code="
const obj1 = { id: 33 };
const obj2 = { id: 33 };

obj1 == obj2 // ??
obj1 > obj2 // false
obj2 > obj1 // false

// BUT!
obj1 >= obj2 // true
obj1 <= obj2 // true
        "
    />

    <p>
        The spec says for <code>obj1 >= obj2</code>, it will actually evaluate <code>obj1 > obj2</code> first, and then negate that result.
        But <code>>=</code>, as other abstract relational comparison, calls <code>ToPrimitive</code>, so, both <code>object</code>s
        are coerced to <code>'[object Object]'</code> the <code>string</code>s values, which are compared character by character.
    </p>
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