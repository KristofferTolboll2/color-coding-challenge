/**
 * Logs the color to the console in the specified format.
 * @param {string | Object} color - The color to log.
 * @param {string} format - The format to log the color in. Can be "HEX", "RGB", or "HSL".
 * @param {boolean} asyncProcess - Whether the color was obtained asynchronously or synchronously.
 * @param {string} [prompt="It worked!"] - The prompt to log with the color.
 */
const colorLogger = (color, format, asyncProcess, prompt = "It worked!") => {
  const isHexColorFormat = format === "HEX";

  const parsedHexColor = isHexColorFormat ? color.substr(1) : null;

  let red = isHexColorFormat
    ? parseInt(parsedHexColor.substr(0, 2), 16)
    : color.R;
  let green = isHexColorFormat
    ? parseInt(parsedHexColor.substr(2, 2), 16)
    : color.G;
  let blue = isHexColorFormat
    ? parseInt(parsedHexColor.substr(4, 2), 16)
    : color.B;
  //Custom logger function to print the color in the console based on the HEX or RGB colors of the selected color.
  let fgColorString = `\x1b[38;2;${red};${green};${blue}m`;
  console.log(
    `${fgColorString} ${prompt} Printed in ${format} using a ${
      asyncProcess ? "async" : "sync"
    } process`
  );
};

module.exports = { colorLogger };
