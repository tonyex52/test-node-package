#!/usr/bin/env node

const commander = require("commander");

commander
  .version('1.0.0');

commander
  .command('greet <name>')
  .alias('hi')
  .description('say Hello')
  .option('-g, --gender <g>', 'your gender')
  .option('-s, --salutation <s>', 'your salutation')
  .action((name, options) => {
    let text = 'Hi, ';
    if( options.salutation ) text += `${ options.salutation } ${ name }`;
    if( options.gender ) text += `, your gender is ${ options.gender }`;
    console.log(text);
  }).on('--help', () => {
    console.log('  Example:');
    console.log();
    console.log('    Hi, Mr. Wang, your gener is male');
  });

  commander.parse(process.argv);
