<template>
    <h2>
        Mysterious <code>this</code>
    </h2>

    <p>
        The function that is a property of an <code>object</code> is called <i>method</i>.
        To create <i>method</i> of the <code>object</code>, you can use follow syntax:
    </p>

    <code-snippet
        code="
// first way
const obj1 = {};
obj1.doSomething = function() {
    // func body
}

// second way
const obj2 = {
    doSomething: function() {
        // func body
    }
};

// third and the most popular way
const obj3 = {
    doSomething() {
        // func body
    }
}
        "
    />

    <p>
        We use <code>object</code>s' methods to do something useful with them or to encapsulate
        several similar methods and use its <code>object</code> as "swiss knife" of methods.
        Consider:
    </p>

    <code-snippet
        code="
const coffeeMachine = {
    amountOfCoffeeKg: 20,
    waterAmountL: 30,
    makeCoffee() {
        // func body
    },
    boilWater() {
        // func body
    },
    roastCoffee() {
        // func body
    },
}
        "
    />

    <p>
        By the way, it is a good practice to use verbs to give names for functions or methods.
    </p>

    <p>
        As you can see, our <code>coffeeMachine</code> encapsulates some data and methods for coffee preparing.
        <i>Encapsulation</i> is a process of binding the data (i.e. variables) with the functions acting on that data. 
    </p>

    <p>
        So, our <code>coffeeMachine</code> needs to know <code>amountOfCoffeeKg</code> to make coffee,
        <code>waterAmountL</code> to boil water etc.
        <strong>To access the object, a method can use the <code>this</code> keyword.</strong>
        The value of <code>this</code> is the <code>object</code> "before dot", the one used to call the method.
        For example:
    </p>

    <code-snippet
        code="
const coffeeMachine = {
    amountOfCoffeeKg: 20,
    waterAmountL: 30,
    makeCoffee() {
        if (this.amountOfCoffeeKg <= 0) {
            console.log('need coffee to make');
        }

        console.log('making coffee');
    },
    boilWater() {
        // func body

    },
    roastCoffee() {
        // func body
    },
}
        "
    />

    <p>
        During execution of <code>coffeeMachine.makeCoffee()</code> the value of <code>this</code> will be <code>coffeeMachine</code>.
        Of course, we can use <code>coffeeMachine</code> itself to make reference to the <code>object</code>.
        But such code will be unreliable. If we decide to copy <code>coffeeMachine</code> in another variable,
        than it will access the wrong data.
    </p>

    <code-snippet
        code="
const coffeeMachine = {
    amountOfCoffeeKg: 20,
    waterAmountL: 30,
    makeCoffee() {
        // get rid of 'this'
        if (coffeeMachine.amountOfCoffeeKg <= 0) {
            console.log('need coffee to make');
        }

        console.log('making coffee');
    },
    boilWater() {
        // func body

    },
    roastCoffee() {
        // func body
    },
}

const newCoffeeMachine = coffeeMachine;
// kill reference to coffeeMachine object
coffeeMachine = null;

newCoffeeMachine.makeCoffee(); //  TypeError: Cannot read property 'amountOfCoffeeKg' of null
        "
    />

    <p>
        The value of <code>this</code> is evaluated during the run-time, depending on the context.
        For instance:
    </p>

    <code-snippet
        code="
function sayMyName() {
    console.log('My name is ', this.name);
}

const john = {
    name: 'John',
}

const alex = {
    name: 'Alex',
}

john.sayMyName = sayMyName;
alex.sayMyName = sayMyName;

john.sayMyName(); // 'My name is John'
alex.sayMyName(); // 'My name is Alex'
        "
    />

    <p>
        You have to remember, that a value of <code>this</code> depends on the context or "location" where a function/method
        is called!
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
