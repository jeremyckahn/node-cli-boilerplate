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

Here's a handy snippet you can add to your `.bash_profile` to create new tools easily:

```
function new_cli_tool () {
  if [ -z "$1" ];
  then
    "Must specify a project name as the first argument"
    exit 1
  else
    git clone --depth=1 https://github.com/jeremyckahn/node-cli-boilerplate.git "$1"
    cd "$1" || exit 1
    rm -rf .git
    find . -type f -exec sed -i "" "s/node-cli-boilerplate/$1/g" {} \;
    git init
    git add --all
    git commit -m "Initial commit"
    npm install
  fi
}
```

## License

MIT.
