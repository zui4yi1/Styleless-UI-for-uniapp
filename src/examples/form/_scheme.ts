// import type { IFormGroup } from '@/components/sl-form/_props';

import type { IFormGroup } from '@/components/sl-form/_props';

// IFormGroup;
export const formScheme = (): IFormGroup[] => [
  {
    groupName: 'group_1',
    list: [
      {
        type: 'sl-input',
        prop: 'name',
        label: '名字',
        compOps: {
          paddingClz: '',
          align: 'right',
        },
        rules: [
          {
            required: true,
            text: '名字不能为空',
          },
          {
            reg: /^(abc)?$/,
            text: '请输入abc',
            isRegPositive: false,
          },
        ],
      },
      {
        type: 'sl-input',
        prop: 'age',
        label: '年龄',
        compOps: {
          paddingClz: '',
          align: 'right',
        },
        rules: [
          {
            required: true,
            text: '年龄不能为空',
          },
          {
            reg: /\D/,
            text: '请输入数字',
          },
        ],
      },
      {
        type: 'sl-radio',
        prop: 'gender',
        label: '性别',
        rules: [
          {
            required: true,
            text: '性别不能为空',
          },
        ],
      },
      {
        type: 'sl-select',
        prop: 'advantage',
        label: '擅长',
        rules: [
          {
            required: true,
            text: '擅长不能为空',
          },
        ],
      },
      {
        type: 'sl-checkbox',
        prop: 'hobits',
        label: '爱好',
        xLayoutClz: 'flex-top',
        rules: [
          {
            required: true,
            text: '爱好不能为空',
          },
        ],
      },
      {
        type: 'sl-switch',
        prop: 'agree',
        label: '同意',
      },
    ],
  },
];
