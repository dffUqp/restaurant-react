import { InstagramIcon, FacebookIcon } from '../components/UI/icons/index';

export interface IRoutesItem {
  path: string;
  title: string;
}

export interface ISocialLink {
  path: string;
  icon: () => JSX.Element;
}

export const routesItems: IRoutesItem[] = [
  { path: 'home', title: 'Home' },
  { path: '/', title: 'Restaruant' },
];

export const socialLinks: ISocialLink[] = [
  { path: 'test', icon: InstagramIcon },
  { path: 'test2', icon: FacebookIcon },
];
