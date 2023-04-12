const { getColor } = require("./apiMock");
const { ArgumentParser } = require("./argument-parsing");
const { Green, Blue, Red, White, Black } = require("./classes");
const { colorLogger } = require("./util");

/**
 *
 * @param {Array} colors
 * @param {string} format
 * @returns {Array} colorData: Array of color data in the format specified by the user. Objectg for RBG or string for HEX
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
  return (await Promise.all(colorPromises)).map((color) => color[format]);
}

function syncGetColors(colors, format) {
  const colorData = [];
  colors.forEach((color) => {
    switch (color) {
      case "green":
        getColor(new Green().name).then((color) => {
          colorLogger(color[format], format, false, "It worked!");
        });
        break;
      case "blue":
        getColor(new Blue().name).then((color) => {
          colorLogger(color[format], format, false, "It worked!");
        });
        break;
      case "red":
        getColor(new Red().name).then((color) => {
          colorLogger(color[format], format, false, "It worked!");
        });
        break;
      case "white":
        getColor(new White().name).then((color) => {
          colorLogger(color[format], format, false, "It worked!");
        });
        break;
      case "black":
        getColor(new Black().name).then((color) => {
          colorLogger(color, format, false, "It worked!");
        });
      default:
        break;
    }
  });
  console.log("DEBUG: ", colorData);
  return colorData.map((color) => color[format]);
}

async function colors() {
  const { colorFormat, colors, asyncProcess } = new ArgumentParser(
    process.argv
  ).validateArguments();

  if (asyncProcess) {
    const colorData = await asyncGetColors(colors, colorFormat);
    console.log("DEBUG: ", colorData);
    colorData.forEach((color) => colorLogger(color, colorFormat, asyncProcess));
  } else {
    const colorData = syncGetColors(colors, colorFormat);
    colorData.forEach((color) => colorLogger(color, colorFormat, asyncProcess));
  }
}

//Async IIFE
(async () => {
  await colors();
})();

/*
To run application:
node ~/code-challenge/src/index.js true false true '["green","blue", "red"]'
*/
