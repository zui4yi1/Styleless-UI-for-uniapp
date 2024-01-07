import dayjs from '@/utils/date';
import type { Dayjs, OpUnitType } from 'dayjs';
import type { IMode } from './_props';

/** 获取列的类型 */
function getColumnType(mode: IMode, inx: number) {
  switch (mode) {
    case 'date':
      return (inx === 1 && 'year') || (inx === 2 && 'month') || 'date';
    default:
      break;
  }
}

/** 生成年份列 */
function genYears(range: Dayjs[]) {
  const startYear = range[0].year();
  const endYear = range[1].year();
  return Array(endYear - startYear + 1)
    .fill(startYear)
    .map((t, inx) => {
      return {
        label: `${t + inx}年`,
        value: `${t + inx}`,
      };
    });
}

/** 生成月份列 */
function genMonths(range: Dayjs[], year: number) {
  if (!year) return [];
  const startYear = range[0].year();
  const endYear = range[1].year();
  // 算法：
  // 如果是year=startYear, 则开始取start的月份, 若> 则为0
  // 如果是year=endYear, 则结束取end的月份, 若< 则是11
  const startMonth = year === startYear ? range[0].month() : 0;
  const endMonth = year === endYear ? range[1].month() : 11;
  return Array(endMonth - startMonth + 1)
    .fill(startMonth)
    .map((t, inx) => {
      return {
        label: `${t + inx + 1}月`,
        value: `${t + inx + 1}`,
      };
    });
}

/** 生成日期列 */
function genDates(range: Dayjs[], yearMon: number[]) {
  if (yearMon.length !== 2) return [];
  // 当前年月
  const curYearMon = dayjs([...yearMon, 1] as any);

  const startMonth = range[0].startOf('month');
  const endMonth = range[1].startOf('month');
  // 算法：
  // 如果是同年同月, 则开始取start的日期, 若> 则为1
  // 如果是同年同月, 则结束取end的日期, 若< 则是当前月份的天数
  const startDate = curYearMon.startOf('month').isSame(startMonth) ? range[0].date() : 1;
  const endDate = curYearMon.startOf('month').isSame(endMonth)
    ? range[1].date()
    : curYearMon.daysInMonth(); // TODO: 润年还有问题, 好像都是31天
  return Array(endDate - startDate + 1)
    .fill(startDate)
    .map((t, inx) => {
      return {
        label: `${t + inx}日`,
        value: `${t + inx}`,
      };
    });
}

/** 初始日期范围, 返回dayjs对象 */
function initDateRange(
  start: string,
  end: string,
  format = 'YYYY-MM-DD',
  { startIsToday = false, endIsToday = false },
) {
  const now = dayjs();
  // 不传startd时, 默认前80年的年初, 不传end时默认后10的年末
  const startDate = start
    ? dayjs(start, format)
    : startIsToday
    ? dayjs(now, format)
    : now.subtract(80, 'year').startOf('y');
  const endDate = end
    ? dayjs(end, format)
    : endIsToday
    ? dayjs(now, format)
    : now.add(10, 'year').endOf('y');
  return [startDate, endDate];
}

/** 获取初始值 */
function getInitVal(range: Dayjs[], propVal: string, field: OpUnitType = 'date') {
  // 即使给了默认值, 也会受范围的影响
  const now = dayjs(propVal || undefined);
  if (now.isBetween(range[0], range[1], field, '[]')) return now;
  else if (now.isBefore(range[0], field)) return range[0];
  else return range[1];
}

/** 获取初始值的索引 */
function getInitValInxs(range: Dayjs[], initVal: Dayjs, field: OpUnitType = 'date') {
  // 一律返回三个值
  if (initVal.isBetween(range[0], range[1], field, '[]')) {
    return [
      initVal.year() - range[0].year(),
      initVal.isSame(range[0], 'year') ? initVal.month() - range[0].month() : initVal.month(),
      initVal.isSame(range[0], 'month') ? initVal.date() - range[0].date() : initVal.date() - 1,
    ];
  } else if (initVal.isBefore(range[0], field)) {
    return [0, 0, 0];
  } else {
    return [range[1].year() - range[0].year(), range[1].month(), range[1].date() - 1];
  }
}

function getRtnVal(
  columns: number,
  columnDicts: IDict[],
  valsInx: number[],
  format = 'YYYY-MM-DD',
) {
  const objs: string[] = new Array(columns)
    .fill(0)
    .map((_, inx) => columnDicts[inx][valsInx[inx]].value);
  return dayjs(objs.join('-')).format(format);
}

export {
  genDates,
  genMonths,
  genYears,
  getColumnType,
  getInitVal,
  getInitValInxs,
  getRtnVal,
  initDateRange,
};
