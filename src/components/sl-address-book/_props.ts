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
    type: Array,
    default: () => [] as IAddressBookList[],
  },
};
