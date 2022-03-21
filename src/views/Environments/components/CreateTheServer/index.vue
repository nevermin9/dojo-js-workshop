<template>
    <h2>
        Create your first server with Node.js
    </h2>

    <p>
        1. You need to install some code editor.
        I recommend to use <a href="https://code.visualstudio.com/">VSCode</a>
    </p>

    <p>
        2. Install Node.js.
        There are two ways:
    </p>

    <ul>
        <li>
            Download and install Node.js itself. <a href="https://nodejs.org/en/download/">Official site</a>
        </li>

        <li>
            Download and install <a href="https://github.com/nvm-sh/nvm">nvm</a> - Nodejs Version Manager
        </li>
    </ul>

    <p>
        If you choose first option, you will install only one version of Node.js.
        In such a case, if you need another version of Node.js, you have to uninstall old one, and install new one.
        It is not handy, if you work with different projects with different Node.js versions.
    </p>

    <p>
        If you choose second option, you will install utility, that allows you to quickly install and use different versions of node via the command line.
        It is supported by any UNIX and macOS. To use it on Windows, you have to install
        <a href="https://docs.microsoft.com/en-us/windows/wsl/install">Windows WSL</a>
        Also <a href="https://github.com/coreybutler/nvm-windows">nvm-windows</a> is supported by Windows itself.
    </p>

    <p>
        3. After success installing, you can create project via <code>npm</code>.
        NPM or Nodejs Package Manager is two things: first and foremost,
        it is an online repository for the publishing of open-source Node.js projects; second,
        it is a command-line utility for interacting with said repository that aids in package installation,
        version management, and dependency management. 
        <a href="https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/">More about npm</a>
    </p>

    <p>
        Create project folder via Command Line Interface.
        Command Line Interface is a program on your computer that allows you to create and delete files,
        run programs, and navigate through folders and files.
        On a Mac or Linux, it's called Terminal, and on Windows, it's Command Prompt.
        <a href="https://medium.com/swlh/how-to-use-the-command-line-interface-cli-9c8b70e568e">More about CLI</a>
    </p>

    <p>
        To create directory use this command:
    </p>

    <code-snippet
        language="shell"
        code="
mkdir my-app
        "
    />

    <p>
        ...end enter into it:
    </p>

    <code-snippet
        language="shell"
        code="
cd my-app
        "
    />

    <p>
        Now, inside your project's directory run:
    </p>

    <code-snippet
        language="shell"
        code="
npm init
        "
    />

    <p>
        This command prompts you for a number of things, including the name and version of your application and
        the name of the initial entry point file (by default this is index.js). 
        You can accept the defaults.
    </p>

    <p>
        From now, you can open project's directory in your code editor.
        You will notice only one file - <code>package.json</code>.
        This file was created by <code>npm</code>. This file is a description of your project.
        It records important metadata about a project which is required before publishing to NPM,
        and also defines functional attributes of a project that npm uses to install dependencies, run scripts,
        and identify the entry point to our package.
        <a href="https://docs.npmjs.com/cli/v7/configuring-npm/package-json">More about package.json</a>
    </p>

    <p>
        4. Create a single entry point of your app.
        Run this command to create file <code>index.js</code>
    </p>

    <code-snippet
        language="shell"
        code="
touch index.js
        "
    />

    <p>
        5. Import <code>http</code> module in our file:
    </p>

    <code-snippet
        code="
const http = require('http');
// is the same as 
// import http from 'http';
        "
    />

    <p>
        <code>require</code> construction is a way of importing modules in Nodejs environment.
        You can learn about require <a href="https://nodejs.org/en/knowledge/getting-started/what-is-require/">here</a>.
    </p>

    <p>
        You may be notice, that path to the module doesn't consist any slashes.
        If we want to use built-in or vendor modules in Nodejs, the path cannot start with slash.
        It tells Nodejs, that it should look for module in <code>node_modules</code>.
        The <code>node_modules</code> is a folder with all your installed packages and their dependencies.
        More about <code>node_modules</code> <a href="https://www.digitalocean.com/community/tutorials/how-to-use-node-js-modules-with-npm-and-package-json">here</a>.
        <a href="https://nodejs.org/api/modules.html">About modules in Nodejs</a>.
        More about module search algorithm <a href="https://nodejs.org/api/modules.html#all-together">here</a>
    </p>

    <p>
        6. Create your first server.
        The <code>http</code> module allows us to create web server.
        Here its <a href="https://nodejs.org/docs/latest-v16.x/api/http.html">documentation</a>.
        But it may be hard for beginners. I recommend to learn how web works, especially what is HTTP, API, WebSockets,
        request, response.
    </p>

    <p>
        For now, just follow the example below:
    </p>

    <code-snippet
        code="
const http = require('http');

// here we create server via createServer() method
// it accepts callback function, which gets two parameters
// request from the browser
// response, which will be sent to the browser back
// more about this method https://nodejs.org/docs/latest-v16.x/api/http.html#httpcreateserveroptions-requestlistener
const server = http.createServer((request, response) => {
    res.end('Hey, I am the server!');
});

// Starts the HTTP server listening for connections.
// 3000 is a port which will be used by server
server.listen(3000, () => {
    console.log('server is running');
});
        "
    />

    <p>
        6. Run server via <code>node</code>.
        Inside your directory run:
    </p>

    <code-snippet
        language="shell"
        code="
node index.js
        "
    />

    <p>
        ...and open <code>localhost:3000</code> in your browser.
    </p>

    <p>
        Now our server is not making any useful work. Real world Nodejs applications consist of thousands lines of code.
        But this example shows, how JavaScript is simple to use on server side. We need only several lines of code to create server.
        It is the main reason, why a lot of companies choose Nodejs as a main platform for their web servers.
        More of that, it is profitable because you need only one team of JavaScript developers to develop
        the front-end and the back-end instead of two separate teams:
        e.g. Python developers for the back-end and JS developers for the front-end.
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