/**
 *A class that parses and validates CLI arguments for a given program.
 */
class ArgumentParser {
  argumentOrder = {
    node: 0,
    path: 1,
    colors: 2,
    colorFormat: 3,
    asyncProcess: 4,
  };
  /** 
    Constructs a new instance of the ArgumentParser class.
    @param {*} args - An array of arguments to be parsed.
  */
  constructor(args) {
    this.args = args;
  }

  /**
   * Validates the arguments passed to the program and returns an object with the parsed values.
   * @returns {Object} - An object containing the parsed arguments.
   * @throws {Error} - If any of the arguments are invalid.
   */
  validateArguments() {
    if (this.args.length !== Object.keys(this.argumentOrder).length) {
      throw new Error("Invalid number of arguments. ");
    }
    const colors = JSON.parse(this.args[this.argumentOrder.colors]);
    const colorFormat = this.args[this.argumentOrder.colorFormat];
    const asyncProcess = this.args[this.argumentOrder.asyncProcess];

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
    const validColors = ["green", "blue", "red", "white", "black"]; //TODO: consider fetching this from the classes.js file
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
  }
}

module.exports = { ArgumentParser };
