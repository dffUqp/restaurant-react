export {};

declare global {
  interface Window {
    disableScroll: () => void;
    enableScroll: () => void;
  }
}
