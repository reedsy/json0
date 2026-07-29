import * as sharedb from 'sharedb';
type BaseType = (typeof sharedb)['types']['map'][string];

export interface Diffable {
  diff(before: any, after: any): any[];
  isDoc?(value: any): boolean
}

export type Json0Type = BaseType & Diffable & {
  registerSubtype(subtype: BaseType & Diffable): void;
}
export const type: Json0Type;
