import { onBeforeMount, ref } from 'vue';

const gender = [
  { label: '男', value: 1 },
  { label: '女', value: 2 },
];
const getHobits = () => {
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          label: '数学',
          value: 0,
        },
        {
          label: '语文',
          value: 1,
        },
        {
          label: '英语',
          value: 2,
        },
        {
          label: '化学',
          value: 3,
        },
      ]);
    }, 500);
  });
};

const getDetail = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'abc',
        age: '10',
        gender: 1,
        hobits: [1, 2],
        agree: true,
      });
    }, 1000);
  });
};

export const useDicts = () => {
  const hobits = ref([] as any[]);

  onBeforeMount(() => {
    getHobits().then((res) => {
      hobits.value = res;
    });
  });

  return {
    gender,
    hobits,
    choice: hobits,
  };
};

export const useDetail = () => {
  const detail = ref({});

  onBeforeMount(() => {
    getDetail().then((res: any) => {
      detail.value = res;
    });
  });
  return detail;
};
