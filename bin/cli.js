#!/usr/bin/env node

const commander = require('commander');
const getStdin = require('get-stdin');
const { readFileSync, writeFileSync } = require('fs');
const lib = require('../dist/index').default;

const { version } = require('../package.json');

commander
  .version(version)
  .usage('[options] <file ...>')
  //.option('--some-option', 'This is an example of an option')
  .parse(process.argv);

const { args: files } = commander;

getStdin().then(stdin => {
  if (!files.length && !stdin) {
    commander.outputHelp();
    process.exit(0);
  }

  if (stdin) {
    process.stdout.write(
      lib(stdin)
    );
  } else {
    files.forEach(file => {
      process.stdout.write(
        lib(
          readFileSync(file, 'utf8')
        )
      );
    });
  }
});
