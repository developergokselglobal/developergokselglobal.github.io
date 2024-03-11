// next.config.mjs
import devConfig from './next.config.dev.mjs';
import prodConfig from './next.config.prod.mjs';

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;