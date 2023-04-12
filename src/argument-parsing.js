/**
 *
 */
class ArgumentParser {
  /**
   *
   */
  argumentOrder = {
    node: 0,
    path: 1,
    colors: 2,
    colorFormat: 3,
    asyncProcess: 4,
  };
  /**
   *
   * @param {*} args
   */
  constructor(args) {
    this.args = args;
    console.log("DEBUG: ", this.args);
  }

  /**
   *
   * @returns {Object}
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
