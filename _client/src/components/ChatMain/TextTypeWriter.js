import React, { useState } from 'react';

function TextTypeWriter({ text }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    let timeoutId;
    if (index < text.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 10);
    }
    return () => clearTimeout(timeoutId);
  }, [index, text]);

  return <div>{displayedText}</div>;
}

export default TextTypeWriter;