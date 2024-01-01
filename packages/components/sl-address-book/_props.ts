import type { PropType } from 'vue';

export interface IAddressBookList {
  firstLetter: string;
  list: any[];
}

/**
 * @summary 通讯录列表
 * @description 内容完全使用slot自定义
 * @param open 是否打开弹窗, 须使用v-model:open双向绑定方式
 * @param headClz 标题样式类
 * @param list 通讯录列表, 仅两个属性firstLetter和list, list属性任意由slot自定义实现
 * @param height 通讯录高度, 若无则自动延伸到最底部
 */
export const props = {
  className: {
    type: [String, Array],
    default: '',
  },
  list: {
    type: Array as PropType<IAddressBookList[]>,
    default: () => [],
  },
  headClz: {
    type: String,
    default: 'bold bg-fill-light',
  },
  height: {
    type: String,
    default: '',
  },
};
