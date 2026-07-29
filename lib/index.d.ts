import * as sharedb from 'sharedb';
type Type = (typeof sharedb)['types']['map'][string];

// Contract a registered subtype implements so json0's diff can delegate to it
// for embedded values of that subtype (eg rich-text). isDoc lets diff recognise
// such a value by shape, since a raw value carries no type tag.
export interface DiffableSubtype {
  diff(before: any, after: any): any;
  isDoc(value: any): boolean;
}

export const type: Type & {
  diff(before: any, after: any): sharedb.Op[];
};
