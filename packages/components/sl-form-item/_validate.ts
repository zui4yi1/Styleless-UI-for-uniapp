type IValidatorFunc = (val: any, formData?: any) => PromiseLike<string>;

/**
 * 总共五个属性, 都是非必填
 * @description 总共三种校验配置, 及优先级: validator > required > reg. 若无此三种之一, 则跳过
 */
export interface IValidtorRule {
  /**
   * @property {@link IValidatorFunc} 最高优化级的校验, 若配置则reg属性无效
   */
  validator?: IValidatorFunc;

  /**
   * @property {Boolean} 是否必填
   */
  required?: boolean;

  /**
   * @property {RegExp} 正则表达式
   */
  reg?: RegExp;

  /**
   * @property {String} 校验提示
   */
  text?: string;

  /**
   * @property {Boolean} 是否正则为正向校验, 用于决定何时提示text, 默认正向true. 即RegRxp.test结果为true时提示text, 若为false则结果为false时才提示
   */
  isRegPositive?: boolean;
}

/**
 * 正则校验
 * @description only string/number value can use reg rules
 * @param {*} reg
 * @param {*} text
 * @returns
 */
const regValidator = (reg: RegExp, text: string, isRegPositive = true) => {
  return (val: any) => {
    if (!['string', 'number'].includes(typeof val)) return Promise.resolve('');
    const testResust = reg.test(`${val}`);
    const isInvalid = isRegPositive ? testResust : !testResust;
    return Promise.resolve(isInvalid ? text : '');
  };
};

/**
 * 必填校验
 * @param text
 * @returns
 */
const requiredValidator = (text: string) => {
  return (val: any) => {
    if ([null, undefined, NaN].includes(val)) return Promise.resolve(text);
    if (['string', 'number'].includes(typeof val) && `${val}` === '') return Promise.resolve(text);
    if (val instanceof Array && val.length === 0) return Promise.resolve(text);
    return Promise.resolve('');
  };
};

/**
 * @description 验证顺序:
 * @description 1. 有自定义一律走自定义的validator
 * @description 2: 有required的走requiredValidator
 * @description 3. 有reg的走正则regValidator
 * @description 4. 其它走无效的规则invalidValidator, 不验证返回空
 * @returns PromiseLike(string[])
 */
export const validatorExecutor = (
  rules: IValidtorRule[],
  val: any,
  formData?: any,
): PromiseLike<string[]> => {
  const asyncFuncs: IValidatorFunc[] = [];
  rules.forEach((t) => {
    if (t.validator) asyncFuncs.push(t.validator, formData || {});
    else if (t.required) asyncFuncs.push(requiredValidator(t.text as string));
    else if (t.reg) asyncFuncs.push(regValidator(t.reg, t.text as string, t.isRegPositive));
    else return null;
  });

  return new Promise((resolve) => {
    Promise.all(asyncFuncs.map((f) => f(val))).then((res) => {
      resolve(res.filter((t) => t !== ''));
    });
  });
};
