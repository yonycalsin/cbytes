import { formatToObject } from './format-to-object';
import { cbytes } from './index';
/**
 * @param size number
 * @Return { unit, size, format }
 */
export const sizeToObject = (size: number) => {
    const format: any = cbytes(size);
    return formatToObject(format);
};
