type IType = 'head' | 'body' | 'foot' | 'left' | 'center' | 'right';

export const useClassName = (componentName: string) => {
  if (componentName === 'sl-') {
    // eslint-disable-next-line no-console
    console.warn('illegal component name');
  }
  const root = () => componentName;

  // 头身脚布局
  const head = () => [componentName, 'head'].join('__');
  const body = () => [componentName, 'body'].join('__');
  const foot = () => [componentName, 'foot'].join('__');

  // 左中右布局
  const left = () => [componentName, 'left'].join('__');
  const center = () => [componentName, 'center'].join('__');
  const right = () => [componentName, 'right'].join('__');

  // 通用join, 自动过滤空值参数, 注意第一个参数是type
  const join = (type: IType, ...suffNames: (string | number)[]) =>
    [componentName, type, ...suffNames].filter((t) => !!t).join('__');

  return { root, join, head, body, foot, left, center, right };
};
