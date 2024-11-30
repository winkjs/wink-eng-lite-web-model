# [Squashed a bug](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.8.1)
## Version 1.8.1 November 30, 2024

### 🐛 Fixes
- Resolve state inconsistency issue. ✅

### ⚙️ Updates

- We have made some minor improvements in the model. 😎


# [Add support for more non regular space characters](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.8.0)
## Version 1.8.0 May 19, 2024

### ✨ Features

- We've enhanced the model to process em/en, third/quarter, thin/hair, medium math space characters & regular/narrow non breaking space characters. 🚀 🛰️

# [Operational update](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.7.1)
## Version 1.7.1 May 06, 2024

### ⚙️ Updates

- We have made some behind the scene updates in type definitions. 😎

# [Enable accented chars & word joiner char handling](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.7.0)
## Version 1.7.0 April 12, 2024

### ✨ Features

- Accented characters now also include diacritical marks. 🙌
- Token containing a word joiner is treated as a single token. ✅
- Shape of token containing accented chars, diacritical marks & word joiner char(s) is now determined after removing them. 👏



# [Enable non-breaking space (U+00A0) handling](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.6.0)
## Version 1.6.0 April 03, 2024

### ✨ Features

- We've upgraded the model to process non-breaking spaces in the same way as standard spaces. 🙌


# [Link github repo](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.5.2)
## Version 1.5.2 August 01, 2023

### ⚙️ Updates

- Updated the missed package.json version. ❤️‍🩹

# [Link github repo](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.5.1)
## Version 1.5.1 August 01, 2023

### ⚙️ Updates

- We have added link to the github repo in the package.json file. 🙌

# [Improved POS tagging a bit](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.5.0)
## Version 1.5.0 March 27, 2023

### ✨ Features

- We have enhanced the model a little bit — POS tagging accuracy is now touching 95%. 🙌 🎉

# [Made it a little better](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.4.3)
## Version 1.4.3 August 20, 2022

### ⚙️ Updates

- We have made some behind the scene updates. 😎

# [Squashed a bug](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.4.2)
## Version 1.4.2 August 07, 2022

### 🐛 Fixes
- Added missing pre-processing of fractions for NER. ✅

# [Defined version prerequisite](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.4.1)
## Version 1.4.1 April 06, 2022

### ⚙️ Updates

- We have added engines in package.json for Node.js >= 16 and link to compatible browser version in README. 😎 📔

# [Detects unsupported Node.js & Browsers and their versions](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.4.0)
## Version 1.4.0 March 24, 2022

### ✨ Features

- While loading, it automatically detects unsupported Node.js & Browsers and their versions. 😎 🙌 😇

# [Making it more browser friendly](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.3.3)
## Version 1.3.3 February 08, 2022

### ⚙️ Updates

- We have removed Node.js `Buffer.from()` API calls completely. ✅ 👏 🎉

# [Operational update](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.3.2)
## Version 1.3.2 November 18, 2021

### ⚙️ Updates

- We have made some behind the scene updates. 😎

# [Fixed a bug](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.3.1)
## Version 1.3.1 November 18, 2021

### 🐛 Fixes
- Squashed a typo bug in package.json in `types` field.

# [Adding Typescript support](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.3.0)
## Version 1.3.0 November 06, 2021

### ✨ Features
- We have added support for Typescript. 🙌🎉

# [Allows creating multiple instances of winkNLP](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.2.2)
## Version 1.2.2 August 09, 2021
### 🐛 Fixes
- Now create multiple instances of winkNLP using the model. 🔢

# [Squashed a bug](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.2.1)
## Version 1.2.1 July 15, 2021
### 🐛 Fixes
- Rectified a buggy regex, which failed to parse relatively long numerals. 👏✅


# [Adding Readability Stats](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.2.0)
## Version 1.2.0 June 15, 2021

### ✨ Features
- Determine the document's Flesch Reading Ease Score (FRES), Reading Time, Complex words, Sentiment Score and more with `its.readabilityStats` helper. 📚📊👏


# [Adding lemmatizer support](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.1.0)
## Version 1.1.0 May 22, 2021

### ✨ Features
- Now use `its.lemma` helper to obtain lemma of words. 👏 🎉

#
### ⚙️ Updates

- We have made some behind the scene updates to lexicon & pos model. 📔


# [Fixing custom entities meta model loading](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.0.1)
## Version 1.0.1 December 2, 2020


### 🐛 Fixes
- Custom entities meta model loading was failing. It has been fixed now. ✅


# [Announcing the English lite language model for Web Browsers](https://github.com/winkjs/wink-eng-lite-web-model/releases/tag/1.0.0)
## Version 1.0.0 November 16, 2020


### ✨ Features
- Happy to release version 1.0.0 for you! 💫👏
- You can now build pure web browser or mobile NLP apps without requiring any server side deployment. 😇
