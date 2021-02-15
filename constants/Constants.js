import earphones from './Devices';
import { Dimensions, NativeModules, Platform } from 'react-native';

const { StatusBarManager } = NativeModules;
const { width, height } = Dimensions.get('window');
const statusBarHeight = Platform.os === 'ios' ? 20 : StatusBarManager.HEIGHT;

export {earphones};

export const Options = {headerShown: false}

export const pagePaddingTop = statusBarHeight + 10;

export const pagePaddingHorizontal = width * 0.08;

export const marginBottom = width * 0.05;

export const displaySize = width - pagePaddingHorizontal * 2;

export const imgSize = (width - pagePaddingHorizontal * 4) / 2;

export const cardSize = imgSize + 10 + 10;

