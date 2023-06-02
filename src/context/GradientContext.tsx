import { createContext, ReactNode, useState } from 'react';


interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPrevMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps); //Todo: What is the type of this context?

export const GradientProvider = ({ children }: { children: ReactNode; }) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colors: ImageColors) => setColors(colors);
  const setPrevMainColors = (colors: ImageColors) => setPrevColors(colors);

  return <GradientContext.Provider value={{
    colors,
    prevColors,
    setMainColors,
    setPrevMainColors,
  }}>
    {children}
  </GradientContext.Provider>;
};