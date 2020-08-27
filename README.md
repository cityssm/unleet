# unleet

[![npm](https://badgen.net/npm/v/@cityssm/unleet)](https://www.npmjs.com/package/@cityssm/unleet)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fd8f113908c04c54800c9454d50f2e2a)](https://app.codacy.com/gh/cityssm/unleet?utm_source=github.com&utm_medium=referral&utm_content=cityssm/unleet&utm_campaign=Badge_Grade_Dashboard)
[![Maintainability](https://api.codeclimate.com/v1/badges/e9343aee27eef62205f4/maintainability)](https://codeclimate.com/github/cityssm/unleet/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e9343aee27eef62205f4/test_coverage)](https://codeclimate.com/github/cityssm/unleet/test_coverage)
[![Build Status](https://travis-ci.com/cityssm/unleet.svg?branch=master)](https://travis-ci.com/cityssm/unleet)

**Worry less about maintaining a list of every possible spelling
of every bad word.**

Ensuring that text entered by a user is _polite_ can be difficult.
Generating memorable passwords automatically using letters and numbers,
without creating an offensive combination is challenging as well.

This project attempts to help by taking a piece of text,
and replacing symbols that are commonly used to hide bad words with the letters
they may represent. The result can be scanned against a far simpler
bad words file.

## Installation

```bash
npm install @cityssm/unleet
```

## Usage

```javascript
unleet("b@d w0rd");
= [ "bad word" ]

unleet("1337 $P33K");
= [ 'ieet zpeek', 'ieet speek', 'leet zpeek', 'leet speek' ]

unleet("0rg@ni℠");
= [ 'organizm', 'organism' ]
```

## Contributing

Found some text that doesn't _unleet_ properly?  Open an issue.

Pull requests with more bizarre Unicode-to-letter mappings
are more than welcome!
