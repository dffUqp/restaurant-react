import { ReactNode } from 'react';

export interface ISideBarProps {
  children: ReactNode;
  toggleNav: () => void;
}
