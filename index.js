// expecting time to be a string in the format like '8:15' or '12:30'

const NUM_TO_ENG = {
  1: "one",
  3: "three",
  8: "eight",
  9: "nine",
  10: "ten",
  15: "quarter",
  30: "half",
}

function convertTimeToWords(time) {
  if (time === '0:00') {
    return 'midnight';
  } else if (time == '12:00') {
    return 'midday';
  }

  // Split into hours and minutes
  const splitParts = time.split(":");
  const hours = Number(splitParts[0])
  const minutes = Number(splitParts[1])

  const middle = minutes > 30 ? "to" : "past";
  const first =  minutes > 30 ? NUM_TO_ENG[60-minutes] : NUM_TO_ENG[minutes];
  const end =  minutes > 30 ? NUM_TO_ENG[(hours % 12) + 1] : NUM_TO_ENG[hours];

  if (minutes == 0) {
    return `${NUM_TO_ENG[hours]} o'clock`;
  }
  return `${first} ${middle} ${end}`;
}

console.log(convertTimeToWords("09:50"));

module.exports = { convertTimeToWords };