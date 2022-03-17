<template>
    <h2>
        ES6 Classes
    </h2>

    <p>
        JavaScript had been created for people. It have to look like other languages, thereby made developers from
        other languages feel more comfortable and start working faster.
        Therefore, syntax should look familiar for them. So, creators of JavaScript decided to make simulation of OOP
        in more understandable way.
        For this purpose, ES6 (EcmaScript 6 "version") introduces new "class" syntax.
    </p>

    <p>
        For example, before ES6, to create "class", (as we already know, it is constructor function), we should use syntax like:
    </p>

    <code-snippet
        code="
function User(name, age) {
    this.name = name;
    this.age = age;
}

// than, all methods should be added to prototype
User.prototype.printName = function() {
    console.log(this.name);
}

User.prototype.printAge = function() {
    console.log(this.age);
}

// and use it

const jack = new User('Jack', 26);
const john = new User('John', 32);
        "
    />

    <p>
        In modern JavaScript, the same code will look like:
    </p>

    <code-snippet
        code="
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printName() {
        console.log(this.name);
    }

    printAge() {
        console.log(this.age);
    }
}

// and use it

const jack = new User('Jack', 26);
const john = new User('John', 32);
jack.printName(); // 'Jack'
        "
    />

    <p>
        What exactly is a <code>class</code>? Let's write such a declaration and use typeof to find out.
    </p>

    <code-snippet
        summary="Do it on your own before look at here"
        code="
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printName() {
        console.log(this.name);
    }

    printAge() {
        console.log(this.age);
    }
}

const answer = typeof User;
answer; // 'function'
        "
    />

    <p>
        What <code>class User {...}</code> really does is:

        <ol>
            <li>
                Creates a function named <code>User</code>, that becomes the result of the class declaration.
                The function code is taken from the <code>constructor</code> method
                (assumed empty if we don't write such method).
            </li>
            <li>
                Stores class methods, such as <code>printName</code>, in User.prototype.
            </li>
        </ol>
    </p>

    <h3>
        What we can do with <code>class</code>es?
    </h3>

    <p>
        We can use getter/setter for a property.
        It is called <i>object accessors</i>. Usually, it is used for validation,
        or to have control over property assignment 
        Consider:
    </p>

    <code-snippet
        code="
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        // we will discuss destructing later
        const [firstName, lastName] = this.fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const u1 = new User('James', 'Bond');
u1.fullName; // 'James Bond'
u1.fullName = 'Mick Jagger';
u1.fullName; // 'Mick Jagger';
        "
    />

    <p>
        Simulate real inheritance in more understandable way:
    </p>

    <code-snippet
        code="
class User {
    constructor(name, age) {
        this.name = age;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
    }
}

class Developer extends User {
    constructor(name, age, salary) {
        // call constructor of the User
        super(name, age);
        this.salary = salary;
    }
}

const dev1 = new Developer('Bob', 24, '2000 USD');
dev1.introduce(); // Hello, my name is Bob, I am 24 years old
dev1.salary // '2000 USD'
        "
    />

    <p>
        Defining <code>constructor()</code> inside <code>Developer</code> is called <i>overriding</i>
        a constructor of the parent class. Before do it, JavaScript <strong>requires</strong> to call <code>super()</code>.
        Without <code>super</code> overriding and inheritance won't work.
        The <code>super</code> keyword is just a reference to the parent class.
        In the constructor body, by calling <code>super()</code> we execute parent's constructor.
        We can use it, to <i>override</i> methods of parent class as well.
        Consider:
    </p>

    <code-snippet
        code="
class User {
    constructor(name, age) {
        this.name = age;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
    }
}

class Developer extends User {
    constructor(name, age, salary) {
        // call constructor of the User
        super(name, age);
        this.salary = salary;
    }

    introduce() {
        super.introduce();
        console.log('And my salary is ${this.salary}')
    }
}

const dev1 = new Developer('Bob', 24, '2000 USD');
dev1.introduce(); // Hello, my name is Bob, I am 24 years old, And my salary is 2000 USD
        "
    />

    <p>
        We can define property or method to the class function itself, not for its <code>prototype</code>
        or instance. This type of properties and methods are called <i>static</i>.
    </p>

    <code-snippet
        code="
class User {
    // some code
}

class UserController {
    static listOfUser = [];

    static createUser(...params) {
        const user = new User(...params);
        // this - UserController itself
        this.addUserToTheList(user);
        return user;
    }

    static addUserToTheList(user) {
        this.listOfUser.push(user);
    }

    static compareTwoUsers(user1, user2) {
        return user1.id === user2.id;
    }
}

const user = UserController.createUser('Name', 23, ...other parameters);
        "
    />

    <p>
        In static methods <code>this</code> is reference to the class function itself, not to the instance.
    </p>

    <p>
        Usually, static methods are used to implement functions that belong to the class,
        but not to any particular object of it.
        Using static methods doesn't restrict you from using regular types of methods.
        But in real world, it is common to have <i>static class</i> - class that contains only static method and properties -
        to manipulate objects, like in the example above.
    </p>

    <h3>
        Task
    </h3>

    <p>
        Create the class <code>Book</code>. It should contain a name of the book, the author, the year of book printing.
        Also, every book has to have <code>getter</code>, that return string with the complete information about the book.
        Create static class <code>Library</code>. It should have a book list, the ability to create books, adding them to the list.
        Before adding, it has to check if list already contains book with such the name, the author and
        the year of book printing. If so, <code>Library</code> won't add book to the list,
        just prints to the console <code>The list already contains ${the complete information about the book}</code>.
        If there is no such the book, <code>Library</code> will add it to the list.
    </p>

    <code-snippet
        summary="Solution"
        code="
class Book {
    constructor(
        name,
        author,
        year,
    ) {
        this.name = name;
        this.author = author;
        this.year = year;
    }

    get bookInfo() {
        return `${this.name}, ${this.author}, ${this.year}`;
    }
}

class Library {
    static bookList = [];

    static createBook(name, author, year) {
        const book = new Book(name, author, year);
        this.addBookToList(book);
        return book;
    }

    static addBookToList(newBook) {
        if (this.isAlreadyExists(newBook)) {
            console.log(`The list already contains ${newBook.bookInfo}`);
            return;
        }

        this.bookList.push(newBook);
    }

    static isAlreadyExists(newBook) {
        for (const listBook of this.bookList) {
            if (listBook.bookInfo === newBook.bookInfo) {
                return true;
            }
        }

        return false;
    }
}
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
