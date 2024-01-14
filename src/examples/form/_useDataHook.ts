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

const getAdvantages = () => {
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          label: '理科',
          value: 0,
        },
        {
          label: '文科',
          value: 1,
        },
      ]);
    }, 500);
  });
};

const getClazzNames = () => {
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          label: '高中',
          value: 'h',
          children: [
            {
              label: '高一',
              value: 'h1',
              children: [
                { label: '高一1班', value: 'h11' },
                { label: '高一2班', value: 'h12' },
              ],
            },
            {
              label: '高二',
              value: 'h2',
              children: [
                { label: '高二1班', value: 'h21' },
                { label: '高二2班', value: 'h22' },
              ],
            },
            {
              label: '高三',
              value: 'h3',
              children: [
                { label: '高三1班', value: 'h31' },
                { label: '高三2班', value: 'h32' },
              ],
            },
          ],
        },
        {
          label: '初中',
          value: 'c',
          children: [
            {
              label: '初一',
              value: 'c1',
              children: [
                { label: '初一1班', value: 'c11' },
                { label: '初一2班', value: 'c12' },
              ],
            },
            {
              label: '初二',
              value: 'c2',
              children: [
                { label: '初二1班', value: 'c21' },
                { label: '初二2班', value: 'c22' },
              ],
            },
          ],
        },
      ]);
    }, 1500);
  });
};

// const list =

const getDetail = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'abc',
        age: '10',
        gender: 1,
        hobits: [1],
        agree: true,
        birthdate: '2023-12-12',
        className: ['c', 'c1', 'c12'],
        advantage: [1],
        cus: 'cus...',
      });
    }, 1000);
  });
};

export const useDicts = () => {
  const hobits = ref([] as any[]);
  const advantage = ref([] as any[]);
  const className = ref([] as any[]);

  onBeforeMount(() => {
    getHobits().then((res) => {
      hobits.value = res;
    });
    getAdvantages().then((res) => {
      advantage.value = res;
    });
    getClazzNames().then((res) => {
      className.value = res;
    });
  });

  return {
    gender,
    hobits,
    advantage,
    className,
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
