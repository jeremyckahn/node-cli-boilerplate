#!/usr/bin/env node

const commander = require('commander');
const { readFileSync, writeFileSync } = require('fs');
const lib = require('../dist/index').default;

const { version } = require('../package.json');

commander
  .version(version)
  .usage('[options] <file ...>')
  .option('--fix', 'Overwrite provided file with processed version')
  .parse(process.argv);

const { args: files } = commander;

if (!files.length) {
  commander.outputHelp();
  process.exit(0);
}

files.forEach(file => {
  const processedText = lib(readFileSync(file, 'utf8'));

  commander.fix ?
    writeFileSync(file, processedText, 'utf8') :
    process.stdout.write(processedText)
});
