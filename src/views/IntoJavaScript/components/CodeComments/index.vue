<template>
    <h2>
        Code comments
    </h2>

    <p>
        It is text to explain our code, what things it does.
        The interpreter/compiler will always ignore these comments.
    </p>

    <p>
        In JavaScript two types of comments are available:
    </p>

    <code-snippet
        code="
// one line comment

/*
    multiline
    comment
*/
        "
    />

    <p>
        The
        <code>//</code>
        single-line comment is appropriate if you're going to put a comment right above a single statement, or even at the end of a line.
        Everything on the line after the <code>//</code> is treated as the comment (and thus ignored by the compiler),
        all the way to the end of the line.
        There's no restriction to what can appear inside a single-line comment.
    </p>

    <p>
        Consider
    </p>

    <code-snippet
        code="a = 42 // 42 is a meaning of life"
    />

    <p>
        The
        <code>/* .. */</code>
        multiline comment is appropriate if you have several lines worth of explanation to make in your comment.
    </p>

    <code-snippet
        code="
/* The following value is used because
   it has been shown that it answers
   every question in the universe. */
var a = 42;
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
