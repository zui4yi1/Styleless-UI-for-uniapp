import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import isBetween from 'dayjs/plugin/isBetween';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import minMax from 'dayjs/plugin/minMax';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekday from 'dayjs/plugin/weekday';
export type { Dayjs } from 'dayjs';

/** 导入常用的dayjs插件 */
dayjs.extend(customParseFormat);
dayjs.extend(calendar);
dayjs.extend(dayOfYear);
dayjs.extend(isBetween);
dayjs.extend(isLeapYear);
dayjs.extend(minMax);
dayjs.extend(weekday);
dayjs.extend(weekOfYear);

dayjs.locale('zh-cn');

/**
 *
 * dayjs常用方法
 * 创建: now = dayjs();
 * 返回时间戳: now.valueOf()
 * 返回字符串日期: now.format('YYYY-MM-DD'), now.format('DD')
 * 返回number日期: now.year(),month()
 * 返回月天数： now.daysInMonth()
 * 转原生date对象： now.toDate()
 * 增加日期： now.add(10,'y');
 * 时间的开始: now.startOf('y')
 *
 */
export default dayjs;
