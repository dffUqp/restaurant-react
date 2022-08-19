const enableScroll = () => {
  document.body.style.overflow = 'unset';
};

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

window.disableScroll = disableScroll;
window.enableScroll = enableScroll;
