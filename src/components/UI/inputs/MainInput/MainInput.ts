import { InputHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
export interface ISearchInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children?: ReactNode;
}
