import React from 'react';
import PropTypes from 'prop-types';


function wordsDisplay({ words }) {
  
  const wordsItems = words.map((word) => (
    <li key={word}>
      <h3>{word}</h3>
    </li>
  ));

  return (
    <ul>
      {wordsItems}
    </ul>
  );
}

wordsDisplay.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default wordsDisplay;
