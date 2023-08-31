/**
 * @description hooks for states and actions
 * @param props
 * @returns
 */
export const useTop = (props: any) => {
  const sysInfo = uni.getSystemInfoSync();
  const { statusBarHeight = 0 } = sysInfo;
  const top = statusBarHeight + uni.upx2px(props.customNavBarHeight as any);

  const height = 100;
  return {
    top,
    height,
  };
};
