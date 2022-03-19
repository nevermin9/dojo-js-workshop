<template>
    <h2>
        Tasks
    </h2>

    <p>
        1. Create <code>object</code> <code>phoneBook</code>. This <code>object</code> have to hold one property -
        <code>array</code> of <code>contacts</code> - and one method <code>addContact(contact)</code> that will add
        contact to the <code>contacts</code> <code>array</code>.
        Tip: use
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push">Array.prototype.push</a>
        method for adding elements to the array.
    </p>

    <p>
        After it, create two <code>object</code>s - <code>myPhoneBook</code> and <code>friendPhoneBook</code>, both
        of them have to "inherit" from <code>phoneBook</code>. Add some random contact to the <code>myPhoneBook</code>'s
        contact list.
    </p>


    <code-snippet
        summary="Solution for the first part"
        code="
const phoneBook = {
    contacts: [],
    addContact(contact) {
        this.contacts.push(contact);
    }
}

const myPhoneBook = {
    __proto__: phoneBook,
};

const friendPhoneBook = {
    __proto__: phoneBook,
};
        "
    />

    <p>
        Check <code>contacts</code> of the <code>friendPhoneBook</code>.
        Did you notice something strange? Why did it happen? How can you fix it?
    </p>

    <code-snippet
        summary="Solution for the second part"
        code="
// every phone book should have its own contacts list

const phoneBook = {
    contacts: [],
    addContact(contact) {
        this.contacts.push(contact);
    }
}

const myPhoneBook = {
    contacts: [],
    __proto__: phoneBook,
};

const friendPhoneBook = {
    contacts: [],
    __proto__: phoneBook,
};
        "
    />

    <p>
        2. Create the class <code>Book</code>. It should contain a name of the book, the author, the year of book printing.
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

    <p>
        3. Come back to our "Middle-earth-Book".
        Let's define <code>class User</code>. An instance of <code>User</code> have to have next structure:
    </p>

    <code-snippet
        code="
const user = {
    firstName: 'Frodo',
    secondName: 'Baggins',
    dateOfBirth: 'September 22, TA 2968 (SR 1368)',
    dateOfDeath: 'unknown',
    sendMessage(message) {
        // sends message
    }
}
        "
    />

    <p>
        Create classes  <code>RegularUser</code>, <code>Admin</code>, <code>Moderator</code>.
        They should inherit from <code>User</code>. Every child class should contain <code>role</code> property,
        which holds appropriate role of the user.
        The <code>RegularUser</code> doesn't have to override <code>User</code>'s <code>sendMessage</code> method.
        The <code>Admin</code> have to override. It should print passed into method message and add
        the <code>Admin</code>'s <code>role</code>.
        The <code>Moderator</code> have to override in a way to prevent send messages by any instance.
    </p>

    <code-snippet
        summary="Solution"
        code="
class User {
    constructor(
        firstName,
        secondName,
        dateOfBirth,
        dateOfDeath,
    ) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.dateOfBirth = dateOfBirth;
        this.dateOfDeath = dateOfDeath;
    }

    sendMessage(message) {
        console.log(message);
    }
}

class RegularUser extends User {
    static role = 'regular-user'
}

class Moderator extends User {
    static role = 'moderator';

    sendMessage() {
        return;
    }
}

class Admin extends User {
    static role = 'admin';

    sendMessage(message) {
        super.sendMessage(message)
        console.log(Admin.role);
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
