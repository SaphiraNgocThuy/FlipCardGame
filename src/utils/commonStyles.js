import { screenWidth } from './helper';

const isBigScreen = screenWidth >= 600;

export const padding = isBigScreen
  ? { sm: 16, md: 32, lg: 48 }
  : { sm: 8, md: 16, lg: 24 };

export const fontSize = isBigScreen
  ? { md: 30, lg: 40, xl: 60 }
  : { md: 16, lg: 20, xl: 30 };

export const borderRadius = isBigScreen ? 60 : 30;
