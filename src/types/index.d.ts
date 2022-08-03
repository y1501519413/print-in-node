interface Print {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (path: string, options?: Array<string>, printer?: string): Promise<any>
}

declare module 'fs'
declare module 'path'
declare module 'child_process'
declare module 'util'
