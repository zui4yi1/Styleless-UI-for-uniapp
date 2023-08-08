export const useClassName = (className: string) => {
  const root = () => className;
  const join = (suffName: string) => [className, suffName].join('-');
  return { root, join };
};
