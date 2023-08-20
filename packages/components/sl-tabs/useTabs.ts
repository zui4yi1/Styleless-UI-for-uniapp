import { onMounted, ref, type CSSProperties } from 'vue';

import { getDom, getDoms } from '@/utils/dom';

export const useTabs = (instance: any, _emits: any, clz: any) => {
  const tabBarCssObj = ref({} as CSSProperties);

  // TODO uuid生成器
  const id = 'xxxx';

  const activeInx = ref(0);

  const tabRect = ref({} as UniApp.NodeInfo);
  const tabDoms = ref([] as UniApp.NodeInfo[]);

  const scrollLeft = ref(0);

  const setTabBarCss = async (inx: number) => {
    const rect = tabDoms.value[inx];
    tabBarCssObj.value = {
      left: `${rect.left || 0}px`,
      bottom: 0,
      width: `${rect.width}px`,
      height: '2px',
      transition: 'left 0.3s',
    };
    const parentLeft = tabRect.value.left || 0;
    const componentWidth = tabRect.value.width || 0;
    const tabWidth = rect.width || 0;

    const offsetLeft = rect.left || 0 - parentLeft;
    const tempScrollLeft = offsetLeft - (componentWidth - tabWidth) / 2;
    scrollLeft.value = tempScrollLeft < 0 ? 0 : tempScrollLeft;
  };

  const handleTab = (inx: number) => {
    activeInx.value = inx;
    setTabBarCss(inx);
    _emits('change', inx);
  };

  onMounted(async () => {
    tabRect.value = await getDom(instance, '#' + id);
    tabDoms.value = await getDoms(instance, '.' + clz.join('body', 'item', 'text'));
    setTabBarCss(0);
  });

  return { id, scrollLeft, tabBarCssObj, handleTab };
};
