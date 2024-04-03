# wink-eng-lite-web-model
**winkNLP's English lite language model for Web Browsers**

[<img align="right" src="https://decisively.github.io/wink-logos/logo-title.png" width="100px" >](https://winkjs.org/)
This is a pre-trained English language model for the winkjs NLP package — [winkNLP](https://winkjs.org/wink-nlp/). It is compatible with [browserify](https://www.npmjs.com/package/browserify) — easily create a bundle that you can serve up to the web browser in a single `<script>` tag or even build a mobile apps. Its gzipped size is ~1MB.

It is an open-source language model, released under the MIT license.

It contains models for the following NLP tasks:

1. Tokenization
2. Token's Feature Extraction
3. Sentence Boundary Detection
4. Negation Handling
5. POS tagging
6. Automatic mapping of British spellings to American
7. Named Entity Recognition
8. Sentiment Analysis
9. Custom Entities Definition
10. Stemming using Porter Stemmer Algorithm V2
11. Lemmatization
12. Readability statistics computation

It is a derivative of [wink-eng-lite-model](https://github.com/winkjs/wink-eng-lite-model) and also supports [Typescript](https://github.com/winkjs/wink-eng-lite-web-model/tree/master/types).

## Getting Started

### Prerequisite
It requires Node.js `version 16.0.0` or above. The compatible browsers are listed [here](https://developer.mozilla.org/en-US/docs/Web/API/atob#browser_compatibility).

### Installation
The model must be installed along with the [wink-nlp](https://winkjs.org/wink-nlp/):

```sh
# Install wink-nlp
npm install wink-nlp --save
# Install wink-eng-lite-web-model
npm install wink-eng-lite-web-model --save
```

### Example
We start by requiring the **wink-nlp** package and the **wink-eng-lite-web-model**. Then we instantiate wink-nlp using the language model:

```javascript
// Load "wink-nlp" package.
const winkNLP = require('wink-nlp');
// Load english language model — light version.
const model = require('wink-eng-lite-web-model');
// Instantiate wink-nlp.
const nlp = winkNLP(model);

// Code for Hello World!
var text = 'Hello   World!';
var doc = nlp.readDoc(text);
console.log(doc.out());
// -> Hello   World!
```

### Documentation
Learn how to use this model with winkNLP from the following resources:
- [Overview](https://winkjs.org/wink-nlp/) — introduction to winkNLP.
- [Concepts](https://winkjs.org/wink-nlp/getting-started.html) — everything you need to know to get started.
- [API Reference](https://winkjs.org/wink-nlp/read-doc.html) — explains usage of APIs with examples.

## About model
The model supports following NLP tasks — tokenization, sentence boundary detection, negation handling, sentiment analysis, part-of-speech tagging, and named entity extraction.

### Tokenization
While it is trained to process English language text, it can tokenize text containing other languages such as Hindi, French and German. Such tokens are tagged as **X** (foreign word) during pos tagging.

### POS Tagging
The model follows the [Universal POS tags](https://universaldependencies.org/u/pos/) standards. It delivers an accuracy of **~95%** on a subset of WSJ corpus — this includes *tokenization of raw text prior to pos tagging*.

### Named Entity Recognition (NER)
The model is trained to detect **CARDINAL**, **DATE**, **DURATION**,  **EMAIL**, **EMOJI**, **EMOTICON**, **HASHTAG**, **MENTION**, **MONEY**, **ORDINAL**, **PERCENT**, **TIME**, and **URL**.

### Sentiment Analysis
It delivers a [f-score](https://en.wikipedia.org/wiki/F1_score) of **~84.5%**, when validated using Amazon Product Review [Sentiment Labelled Sentences Data Set](https://archive.ics.uci.edu/ml/machine-learning-databases/00331/) at [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/index.php).

### Storage Structure
The model is contained in the standard JSON format. Apart from the data, there is a tiny fraction of JS glue code, which is primarily used during model loading.


## Need Help?
If you spot a bug and the same has not yet been reported, raise a new [issue](https://github.com/winkjs/wink-eng-lite-web-model/issues).

## About wink
[Wink](https://winkjs.org/) is a family of open source packages for **Natural Language Processing**, **Machine Learning** and **Statistical Analysis** in NodeJS. The code is **thoroughly documented** for easy human comprehension and has a **test coverage of ~100%** for reliability to build production grade solutions.


## Copyright & License
The **wink-eng-lite-web-model** is copyright 2020-24 of [GRAYPE Systems Private Limited](https://graype.in/).

It is licensed under the terms of the MIT License.
