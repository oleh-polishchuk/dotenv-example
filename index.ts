import * as dotenv from 'dotenv';
import a from './src/a';

dotenv.config();

import b from './src/b';

console.log(a.getEnvironmentName() === 'development');  // False (although you expect True)
console.log(b.getEnvironmentName() === 'development');  // True

