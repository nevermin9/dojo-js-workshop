<template>
    <h2>
        Class theory
    </h2>

    <p>
        Imagine, you have a social media application in the Lord of The Rings world.
        The main “customers” of your application are regular “users”.
        Your application contains hundreds or even thousands of users, people of Middle-earth.
        To store information about every user, you define some data structure, like this:
    </p>

    <code-snippet
        code="
const user = {
    firstName: 'Frodo',
    secondName: 'Baggins',
    otherNames: [
        'Frodo of the Nine Fingers',
        'Nine-Fingered Frodo',
        'Maura Labingi',
        'Mr. Underhill, Sneaky hobbit'
    ],
    dateOfBirth: 'September 22, TA 2968 (SR 1368)',
    weapon: [ 'Sting', 'Barrow-blade' ],
    physicalDescription: {
        hair: 'brown',
        culture: 'Shire-hobbit',
        family: [ 'Brandybuck family', 'Baggins family' ],
    },
    dateOfDeath: 'unknown',
};
        "
    />

    <p>
        For the first glance, <code>user</code> object doesn't contain a lot of information. But, as I mention before,
        your 'Middle-earth-Book' has thousands of users. And creating objects like latter every time new user is signed up 
        is quite exhausting and time-consuming. Programmers have a lot of other problems to resolve, and they cannot afford
        to waste time creating objects.
        The situation becomes more complicated, when you decided to add some "dynamism" to the <code>user</code> object,
        e.g. opportunity to extend <code>otherNames</code> array, change <code>dateOfDeath</code> property, add some <code>bio</code> etc.
        Every action, that we mentioned, requires some function aka method of the object:
    </p>


    <code-snippet
        code="
const user = {
    firstName: 'Frodo',
    secondName: 'Baggins',
    otherNames: [
        'Frodo of the Nine Fingers',
        'Nine-Fingered Frodo',
        'Maura Labingi',
        'Mr. Underhill, Sneaky hobbit'
    ],
    dateOfBirth: 'September 22, TA 2968 (SR 1368)',
    weapon: [ 'Sting', 'Barrow-blade' ],
    physicalDescription: {
        hair: 'brown',
        culture: 'Shire-hobbit',
        family: [ 'Brandybuck family', 'Baggins family' ],
    },
    dateOfDeath: 'unknown',
    methods: {
        extendOtherNames(name) {
            this.otherNames.push(name);
        },
        setDateOfDeath(date) {
            this.dateOfDeath = date;
        },
        // other methods...
    }
};
        "
    />

    <p>
        We will cover mysterious <code>this</code> keyword in the next section.
        So far, you should understand the problem of such code organization aka architecture.
        <i>Software architecture</i> - is a way of modeling real world problem domains in our software.
    </p>

    <p>
        More of that, some users of "Middle-earth-Book" have extended privileges, e.g. some of them are admins,
        moderators or marketer. And every <code>user</code> have to contain property that defines his role in
        the social media website, e.g. <code>role: 'admin'</code>.
    </p>

    <p>
        So, to resolve all of this problems, <i>object oriented programming</i> (OOP) was invented.
        <i>Object oriented programming</i> is just a way of writing computer programs using "objects" to stand for data and methods.
        OO or class oriented programming stresses that data intrinsically has associated behavior (of course, different depending on the
        type and nature of the data!) that operates on it, so proper design is to package up (aka, encapsulate)
        the data and the behavior together. This is sometimes called "data structures" in formal computer science.
    </p>

    <p>
        In our case, every <code>user</code> is just instance of <code>User</code> class,
        which means that it's a neatly collected packaging of both the <code>user</code>'s data and the functionality
        we can perform on it.
    </p>

    <p>
        Before we dive into process of creating architecture of our <code>user</code>s according to OOP in JavaScript world,
        we should cover the main principles of such architecture.
    </p>

    <h3>
        Building
    </h3>

    <p>
        Everything is created twice. Before we go on holydays, we create a plan or todo list. Before somebody builds
        a house, he or she plans out all the characteristics of the house.
        The same "planning" process relates to the OOP as well. We can even say, that planning is a base of OOP.
    </p>

    <p>
        Before you create the first <code>user</code> of your "Middle-earth-Book", you should spent some time
        to understand your needs and create "blue-print" of the <code>user</code>.
        After planning, the blue-print may look like:
    </p>

    <code-snippet
        code="
// IT IS PSEUDOCODE, IT IS NOT JAVASCRIPT

class User {
    firstName = '';
    secondName = '';
    otherNames = [];
    dateOfBirth = '';
    weapon = '';
    physicalDescription = {};
    dateOfDeath = '';

    extendOtherNames(name) {
        this.otherNames.push(name);
    }

    setDateOfDeath(date) {
        this.dateOfDeath = date;
    }
}
        "
    />

    <p>
        This <code>class</code> is a blue-print. To actually get an object we can interact with,
        we must build (aka "instantiate") from the class. The end result of such "construction" is an object,
        typically called an "instance", which we can directly call methods on and access any public data properties
        from, as necessary.
        <strong>This object is a copy</strong> of all the characteristics described by the class.
        <strong>A class is instantiated into object form by a copy operation.</strong>
        And to make an instance of <code>User</code>, we would call its <i>constructor</i> via <code>new</code> keyword:
    </p>

    <code-snippet
        code="
// IT IS PSEUDOCODE, IT IS NOT JAVASCRIPT

Frodo = new User(firstName: 'Frodo', secondName: 'Baggins', ...other parameters);
Sam = new User(firstName: 'Samwise', secondName: 'Gamgee', ...other parameters )
        "
    />

    <p>
        Okay, you have resolved the problem of creating new <code>user</code>s.
        But we need <code>user</code>s of different roles. And regular <code>User</code> class
        doesn't applicable for this purpose.
    </p>


    <h3>
        Inheritance
    </h3>

    <p>
        In class-oriented languages, not only can you define a class which can be instantiated itself,
        but you can define another class that inherits from the first class.
        The second class is often said to be a "child class" whereas the first is the "parent class". 
    </p>

    <p>
        For better architecture, class <code>User</code> should be used only for inheritance.
        Classes for other roles of <code>user</code>s should inherit its behavior and properties.
        Consider:
    </p>

    <code-snippet
        code="
// IT IS PSEUDOCODE, IT IS NOT JAVASCRIPT

class User {
    firstName = '';
    secondName = '';
    otherNames = [];
    dateOfBirth = '';
    weapon = '';
    physicalDescription = {};
    dateOfDeath = '';

    extendOtherNames(name) {
        this.otherNames.push(name);
    }

    setDateOfDeath(date) {
        this.dateOfDeath = date;
    }
}

class RegularUser inherits User {
    role = 'regular';
}

class Admin inherits User {
    role = 'admin';
}

class Moderator inherits User {
    role = 'moderator';
}

// let's use it!

Frodo = new RegularUser(firstName: 'Frodo', secondName: 'Baggins', ...other parameters);
Sam = new RegularUser(firstName: 'Samwise', secondName: 'Gamgee', ...other parameters );
James = new Admin(firstName: 'James', ...other parameters);
        "
    />

    <p>
        <code>RegularUser</code>, <code>Admin</code> and <code>Moderator</code> contain all properties and methods of
        the <code>User</code> class. In reality, these classes are given a copy of the inherited behavior from its parent class.
        <strong>Class inheritance implies copies.</strong>
    </p>

    <h3>
        Polymorphism
    </h3>

    <p>
        Of course, the main goal of any social media is communicating. Every <code>user</code> have to have opportunity to
        leave a comment, send a message etc. But every user needs to know the role of the user whose message he is reading.
        So, for this purpose, you should implement <code>sendMessage()</code> method in the <code>User</code>.
        Child classes have to add their own logic to this method to send messages in their own way. 
    </p>

    <code-snippet
        code="
// IT IS PSEUDOCODE, IT IS NOT JAVASCRIPT

class User {
    // ...other properties and methods...
    sendMessage(message) {
        print(message)
    }
}

class RegularUser inherits User {
    role = 'regular';

    // Regular user will use parent's sendMessage()
}

class Admin inherits User {
    role = 'admin';

    sendMessage() {
        inherited:sendMessage();
        print('Send by', this.role);
    }
}

class Moderator inherits User {
    role = 'moderator';

    // Moderator cannot send messages
    sendMessage() {
        return;
    }
}
        "
    />

    <p>
        The <code>RegularUser</code> doesn't overwrite parent's <code>sendMessage</code> method and will use it without
        "modifications". The <code>Admin</code> and <code>Moderator</code> do overwrite.
        The <code>Admin</code> defines its own <code>sendMessage</code>, but than method calls <code>inherited:sendMessage()</code>
        which indicates that <code>Admin</code> can reference the original pre-overridden <code>sendMessage()</code> it
        inherited.
        The <code>Moderator</code>'s <code>sendMessage()</code> method just overwrites parent's one and via <code>return</code> statement
        'blocks' its execution.
        This technique is called <i>polymorphism</i>.
        Polymorphism allows us to perform a single action in different ways.
        In other words, polymorphism allows you to define one interface aka class (parent) and have multiple implementations (children).
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
