import randomstring from "randomstring";

function generateSerial() {
  return randomstring.generate({
    length: 5,
    charset: "alphabetic",
    capitalization: "uppercase",
  });
}

export default generateSerial;
