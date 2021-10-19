// Minimum TypeScript Version: 4.0

declare module 'wink-eng-lite-web-model' {
   // turn off exporting by default since we don't want to expose internal details
   export {};

   import { Model } from 'wink-nlp';

   const model: Model;
   export default model;
}
