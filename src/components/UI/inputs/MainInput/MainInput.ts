import { InputHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
export interface IMainInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children?: ReactNode;
}
