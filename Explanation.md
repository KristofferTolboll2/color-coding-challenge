## Color coding challenge

<b>This is a document that is used to describe the solution to the color coding challenge.</b>

### Table of contents

- [Color coding challenge](#color-coding-challenge)
  - [Table of contents](#table-of-contents)
    - [Introduction ](#introduction-)
    - [Async Get Colors Function ](#async-get-colors-function-)
    - [Sync Get Colors Function](#sync-get-colors-function)
    - [Entry point for the Application](#entry-point-for-the-application)

#### Introduction <a name="introduction"></a>

This code defines an application that retrieves colors using an API and logs them to the console. It includes two functions for retrieving colors, one that does so asynchronously and one that does so synchronously. It also includes an entry point function that parses command-line arguments and determines which color retrieval function to call.

#### Async Get Colors Function <a name="async-get-colors-function"></a>

The `asyncGetColors` function is an asynchronous function that retrieves colors and logs them to the console. It takes two arguments: an array of color names and a string specifying the format to log the color. It uses a switch statement to determine which color object to create and pass to the `getColor` function from the provided `apiMock` module. It pushes each returned Promise to an array of promises and uses `Promise.all()` to execute them concurrently. When all the promises have been resolved, the function logs the result to the console using the provided `colorLogger` function.

#### Sync Get Colors Function

The `syncGetColors` function is a synchronous function that retrieves colors and logs them to the console. It takes two arguments: an array of color names and a string specifying the format to log the color. It creates a variety of promises, similar to `asyncGetColors`, but then executes them sequentially using a for loop and the `await` keyword. When each promise resolves, it logs the result to the console using the provided `colorLogger` function.

#### Entry point for the Application

The `colors` function serves as the entry point for the application. It calls the `validateArguments` function from the provided `argument-parsing` module to parse command-line arguments and determine which color retrieval function to call. If the `asyncProcess` flag is set to true, it calls the `asyncGetColors` function. Otherwise, it calls the `syncGetColors` function.
