import configPro from './pro.js';
import configTest from './test.js';
import configDev from './dev.js';
const env = process.env.NODE_ENV;
let config;
if (env === 'production') {
  config = configPro;
} else if (env === 'test') {
  config = configTest;
} else {
  config = configDev;
}
export default config;
