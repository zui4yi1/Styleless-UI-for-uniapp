import { buildProps } from '@/utils/element-plus/props';

export const props = buildProps({
  value: {
    type: String,
    default: '',
  },
} as const);
