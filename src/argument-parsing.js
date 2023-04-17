/**
 *A class that parses and validates CLI arguments for a given program.
 */

const { green, black, white, red, blue } = require("./colors");

/**
 *
 * @param {Array} args
 * @returns {Object}
 */
const argumentParser = (args) => {
  const argumentOrder = {
    node: 0,
    path: 1,
    colors: 2,
    colorFormat: 3,
    asyncProcess: 4,
  };
  if (args.length !== Object.keys(argumentOrder).length) {
    throw new Error("Invalid number of arguments. ");
  }
  const colors = JSON.parse(args[argumentOrder.colors]);
  const colorFormat = args[argumentOrder.colorFormat];
  const asyncProcess = args[argumentOrder.asyncProcess];

  if (
    asyncProcess.toLowerCase() !== "true" &&
    asyncProcess.toLowerCase() !== "false"
  ) {
    throw new Error("Invalid datatype provided for asyncProcess argument. ");
  }
  if (colorFormat !== "RGB" && colorFormat !== "HEX") {
    throw new Error("Invalid color format argument. ");
  }
  //validate that colors only contain the right values that are in the classes.js file
  const validColors = [green.name, black.name, white.name, red.name, blue.name]; //TODO: consider fetching this from the classes.js file
  if (!Array.isArray(colors)) {
    throw new Error("Invalid datatype provided for color argument. ");
  }
  colors.forEach((color) => {
    if (!validColors.includes(color)) {
      throw new Error("Invalid color argument. ");
    }
  });
  const asyncProcessBoolean = Boolean(asyncProcess.toLowerCase() === "true");
  return { colors, colorFormat, asyncProcess: asyncProcessBoolean };
};

module.exports = { argumentParser };
