import { nanoid } from '../nanoid';
import slugify from 'slugify';

export const createSlug = (value) => {
  return value ? slugify(value, { strict: true }) : nanoid();
};
