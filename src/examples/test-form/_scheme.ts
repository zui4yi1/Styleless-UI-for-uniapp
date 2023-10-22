// eslint-disable-next-line @typescript-eslint/no-unused-vars

import type { IFormScheme } from '@/components/sl-atom-form/_props';

// export type IFormScheme = {
//   prop: string;
//   type: string;
//   value?: any;
//   valueType?: 'single' | 'array' | 'object';
//   comps?: any;
// }[];

/**
 *
 * @param vals
 * @param dicts 可能分开来才好, 因为这样写没有响应性了，先把字典分开来试试
 * @param options
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const formScheme = (vals: any = {}, dicts: any = {}, options: any = {}): IFormScheme => {
  return [
    {
      prop: 'name',
      type: 'sl-input',
      label: '姓名',
      value: vals.name,
    },
    {
      prop: 'age',
      type: 'sl-input',
      label: '年龄',
      value: vals.age,
    },
    {
      prop: 'gender',
      type: 'sl-radio',
      label: '性别',
      value: vals.gender,
      comps: {
        list: dicts.genders || [],
      },
    },
    {
      prop: 'hobits',
      type: 'sl-checkbox',
      label: '爱好',
      value: vals.hobits,
      valueType: 'array',
      comps: {
        list: dicts.hobits || [],
      },
    },
  ];
};
