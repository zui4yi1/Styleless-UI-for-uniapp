export const useClassName = (className: string) => {
  const root = () => className;
  const append = (suffName: string) => [className, suffName].join('-');
  return { root, append };
};
