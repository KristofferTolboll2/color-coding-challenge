/**
 * In order to prevent the colors from being changed after they are defined, we use the Object.freeze() function.
 * This function prevents the object from being changed, and throws an error if an attempt is made to change it.
 */

const red = Object.freeze({
  name: "red",
});

const white = Object.freeze({
  name: "white",
});

const black = Object.freeze({
  name: "black",
});

const green = Object.freeze({
  name: "green",
});

const blue = Object.freeze({
  name: "blue",
});

module.exports = { green, blue, red, black, white };
