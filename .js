const { recmaImportImages } = require('recma-import-images');
const remarkGfm = require('remark-gfm');
const { remarkRehypeWrap } = require('remark-rehype-wrap');
const remarkUnwrapImages = require('remark-unwrap-images');
const shiki = require('shiki');
const { unifiedConditional } = require('unified-conditional');
const path = require('path');

module.exports = async function config() {
  const highlighter = await shiki.getHighlighter({
    theme: 'css-variables',
  });

  return {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    webpack(config, options) {
      config.module.rules.push({
        test: /\.mdx$/,
        use: [
          options.defaultLoaders.babel,
          {
            loader: '@mdx-js/loader',
            options: {
              rehypePlugins: [
                [
                  require('@leafac/rehype-shiki'),
                  {
                    highlighter,
                  },
                ],
                [
                  remarkRehypeWrap,
                  {
                    node: {
                      type: 'mdxJsxFlowElement',
                      name: 'Typography',
                    },
                    start: ':root > :not(mdxJsxFlowElement)',
                    end: ':root > mdxJsxFlowElement',
                  },
                ],
              ],
              remarkPlugins: [
                remarkGfm,
                remarkUnwrapImages,
                [
                  unifiedConditional,
                  [
                    new RegExp(
                      `^${path.resolve('src/app/blog')}`
                    ),
                    [
                      [
                        require('./remarkMDXLayout'),
                        '@/app/blog/wrapper',
                        'article',
                      ],
                    ],
                  ],
                  [
                    new RegExp(
                      `^${path.resolve('src/app/work')}`
                    ),
                    [
                      [
                        require('./remarkMDXLayout'),
                        '@/app/work/wrapper',
                        'caseStudy',
                      ],
                    ],
                  ],
                ],
              ],
            },
          },
        ],
      });
      return config;
    },
  };
};
