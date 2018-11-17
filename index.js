#!/usr/bin/env node

const fetch = require('node-fetch');
const chalk = require('chalk');
const args = process.argv.slice(2);

const ROOS_CONSTANTS = {
  MAX_SEARCH: 10,
  MAX_THES_SEARCH: 3,
  NPM_URL: 'https://registry.npmjs.org/',
  THES_URL: 'https://api.datamuse.com/words?ml='
};

const searchThesaurus = args.includes('-s') || args.includes('--synonyms');
const searchLimit = searchThesaurus
  ? ROOS_CONSTANTS.MAX_THES_SEARCH
  : ROOS_CONSTANTS.MAX_SEARCH;

const searchArgs = args
  .filter(w => w !== '-s' && w !== '--synonyms')
  .slice(0, searchLimit);

async function checkRegistry(packageName) {
  const res = await fetch(`${ROOS_CONSTANTS.NPM_URL}${packageName}`);
  if (res.status !== 200) {
    return chalk.green(`${packageName} sounds like a good name!`);
  }
  return chalk.red(`${packageName} is already taken :(`);
}

async function getSynonyms(packageName) {
  const res = await fetch(`${ROOS_CONSTANTS.THES_URL}${packageName}`);
  const words = await res.json();
  return words.slice(0, 5).map(w => w.word);
}

async function searchSynonyms(word) {
  const synonyms = await getSynonyms(word);
  for (const syn of synonyms) {
    makeResponse(syn);
  }
}

async function makeResponse(word) {
  return checkRegistry(word).then(console.log);
}

async function searchAllArgs() {
  for (const word of searchArgs) {
    makeResponse(word);
    if (searchThesaurus) {
      searchSynonyms(word);
    }
  }
}

searchAllArgs();
