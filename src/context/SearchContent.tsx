import { createContext, ReactNode, useContext, useState } from 'react';

interface IInputContext {
  inputValue: string;
  setInputValue: (value: string) => void;
}

type TInputProviderProps = {
  children: ReactNode;
};

const InputContext = createContext({} as IInputContext);

export const useInputContext = () => {
  return useContext(InputContext);
};

export function InputProvider({ children }: TInputProviderProps): JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
}
