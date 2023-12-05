import { useState } from 'react';

interface Props {
  onSetJohnText: () => void;
}

const SearchText = ({ onSetJohnText }: Props) => {
  return <button onClick={() => onSetJohnText()}>hello</button>;
};

export default SearchText;
