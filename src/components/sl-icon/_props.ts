import type { CSSProperties } from 'vue';

export interface IProps {
  className?: string | string[];
  iconLib?: string;
  name: string;
  color?: IColor;
  size?: string | number;
  index?: string | number;
  hoverClass?: string;
  styleProps?: CSSProperties;
}

export const defaultProps = {
  className: '',
  iconLib: 'common',
  name: 'icon_add',
  color: 'placeholder' as IColor,
  hoverClass: '',
  size: 36,
  index: 0,
  styleProps: () => ({}),
};
