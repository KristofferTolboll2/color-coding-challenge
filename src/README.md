## Color coding challenge

<b>This is a document that is used to describe the solution to the color coding challenge.</b>

#### Table of contents

- [Color coding challenge](#color-coding-challenge)
  - [Table of contents](#table-of-contents)
  - [Introduction ](#introduction-)
  - [Async get Colors Function ](#async-get-colors-function-)
  - [CLI command examples](#cli-command-examples)

#### Introduction <a name="introduction"></a>

This code defines an application that retrieves colors using an API and logs them to the console. It includes two functions for retrieving colors, one that does so asynchronously and one that does so synchronously. It also includes an entry point function that parses command-line arguments and determines which color retrieval function to call.

#### Async get Colors Function <a name="async-get-colors-function"></a>

The asyncGetColors function is an asynchronous function that retrieves colors and logs them to the console. It takes two arguments: an array of color names and a string specifying the format in which to log the color. It uses a switch statement to determine which color object to create and pass to the getColor function from the provided apiMock module. It pushes each returned promise to an array of promises and uses Promise.all to execute them all concurrently. When all the promises have resolved, the function logs the result to the console using the provided colorLogger function.

#### CLI command examples

```bash
$ node ./src/index.js '["blue", "black", "green", "white", "green", "blue", "black"]' RGB false
```

```bash
$ node ./src/index.js '["blue", "black", "green", "white", "green", "blue", "black"]' HEX true
```

```bash
$ node ./src/index.js '["white", "black", "green", "black", "red", "blue", "black"]' RGB false
```
