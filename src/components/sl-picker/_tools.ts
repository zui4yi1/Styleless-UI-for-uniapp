const _findValsInx = (list: any[], vals: string[], inxs: number[], options: any): any[] => {
  // 如果有默认全选, 有值时索引需要+1
  const addtionCount = options.hasAll ? 1 : 0;
  if (vals.length === 0) return [];
  const tmpVal = vals.shift();
  const inx = list.findIndex((t) => t.value === tmpVal);
  if (inx === -1) {
    inxs.push(0);
    // don't return inxs;
  } else {
    inxs.push(inx + addtionCount);
  }
  // 如果是最后一个则终止迭代
  if (vals.length === 0) {
    return inxs;
  }
  // TODO: 用dataMap取children
  return _findValsInx(list[inx]?.children || [], vals, inxs, options);
};

/** 获取初始值的索引 */
function getInitValInxs(cascadeTree: any[], propVal: any[], options: any) {
  if (!propVal?.length) return Array(options.columns).fill(0);
  const vals = propVal.slice(0);
  if (propVal.length < options.columns && options.hasAll) {
    // if hasAll fill ''
    vals.push(...Array(options.columns - propVal.length).fill(''));
  }
  const res = _findValsInx(cascadeTree, vals, [], options);
  return res;
}

const _findColumn = (cascadeTree: any[], inxs: number[], options: any): any[] => {
  if (inxs.length <= 1) return cascadeTree;

  const { dataMap, hasAll } = options;
  const addtionCount = hasAll ? -1 : 0;
  const tmpInx = (inxs.shift() || 0) + addtionCount;
  if (tmpInx === -1) {
    return [];
  }
  const children = cascadeTree[tmpInx][dataMap.children] || [];
  return _findColumn(children, inxs, options);
};
/** 获取列 */
function getColomnList(cascadeTree: any[], inxs: number[], options: any) {
  const res = _findColumn(cascadeTree, inxs.slice(0), options);
  // 全部功能, 涉及太多, 后面再完善
  if (options.hasAll) {
    const all = {
      [options.dataMap.label]: '全部',
      [options.dataMap.value]: '',
    };
    res.unshift(all);
  }
  return res;
}

const _findInxObj = (cascadeTree: any[], inxs: number[], options: any, res: any[] = []): any[] => {
  if (inxs.length === 0) return [];

  const { hasAll, dataMap } = options;
  const addtionCount = hasAll ? -1 : 0;

  const tmpInx = (inxs.shift() || 0) + addtionCount;
  if (tmpInx === -1) {
    return res;
  }
  res.push(cascadeTree[tmpInx]);
  if (inxs.length === 0) {
    return res;
  }
  const children = cascadeTree[tmpInx][dataMap.children] || [];
  return _findInxObj(children, inxs, options, res);
};

function getInxObjs(cascadeTree: any[], inxs: number[], options: any) {
  const res = _findInxObj(cascadeTree, inxs, options);
  return res.filter((t) => !!t); // 过滤带全部的空值
}

function getInxsVal(cascadeTree: any[], inxs: number[], options: any) {
  const res = getInxObjs(cascadeTree, inxs.slice(0), options);
  const { dataMap } = options;
  return res.map((item) => item[dataMap.value]);
}
function getInxsLabel(cascadeTree: any[], inxs: number[], options: any) {
  const res = getInxObjs(cascadeTree, inxs.slice(0), options);
  const { dataMap } = options;
  return res.map((item) => item[dataMap.label]);
}

export { getColomnList, getInitValInxs, getInxsLabel, getInxsVal };
