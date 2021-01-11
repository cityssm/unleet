# unleet

[![npm](https://img.shields.io/npm/v/@cityssm/unleet)](https://www.npmjs.com/package/@cityssm/unleet) [![Codacy Badge](https://img.shields.io/codacy/grade/fd8f113908c04c54800c9454d50f2e2a)](https://app.codacy.com/gh/cityssm/unleet) [![Maintainability](https://img.shields.io/codeclimate/maintainability/cityssm/unleet)](https://codeclimate.com/github/cityssm/unleet/maintainability) [![Test Coverage](https://img.shields.io/codeclimate/coverage/cityssm/unleet)](https://codeclimate.com/github/cityssm/unleet/test_coverage) [![AppVeyor](https://img.shields.io/appveyor/build/dangowans/unleet)](https://ci.appveyor.com/project/dangowans/unleet) [![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/cityssm/unleet)](https://app.snyk.io/org/cityssm/project/74b981cc-b59e-4338-b290-e161741c418a)

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
