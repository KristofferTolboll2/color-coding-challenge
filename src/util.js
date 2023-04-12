/**
 *
 * @param {string | Object} color
 * @param {string} format
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
  let fgColorString = `\x1b[38;2;${red};${green};${blue}m`;
  console.log(
    `${fgColorString} ${prompt} Printed in ${format} using a ${
      asyncProcess ? "async" : "sync"
    } process`
  );
};

module.exports = { colorLogger };
