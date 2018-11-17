const fetch = require('node-fetch');
const chalk = require('chalk');
const searchArgs = process.argv.slice(2, 10);

const npmUrl = 'https://registry.npmjs.org/';
const thesaurusUrl = 'https://api.datamuse.com/words?ml=';

async function checkRegistry(packageName) {
  const res = await fetch(`${npmUrl}${packageName}`);
  if (res.status !== 200) {
    return chalk.green(`${packageName} sounds like a good name!`);
  }
  return chalk.red(`${packageName} is already taken :(`);
}

async function searchAllArgs() {
  for (const word of searchArgs) {
    checkRegistry(word).then(console.log);
  }
}

searchAllArgs();
