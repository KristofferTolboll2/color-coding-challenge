const { getColor } = require("./apiMock");
const { argumentParser } = require("./argument-parsing");
const {
  Green,
  Blue,
  Red,
  White,
  Black,
  green,
  blue,
  red,
  white,
  black,
} = require("./colors");
const { colorLogger } = require("./util");

/**
 * Asynchronously gets colors and logs them using the specified format.
 *
 * @async
 * @param {Array<string>} colors - Array of colors to retrieve.
 * @param {string} format - The format to use for logging the color.
 * @returns {Promise<void>} Promise that resolves when all colors have been logged.
 */
async function asyncGetColors(colors, format) {
  const colorPromises = [];
  colors.forEach((color) => {
    switch (color) {
      case "green":
        colorPromises.push(getColor(green.name));
        break;
      case "blue":
        colorPromises.push(getColor(blue.name));
        break;
      case "red":
        colorPromises.push(getColor(red.name));
        break;
      case "white":
        colorPromises.push(getColor(white.name));
        break;
      case "black":
        colorPromises.push(getColor(black.name));
      default:
        break;
    }
  });
  //All promises are resolved at the same time, using the promise.all() function.
  //The result is an array of the resolved values of the promises. "Getting all the colors at the same time"
  (await Promise.all(colorPromises)).forEach((color, index) => {
    colorLogger(color[format], format, false, "It worked!", color);
  });
}
/**
 * Synchronously gets colors and logs them using the specified format.
 *
 * @param {Array<string>} colors - Array of colors to retrieve.
 * @param {string} format - The format to use for logging the color.
 * @returns {Promise<void>} Promise that resolves when all colors have been logged.
 */
async function syncGetColors(colors, format) {
  for (const color of colors) {
    let colorResult;
    switch (color) {
      case "green":
        colorResult = await getColor(green.name);
        break;
      case "blue":
        colorResult = await getColor(blue.name);
        break;
      case "red":
        colorResult = await getColor(red.name);
        break;
      case "white":
        colorResult = await getColor(white.name);
        break;
      case "black":
        colorResult = await getColor(black.name);
        break;
      default:
        break;
    }
    colorLogger(colorResult[format], format, false, "It worked!");
  }
}

/**
 * Entry point for the application.
 *
 * @async
 * @returns {Promise<void>} Promise that resolves when all colors have been logged.
 */
async function colors() {
  const { colorFormat, colors, asyncProcess } = argumentParser(process.argv);

  if (asyncProcess) {
    await asyncGetColors(colors, colorFormat);
  } else {
    syncGetColors(colors, colorFormat);
  }
}

//Async IIFE to execute the application in an async context.
(async () => {
  await colors();
})();
