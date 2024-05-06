// Minimum TypeScript Version: 4.0

declare module 'wink-eng-lite-web-model' {
  // turn off exporting by default since we don't want to expose internal details
  export {};

  // *** BEGIN Language Model Specific Declarations ***
  // These should be always in sync with the winkNLP's type declarations.
  // these types are internal details of the implementing model
  type StemAddon = unknown;
  type LemmatizeAddon = unknown;
  type ReadabilityStatsAddon = unknown;
  type WordVectorsAddon = unknown;

  // optional addons that some language models may have
  export interface ModelAddons {
    stem?: StemAddon;
    lemmatize?: LemmatizeAddon;
    readabilityStats?: ReadabilityStatsAddon;
    wordVectors?: WordVectorsAddon;
  }

  // these types are internal details of the implementing model
  type CoreModel = unknown;
  type SBDModel = unknown;
  type POSModel = unknown;
  type NERModel = unknown;
  type NEGATIONModel = unknown;
  type SAModel = unknown;
  type CERMetaModel = unknown;
  type FeatureFn = unknown;

  // A language model
  export interface Model {
    core: CoreModel;
    sbd: SBDModel;
    pos: POSModel;
    ner: NERModel;
    negation: NEGATIONModel;
    sa: SAModel;
    metaCER: CERMetaModel;
    featureFn: FeatureFn;
    addons: ModelAddons;
  }
  // *** END Language Model Specific Declarations ***

   const model: Model;
   export default model;
}
