import { InstagramIcon, FacebookIcon } from '../components/UI/icons/index';

export interface IRoutesItem {
  path: string;
  title: string;
}

export interface ISocialLink {
  path: string;
  icon: JSX.Element;
}

export const routesItems: IRoutesItem[] = [
  { path: 'home', title: 'Home' },
  { path: '/', title: 'Restaurant' },
];

export const socialLinks: ISocialLink[] = [
  { path: 'item1', icon: <InstagramIcon /> },
  { path: 'item2', icon: <FacebookIcon /> },
];
