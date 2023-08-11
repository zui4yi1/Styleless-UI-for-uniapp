export const getDom = (instance: any, selector: string) => {
  return new Promise<UniApp.NodeInfo>((resolve) => {
    uni
      .createSelectorQuery()
      .in(instance)
      .select(selector)
      .boundingClientRect((res) => {
        // ensure return one obj
        const data = res instanceof Array ? res[0] : res;
        resolve(data);
      })
      .exec();
  });
};

export const getDoms = (instance: any, selector: string) => {
  return new Promise<UniApp.NodeInfo[]>((resolve) => {
    uni
      .createSelectorQuery()
      .in(instance)
      .selectAll(selector)
      .boundingClientRect((res) => {
        // ensure return one array
        const ls = res instanceof Array ? res : [res];
        resolve(ls);
      })
      .exec();
  });
};
