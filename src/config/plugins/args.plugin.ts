import yargs = require('yargs');
import { hideBin } from 'yargs/helpers';
const argv = yargs(hideBin(process.argv)).argv

export const yarg = yargs(hideBin(process.argv))
  .parseSync();
