/**
 * @description hooks for states and actions
 * @param props
 * @param instance
 * @returns
 */
export const useTop = (props: any, instance: any) => {
  const sysInfo = uni.getSystemInfoSync();
  const { statusBarHeight = 0 } = sysInfo;
  const top = statusBarHeight + uni.upx2px(props.customNavBarHeight as any);
  instance;
  const height = 100;
  return {
    top,
    height,
  };
};
