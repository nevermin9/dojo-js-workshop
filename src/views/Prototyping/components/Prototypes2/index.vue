<template>
    <h2>
        Prototypes. Second part
    </h2>

    <p>
        We already know about built-in objects <code>Number</code>, <code>String</code>, <code>Array</code>,
        <code>Object</code> etc.
        But, to call these built-in objects <i>function constructors</i> is more correct.
        They are constructors because you can "construct" aka instantiate <code>object</code>s from them via
        <code>new</code> keyword.
    </p>

    <code-snippet
        code="
// we already know, that is not good idea
const numObj = new Number(42);

// because...
typeof numObj // 'object'

// it's a function, because we can use it like function
const num = Number('300');
// just coerce string to number
num; // 300

        "
    />

    <p>
        What does it give us? It give us access to useful methods:
    </p>

    <code-snippet
        code="
const numObj = new Number(42);
numObj.toFixed(1); // '42.0'
        "
    />

    <p>
        We don't need to use function constructors for primitives to use this built-in useful methods.
        JavaScript do it for us every time we try to access them.
        It creates temporary wrapper objects using these built-in constructors.
    </p>

    <code-snippet
        code="
const justNum = 42;
// invisibly wraps - Number(justNum)
justNum.toString(); // '42'
        "
    />

    <p>
        The non-primitives work in similar way. When you defined <code>object</code>, <code>array</code> or
        others subtypes of <code>object</code>, this <code>object</code> has access to useful methods as well.
    </p>

    <code-snippet
        code="
const obj = {};
obj.toString() // '[object Object]'

const arr = [];
arr.push('hello');
        "
    />

    <p>
        But JavaScript doesn't create temporary wrappers around them.
        Because they are already <code>object</code>s. It means, they already have some properties and methods to work
        with them. But where do they keep these properties and methods?
        The answer is <code>[[Prototype]]</code>.
    </p>

    <p>
        In case of <code>object</code>, when we create it via <code>{...}</code> literal syntax or via <code>new Object()</code>,
        the <code>[[Prototype]]</code> of it set to <code>Object.prototype</code>.
        In case of <code>number</code> (or other primitives), when we <strong>use</strong> it, JavaScript wraps this primitive in
        <code>Number()</code> object, which <code>[[Prototype]]</code> set to <code>Number.prototype</code>.
        In case of <code>array</code> when we create it via <code>[]</code> literal or via <code>new Array()</code>,
        <code>[[Prototype]]</code> of it set to <code>Array.prototype</code>.
        It gives us access to methods like <code>toString()</code>.
        Consider:
    </p>

    <code-snippet
        code="
const num = 42;
const obj = {};

num.__proto__ === Number.prototype // true;
num.toString === num.__proto__.toString // true;
num.toString === Number.prototype.toString // true;

obj.__proto__ === Object.prototype // true;
obj.toString === obj.__proto__.toString // true;
obj.toString === Object.prototype.toString // true;
        "
    />

    <p>
        But! <code>[[Prototype]]</code> and <code>prototype</code> are different things.
        As we learned in previous section, <code>[[Prototype]]</code> is just a property that keeps reference to some object.
        In case of built-in objects, <code>[[Prototype]]</code> property links to appropriate <code>prototype</code> object.
        Consider:
    </p>

    <code-snippet
        code="
const electronicDevice = {
    hasBattery: true;
}

// define function, ie constructor function
function Phone(name) {
    // 'this' will point to the newly created object
    this.name = name;
}

Phone.prototype = electronicDevice;

// using 'new' keyword to create object, aka instantiate from function constructor
const nokia = new Phone('Nokia');

nokia.hasBattery; // true
        "
    />

    <p>
        Setting <code>Phone.prototype = electronicDevice</code> literally states the following:
        "When a <code>new Phone</code> instance is created, assign its <code>[[Prototype]]</code> to <code>electronicDevice</code>".
    </p>

    <p>
        So, as was mentioned before, there is no classic OOP in JavaScript. Because unlike classic OOP
        languages, where real classes are used to create new instances, JavaScript uses functions.
        To simulate inheritance, it uses <code>[[Prototype]]</code> mechanism. In the real OOP languages,
        multiple copies (aka, "instances") of a class can be made, like stamping something out from a mold.
        This happens because the process of instantiating (or inheriting from) a class means,
        "copy the behavior plan from that class into a physical object", and this is done again for each new instance.
        But in JavaScript, there are no such copy-actions performed. You don't create multiple instances of a class.
        You can create multiple objects that <code>[[Prototype]]</code> link to a common object. But by default, no copying occurs,
        and thus these objects don't end up totally separate and disconnected from each other, but rather, quite linked.
    </p>

    <p>
        For example, as the JS spec says, all of the built-in prototypes have <code>Object.prototype</code> on the "top".
        That means, that all these built-it prototypes, such <code>Number.prototype</code>, <code>String.prototype</code>,
        <code>Array.prototype</code> etc link to <code>Object.prototype</code>, which links to <code>null</code>.
        We can illustrate it like:
    </p>

    <div class="image-wrapper">
        <img src="@/assets/images/prototype-scheme.jpg" />
    </div>

    <p>
        Some methods in prototypes may overlap, for instance, <code>Array.prototype</code> has its own <code>toString</code>
        that lists comma-delimited elements:
    </p>

    <code-snippet
        code="
const obj = {};
const arr = [1, 2, 3];

// real Polymorphism
// both objects have toString()
// but every of them implement it in own way
obj.toString(); // '[object Object]'
arr.toString(); // 1,2,3
        "
    />

    <p>
        All of this gives us ability to simulate classic OOP in JavaScript and use it to resolve our problems. Recall
        'Middle-earth-Book'. We can create hierarchies of objects, encapsulate similar logic,
        extend facilities of some objects and more.
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
