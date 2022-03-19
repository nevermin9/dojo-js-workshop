<template>
    <h2>
        Prototypes
    </h2>

    <p>
        <strong>There is no classic OOP in JavaScript.</strong>
        There is just an "imitation" of OOP.
        And it is quite powerful imitation of OOP. It is so powerful that it is enough to
        build complex systems and interfaces.
        To resolve classic problems of OOP, JavaScript uses <code>[[Prototype]]</code> mechanism.
    </p>

    <p>
        <code>[[Prototype]]</code> is internal property of every <code>object</code> in JavaScript.
        This property just holds a reference to another <code>object</code>. This referenced <code>object</code> is called
        "a prototype".
        When we read some property or method from <code>object</code> and it's missing, JavaScript automatically 
        takes it from the prototype.
    </p>

    <p>
        <code>[[Prototype]]</code> is internal and hidden property. But there is many ways to set it.
        For example, using <code>__proto__</code> property:
    </p>

    <code-snippet
        code="
const electricDevice = {
    hasBattery: true,
};

const phone = {
    hasScreen: true,
};

phone.__proto__ = electricDevice;

phone.hasBattery; // true
        "
    />

    <p>
        Here we can say, that <code>electricDevice</code> is prototype of <code>phone</code>. Or <code>phone</code>
        <strong>prototypically inherits</strong> from <code>electricDevice</code>.
        This prototype chain can be longer:
    </p>

    <code-snippet
        code="
const electricDevice = {
    hasBattery: true,
};

const phone = {
    hasScreen: true,
};

phone.__proto__ = electricDevice;

const smartphone = {
    hasKeyboard: false,
    __proto__: phone,
};

smartphone.hasBattery; // true
smartphone.hasScreen; // true
        "
    />

    <p>
        There are only two limitations:
        <ol>
            <li>
                The references can't go in circles. JavaScript will throw an error if we try to assign <code>__proto__</code> in a circle.
            </li>
            <li>
                The value of <code>__proto__</code> can be either an <code>object</code> or <code>null</code>.
                Other types are ignored.
            </li>
            <li>
                There can be only one <code>[[Prototype]]</code>. There is no multiple inheritance in JavaScript
            </li>
        </ol>
    </p>

    <p>
        The real power of code appears when we use <code>this</code> keyword with <code>[[Prototype]]</code> mechanism.
        Consider:
    </p>

    <code-snippet
        code="
const agent = {
    getFirstName() {
        return this.firstName;
    },
    getLastName() {
        return this.lastName;
    },
    introduceMyself() {
        console.log(`Hello, my name is ${this.getFirstName()} ${this.getLastName()}.`);
    }
}

const bond = {
    firstName: 'James',
    lastName: 'Bond',
    __proto__: agent
}

bond.introduceMyself(); // Hello, my name is James Bond.
        "
    />

    <p>
        <code>this</code> is not affected by prototypes at all.
        Remember the rule: <strong>No matter where the method is found: in an object or its prototype.
        In a method call, <code>this</code> is always the object before the dot.</strong>
        That is actually a super-important thing, because we may have a big object with many methods,
        and have objects that inherit from it. And when the inheriting objects run the inherited methods,
        they will modify only their own states, not the state of the big object.
    </p>

    <p>
        It is worth to mention, that the prototype is only used for reading properties.
        Writing or deleting work directly with the <code>object</code>:
    </p>

    <code-snippet
        code="
const agent = {
    getFirstName() {
        return this.firstName;
    },
    getLastName() {
        return this.lastName;
    },
    introduceMyself() {
        console.log(`Hello, my name is ${this.getFirstName()} ${this.getLastName()}.`);
    }
}

const bond = {
    firstName: 'James',
    lastName: 'Bond',
    __proto__: agent,
}

const mason = {
    firstName: 'Jack',
    lastName: 'Mason',
    __proto__: agent,
}

bond.introduceMyself = function() {
    console.log(`Hello, my name is ${this.getLastName()}, ${this.getFirstName()} ${this.getLastName()}.`)
}

// using new added version of the introduceMyself() method
bond.introduceMyself(); // Hello, my name is Bond, James Bond.

// using the 'inherited' introduceMyself() method
mason.introduceMyself(); // Hello, my name is Jack Mason.
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
