import type { PropType } from 'vue';

export interface IAddressBookList {
  firstLetter: string;
  list: any[];
}

export const props = {
  /**
   * @description inject global classNames to the component root
   */
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
