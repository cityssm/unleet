# unleet

Ensuring that text entered by a user is _polite_ can be difficult.
Generating memorable passwords automatically using letters and numbers,
without creating an offensive combination is challenging as well.

This project attempts to help by taking a piece of text,
and replacing symbols that are commonly used to hide bad words with the letters
they may represent. The result can be scanned against a far simpler
bad words file.

**Worry less about maintaining a list of every possible spelling
of every bad word.**

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
