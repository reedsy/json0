declare module '@reedsy/json0' {
  import * as sharedb from 'sharedb';
  export type Type = (typeof sharedb)['types']['map'][string];
  export const type: Type;
}
