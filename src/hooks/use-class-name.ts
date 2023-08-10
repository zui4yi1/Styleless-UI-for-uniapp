export const useClassName = (className: string) => {
  const root = () => className;
  const join = (type: string, suffName?: string) =>
    [className, type, suffName].filter((t) => !!t).join('-');

  const head = () => [className, 'head'].join('-');

  const body = () => [className, 'body'].join('-');
  const foot = () => [className, 'foot'].join('-');
  const left = () => [className, 'left'].join('-');
  const center = () => [className, 'center'].join('-');
  const right = () => [className, 'right'].join('-');
  return { root, join, head, body, foot, left, center, right };
};
