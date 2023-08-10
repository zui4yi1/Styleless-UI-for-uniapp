import { computed, type CSSProperties } from 'vue';

export const useLine = (_props: any) => {
  const styleObj = computed(() => {
    const { direction, lineStyle, length } = _props;
    const res: CSSProperties = { boxSizing: 'border-box' };
    const xStyle = {
      width: length,
      height: 0,
      borderBottomWidth: '1px',
      borderBottomStyle: lineStyle,
      transform: _props.isHairLine ? 'scaleY(0.5)' : 'scaleY(1)',
    };
    const yStyle = {
      width: 0,
      height: length,
      borderLeftWidth: '1px',
      borderBottomStyle: lineStyle,
      transform: _props.isHairLine ? 'scaleX(0.5)' : 'scaleX(1)',
    };
    Object.assign(res, direction === 'x' ? xStyle : yStyle);
    return res;
  });
  return styleObj;
};
