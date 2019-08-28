export const getAllWords = state => state.words.dictionary;

export const getNumberOfWords = (state, count = 25) => {
  return getAllWords(state).slice(0, count);
};
