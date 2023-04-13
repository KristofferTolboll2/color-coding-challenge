const { getColor } = require("./apiMock");
const { ArgumentParser } = require("./argument-parsing");
const { Green, Blue, Red, White, Black } = require("./classes");
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
        colorPromises.push(getColor(new Green().name));
        break;
      case "blue":
        colorPromises.push(getColor(new Blue().name));
        break;
      case "red":
        colorPromises.push(getColor(new Red().name));
        break;
      case "white":
        colorPromises.push(getColor(new White().name));
        break;
      case "black":
        colorPromises.push(getColor(new Black().name));
      default:
        break;
    }
  });
  //All promises are resolved at the same time, using the promise.all() function.
  //The result is an array of the resolved values of the promises. "Getting all the colors at the same time"
  (await Promise.all(colorPromises)).forEach((color, index) => {
    colorLogger(color[format], format, false, "It worked!");
  });
}
/**
 * Synchronously gets colors and logs them using the specified format.
 *
 * @param {Array<string>} colors - Array of colors to retrieve.
 * @param {string} format - The format to use for logging the color.
 * @returns {Promise<void>} Promise that resolves when all colors have been logged.
 */
function syncGetColors(colors, format) {
  return new Promise((resolve, reject) => {
    const colorPromises = [];
    for (const color of colors) {
      let colorPromise;
      switch (color) {
        case "green":
          colorPromise = getColor(new Green().name);
          break;
        case "blue":
          colorPromise = getColor(new Blue().name);
          break;
        case "red":
          colorPromise = getColor(new Red().name);
          break;
        case "white":
          colorPromise = getColor(new White().name);
          break;
        case "black":
          colorPromise = getColor(new Black().name);
          break;
        default:
          break;
      }
      colorPromises.push(colorPromise);
    }

    const logColors = async () => {
      for (const colorPromise of colorPromises) {
        const index = colorPromises.indexOf(colorPromise);
        console.log("Executing color promise at index: ", index);
        //Here the promises are executed one after the other, using the await keyword.
        //Which means that the next promise is only executed after the previous one is resolved. "Getting one color a time"
        const colorResult = await colorPromise;
        colorLogger(colorResult[format], format, false, "It worked!");
      }
      resolve();
    };

    logColors().catch(reject);
  });
}

/**
 * Entry point for the application.
 *
 * @async
 * @returns {Promise<void>} Promise that resolves when all colors have been logged.
 */
async function colors() {
  const { colorFormat, colors, asyncProcess } = new ArgumentParser(
    process.argv
  ).validateArguments();

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
