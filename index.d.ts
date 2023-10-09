import { Options } from 'php-server';

declare module 'node-adminer' {
  export interface StartAdminerOptions extends Options {
    theme?: keyof typeof import('./themes.json');
  }

  function startAdminer(args: StartAdminerOptions): Promise<void>;

  export default startAdminer;
}