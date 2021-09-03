function parseOption(option) {
  const [optionText, outcome] = option.split('|');
  console.log(outcome)
  return JSON.parse(outcome);
}


export default parseOption;