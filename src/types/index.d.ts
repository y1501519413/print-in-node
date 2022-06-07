interface PrintParams {
  path: string
  printer?: string
  options?: Array<string>
}

interface Print {
  (params: PrintParams): Promise<unknown>
}

declare module 'fs'
declare module 'path'
declare module 'child_process'
declare module 'util'
