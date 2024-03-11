const rehypeShiki = require('@leafac/rehype-shiki');
const nextMDX = require('@next/mdx');
const { Parser } = require('acorn');
const jsx = require('acorn-jsx');
const escapeStringRegexp = require('escape-string-regexp');
const path = require('path');
const { recmaImportImages } = require('recma-import-images');
const remarkGfm = require('remark-gfm');
const { remarkRehypeWrap } = require('remark-rehype-wrap');
const remarkUnwrapImages = require('remark-unwrap-images');
const shiki = require('shiki');
const { unifiedConditional } = require('unified-conditional');

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

function remarkMDXLayout(source, metaName) {
  let parser = Parser.extend(jsx());
  let parseOptions = { ecmaVersion: 'latest', sourceType: 'module' };

  return (tree) => {
    let imp = `import _Layout from '${source}'`;
    let exp = `export default function Layout(props) {
      return <_Layout {...props} ${metaName}={${metaName}} />
    }`;

    tree.children.push(
      {
        type: 'mdxjsEsm',
        value: imp,
        data: { estree: parser.parse(imp, parseOptions) },
      },
      {
        type: 'mdxjsEsm',
        value: exp,
        data: { estree: parser.parse(exp, parseOptions) },
      },
    );
  };
}

module.exports = async function config() {
  let highlighter = await shiki.getHighlighter({
    theme: 'css-variables',
  });

  let withMDX = nextMDX({
    extension: /\.mdx$/,
    options: {
      recmaPlugins: [recmaImportImages],
      rehypePlugins: [
        [rehypeShiki, { highlighter }],
        [
          remarkRehypeWrap,
          {
            node: { type: 'mdxJsxFlowElement', name: 'Typography' },
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
            new RegExp(`^${escapeStringRegexp(path.resolve('src/app/blog'))}`),
            [[remarkMDXLayout, '@/app/blog/wrapper', 'article']],
          ],
          [
            new RegExp(`^${escapeStringRegexp(path.resolve('src/app/work'))}`),
            [[remarkMDXLayout, '@/app/work/wrapper', 'caseStudy']],
          ],
        ],
      ],
    },
  });

  return withMDX(nextConfig);
};