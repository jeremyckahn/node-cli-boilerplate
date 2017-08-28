# node-cli-boilerplate

Minimal, practical boilerplate for writing Node-powered CLI tools.  By default it processes text in a UNIX-friendly way.

## Usage

```
$: npm install && ./bin/cli.js --help

  Usage: node-cli-boilerplate [options]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    --fix          Overwrite provided file with processed version
```

Omitting `--fix` prints the processed text to stdout.

## Getting started

To use this as the base for a new project:

```
git clone --depth=1 https://github.com/jeremyckahn/node-cli-boilerplate.git
rm -rf node-cli-boilerplate/.git
git init
git add --all
git commit -m "Initial commit"
npm install
```

### Protip

When starting to use this repo, search for all instances of "node-cli-boilerplate" and convert them to the name of your tool.

## License

MIT.
