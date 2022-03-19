<template>
    <h2>
        Modules
    </h2>

    <p>
        Real programs in JavaScript consist of hundreds of files.
        It lets developers to manage code in more convenient way.
    </p>

    <p>
        So, the file with JavaScript code is called <i>module</i>.
        One file is one module.
        Usually, one module contains only one class, library of function for a specific purpose.
    </p>

    <p>
        Modules can load each other and use special directives export and import to interchange functionality,
        call functions of one module from another one:
    </p>

    <ul>
        <li>
            <code>export</code>
            keyword labels variables and functions that should be accessible from outside the current module.
        </li>

        <li>
            <code>import</code>
            allows the import of functionality from other modules.
        </li>
    </ul>

    <p>
        Each module has its own top-level scope. In other words,
        top-level variables and functions from a module are not seen in other scripts.
    </p>

    <p>
        Module should <code>export</code> what they want to be accessible from outside and
        <code>import</code> what they need.
    </p>

    <code-snippet
        code="
// 1.js
const arr1 = [1, 2, 3];
function doSomething() {
    // body
}

export const user = {
    name: 'Peter',
};

// 2.js
import { user } from '1.js';
// cannot access to arr1 or doSomething()
user; // { name: 'Peter' }
        "
    />

    <p>
        If the same module is imported into multiple other modules,
        its code is executed only once, upon the first import. Then its exports are given to all further importers.
        Consider:
    </p>

    <code-snippet
        code="
// 1.js
console.log('Hello, I am from 1.js module');

// 2.js
import '1.js';
// will print 'Hello, I am from 1.js module'


// 3.js
import '1.js';
// prints nothing
        "
    />

    <p>
        There's a rule: top-level module code should be used for initialization, creation of module-specific internal data structures.
        If we need to make something callable multiple times - we should export it as a function.
    </p>

    <code-snippet
        code="
// 1.js
export function printGreeting() {
    console.log('Hello, I am from 1.js module');
}

// 2.js
import { printGreeting } from '1.js';
printGreeting();

// 3.js
import { printGreeting } from '1.js';
printGreeting();
        "
    />

    <p>
        The module is a singleton.
        <i>The singleton</i>  is a creational design pattern that allows to create only a single instance of
        an object and to share it across the system. Singletons are created once during the runtime of the application
        in the global scope.
        In case of the module, it means that any data, that module exports, are shared between other modules.
        Consider:
    </p>

    <code-snippet
        code="
// 1.js
export const user = {
    name: 'Peter',
};

// 2.js
import { user } from '1.js';
user.name = 'James';

// 3.js
import { user } from '1.js';
user.name; // 'James';
        "
    />

    <h3>
        Export and Import
    </h3>

    <p>
        We can label any declaration as exported by placing <code>export</code>
        before it, be it a variable, function or a class.
    </p>

    <code-snippet
        code="
export const names = ['Eva', 'John', 'Bob'];

export getRandomName() {
    // body
}

export class User {
    // body
}
        "
    />

    <p>
        Also, we can put <code>export</code> separately.
    </p>

    <code-snippet
        code="
export const names = ['Eva', 'John', 'Bob'];

export getRandomName() {
    // body
}

export class User {
    // body
}

export { names, getRandomName, User };
        "
    />

    <p>
        To import everything we exported above, we put list of imported things in curly braces <code>{ ... }</code>
    </p>

    <code-snippet
        code="
import { names, getRandomName, User } from 'file.js'

const user = new User();
        "
    />

    <p>
        But if there's a lot to import, we can import everything as an object using 
        <code>import * as objName</code>:
    </p>

    <code-snippet
        code="
import * as userModule from 'file.js'

const user = new userModule.User();
userModule.names; // ['Eva', 'John', 'Bob']
        "
    />

    <p>
        We can use <code>as</code> to <code>import</code> or <code>export</code> under different names:
    </p>

    <code-snippet
        code="
// 1.js
// ....
export { names as userNames, getRandomName as getRandomUserName, User as UserClass }

// 2.js

import { userNames as nameList } from '1.js';
        "
    />

    <p>
        Sometimes, it is handy to have one useful entity per a module.
        For example, the module declares only one class or function.
        With such an approach, code navigation becomes easier if files
        are well-named and structured into folders.
        So, modules provide a special <code>export default</code> syntax to make
        the "one thing per module" way look better.
    </p>

    <code-snippet
        code="
// user.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}

// main.js
import User from './user.js';

const bob = new User('Bob');
        "
    />

    <p>
        As you can see, it doesn't require using curly braces during import.
    </p>

    <p>
        <strong>There can be only one <code>export default</code> per module</strong>.
    </p>

    <p>
        The use of <code>export default</code> doesn't limit your use of "named export":
    </p>

    <code-snippet
        code="
// user.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}

export function greet(name) {
    // body
}

// main.js
import { default as User, greet } from './user.js';

const bob = new User('Bob');
greet(bob);
        "
    />

    <h3>
        Re-export
    </h3>

    <p>
        Consider such a file structure:
    </p>

    <code-snippet
        code="
/products
    statistic.js
    store.js
    product.js
    promo.js
main.js
        "
    />

    <p>
        It is a common way to organize modules.
        The "products" folder consists of all modules that are related to products.
        To use some of them, we do something like:
    </p>

    <code-snippet
        code="
// main.js
import Product from './products/product';
import { countCustomers } from './products/statistic';
import { makePromo } from './products/promo';
        "
    />

    <p>
        <strong>Note: if we import something from <code>.js</code> file in another <code>.js</code> file, 
        we may not write extension of the file</strong>
    </p>

    <p>
        These imports look verbose. We have to specify each file we import from.
        To make it in more convenient way, we can use re-export:
    </p>

    <code-snippet
        code="
/products
    statistic.js
    store.js
    product.js
    promo.js
    index.js - new file
main.js
        "
    />

    <p>
        The <code>index.js</code> will serve as accumulator of other modules.
        It is like a parent or a single entry point:
    </p>

    <code-snippet
        code="
// index.js
export { countCustomers, countClicks, showStatistic } from './statistic';
export { makePromo, listOfPromos, deletePromo } from './promo';
// re-export of the default export
export { default as Product } from './product';
        "
    />

    <p>
        Then we can use it in <code>main.js</code>:
    </p>

    <code-snippet
        code="
// main.js
import { Product, countCustomers, makePromo } from './products';
        "
    />

    <p>
        Note: we don't specify <code>'./products/index.js'</code> or <code>'./products/index'</code>.
        It is because JavaScript tries to find <code>index.js</code> file if you specify only the folder.
        This behavior specified by the JavaScript spec.
        So, <strong>to use re-export, the single entry point aka "parent" module has to have name <code>index.js</code></strong>
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
