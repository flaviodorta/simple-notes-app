import React, { useContext } from 'react';
import { ThemeContext } from '../../../styles/theme/Theme';

export const ThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Dark Mode</button>;
};
