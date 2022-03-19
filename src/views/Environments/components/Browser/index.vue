<template>
    <h2>
        Browser
    </h2>

    <p>
        JavaScript is the programming language for the Web.
        It is only programming language that can be run in any web browser.
    </p>

    <p>
        Via JavaScript we can do the following:
    </p>

    <ul>
        <li>
            Manipulate Document Object Model (DOM).
            <i>
                DOM
            </i> is a programming interface for web documents.
            It represents the page so that programs can change the document structure, style, and content.
            The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
            You can learn about DOM API <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">here</a>
        </li>

        <li>
            Handle user interactions like clicks, scroll, key press etc.
        </li>

        <li>
            Create animations
        </li>

        <li>
            Send requests over the network to remote servers, download and upload files.
        </li>

        <li>
            Work with browser cookies and local storages.
        </li>

        <li>
            ...and more.
        </li>
    </ul>

    <p>
        In modern web development, JavaScript in browser is used via <i>modules</i>.
        Everything you need, is just define <code>&#60;script&#62;</code> with attribute
        <code>type="module"</code> and define your JavaScript code between opened and closed tags:
    </p>

    <code-snippet
        language="html"
        code="
<!doctype>
<head></head>
<body>
    <script type='module'>
        const sayHello() {
            console.log('hello!')
        }

        sayHello();
    </script>
</body>
        "
    />

    <p>
        Right after HTML page is fully ready, browser will run JavaScript code.
        We can link to external JavaScript module, to avoid the mess in HTML markup.
    </p>

    <code-snippet
        language="html"
        code="
<!doctype>
<head></head>
<body>
    <script src='path/to/file.js' type='module'></script>
</body>
        "
    />

    <p>
        Browser is downloading module during parsing HTML.
        We can use several modules.
    </p>

    <code-snippet
        language="html"
        code="
<!doctype>
<head></head>
<body>
    <script src='path/to/file.js' type='module'></script>
    <script src='path/to/another.js' type='module'></script>
</body>
        "
    />

    <p>
        We can put <code>&#60;script&#62;</code> tag inside <code>&#60;head&#62;</code> tag as well.
    </p>

    <code-snippet
        language="html"
        code="
<!doctype>
<head>
    <script src='path/to/file.js' type='module'></script>
    <script src='path/to/another.js' type='module'></script>
</head>
<body></body>
        "
    />

    <p>
        But in modern web development, using single entry point is preferred way.
        We accumulate all JavaScript inside one main file:
    </p>

    <code-snippet
        code="
// main.js

import startApp from './app';
import somePlugin from './plugins';
import { setCounter, startPromo } from './products';
// other imports

startApp(somePlugin);
setCounter();
startPromo();
        "
    />

    <p>
        ...and insert it into HTML markup of our page.
    </p>

    <code-snippet
        language="html"
        code="
<!doctype>
<head>
</head>
<body>
    <!-- some content -->
    <script src='./main.js' type='module'></script>
</body>
        "
    />

    <p>
        More of that, today developers don't do event that. They just write JavaScript code in modules.
        Then configure bundlers, like Webpack, to generate HTML document for them.
        This bundler pack all JavaScript modules into single or several modules (depends on configuration)
        and generate <code>index.html</code> with already embedded <code>&#60;script&#62;</code> tag.
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
