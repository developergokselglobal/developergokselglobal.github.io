import config from './next.config';

describe('config', () => {
  it('should return an object with the correct pageExtensions', async () => {
    const result = await config();
    expect(result.pageExtensions).toEqual(['js', 'jsx', 'ts', 'tsx', 'mdx']);
  });

  it('should modify the webpack config correctly', async () => {
    const result = await config();
    const webpackConfig = {};
    const options = {
      defaultLoaders: {
        babel: 'babel-loader',
      },
    };
    const modifiedConfig = result.webpack(webpackConfig, options);
    // Add your assertions for the modified webpack config here
    // For example, you can check if the 'mdx' rule is added correctly
    expect(modifiedConfig.module.rules.some(rule => rule.test.test('.mdx'))).toBe(true);
  });
});