const TEMP_WORD = "CLOWN";
const TEMP_WORD_ARRAY = [...TEMP_WORD];

const createMap = (word: string) => {
  let letterMap: any = {};
  [...word].forEach((letter) => {
    letterMap[letter] = letterMap[letter] ? letterMap[letter]++ : 1;
  })
  return letterMap;
}

const TEMP_WORD_MAP = createMap(TEMP_WORD);

const validate = (word: string) => {
  if (word.length === 5) {
    let characters = [...word.toUpperCase()];
    return characters.map((letter, index) => {
      let present = TEMP_WORD_MAP[letter] && TEMP_WORD_MAP[letter] > 0 ? true : false;
      let correct = TEMP_WORD_ARRAY[index] === letter ? true : false;
      return correct ? "correct" : present ? "present" : "absent";
    })
  }
};

export { validate };
