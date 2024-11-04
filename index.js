// expecting time to be a string in the format like '8:15' or '12:30'

function convertTimeToWords(time) {
  // TODO: real code goes here!
  const digitToWords = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine",
  };

  if (!time.includes(":")) return "Invalid time";

  const timeArray = time.split(":");
  const hour = timeArray[0];
  const minutes = timeArray[1];
  const intMinutes = parseInt(minutes);

  switch (true) {
    case time === "0:00":
      return "midnight";
    case time === "12:00":
      return "midday";
    case minutes === "00":
      return `${digitToWords[parseInt(hour)]} o'clock`;
    case minutes === "15":
      return `quarter past ${digitToWords[parseInt(hour)]}`;
    case minutes === "30":
      return `half past ${digitToWords[parseInt(hour)]}`;
    case minutes === "45":
      return `quarter to ${digitToWords[parseInt(hour) + 1]}`;
    case (parseInt(minutes) < 15 && parseInt(minutes) > 0) ||
      (parseInt(minutes) > 15 && parseInt(minutes) < 30):
      return `${digitToWords[intMinutes]} past ${digitToWords[parseInt(hour)]}`;
    case (parseInt(minutes) < 45 && parseInt(minutes) > 30) ||
      (parseInt(minutes) > 45 && parseInt(minutes) < 60):
      return `${digitToWords[60 - intMinutes]} to ${
        digitToWords[parseInt(hour) + 1]
      }`;
    default:
      return "half past eight";
  }
}

module.exports = { convertTimeToWords };
