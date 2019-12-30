import { FormatToObjectReturn } from '../src/types';
import { parseFormat } from './variables';

/**
 * @param format 10KB, 20MB, 30GB, 40TB, 50PB, 60EB, 70ZB, 80YB
 * @Return { unit, size, format }
 */
export const formatToObject = (format: string): FormatToObjectReturn => {
    const obj = parseFormat.exec(format);
    return {
        unit: obj && obj[4],
        size: obj && parseFloat(obj[1]),
        format: obj && obj[0],
    };
};
