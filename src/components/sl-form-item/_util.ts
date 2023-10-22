/**
 *
 * @param type 组件名称
 * @param compInitValue 组件初始值
 * @returns
 */
export const getInitVal = (type: string, compInitValue?: any) => {
  if (compInitValue !== undefined) return compInitValue;
  if (['sl-input', 'sl-radio', 'sl-select'].includes(type)) {
    return '';
  } else if (['sl-checkbox'].includes(type)) return [];
  else if (['sl-switch'].includes(type)) {
    return false;
  } else {
    return '';
  }
};
